const parseInput = (input: string) => {
  const [x, y] = input.split("\r\n\r\n");
  const edges = x.split("\r\n");
  const pages = y
    .split("\r\n")
    .map((row) => row.split(",").map((string) => parseInt(string)));
  const rules = new Map<number, Set<number>>();
  edges.forEach((v) => {
    const [j, k] = v.split("|").map((num) => {
      return parseInt(num);
    });
    if (j !== undefined && k !== undefined) {
      if (rules.has(j)) {
        rules.get(j)?.add(k);
      } else {
        rules.set(j, new Set([k]));
      }
    }
  });
  return { edges, pages, rules };
};

const validate = (row: number[], rules: Map<number, Set<number>>) => {
  const alreadyPrintedPages = new Set<number>();
  let valid = true;
  for (let i = 0; i < row.length; i++) {
    if (rules.has(row[i])) {
      const rulesSet = rules.get(row[i]);
      const intersection =
        rulesSet?.intersection(alreadyPrintedPages) ?? new Set();
      if (intersection.size > 0) {
        valid = false;
        break;
      }
    }
    alreadyPrintedPages.add(row[i]);
  }
  return valid;
};

export const part1 = (input: string) => {
  const { rules, pages } = parseInput(input);
  return pages.reduce((prev, curr) => {
    if (!validate(curr, rules)) {
      return prev;
    }
    const mid = curr[Math.floor(curr.length / 2)];
    return prev + mid;
  }, 0);
};

export const part2 = (input: string) => {
  const { rules, pages } = parseInput(input);
  const invalidRules = pages.filter((row) => !validate(row, rules));
  let result = 0;
  invalidRules.forEach((row) => {
    const output = orderInvalidSet(row, rules);
    result += output[Math.floor(output.length / 2)];
  });
  return result;
};

export const orderInvalidSet = (
  row: number[],
  rules: Map<number, Set<number>>
): number[] => {
  return row.sort((a, b) => {
    if (rules.get(a)?.has(b)) {
      return -1;
    }
    return 1;
  });
};
