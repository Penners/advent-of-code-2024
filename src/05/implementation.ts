const parseInput = (input: string) => {
  const [x, y] = input.split("\r\n\r\n");
  const edges = x.split("\r\n");
  const pages = y
    .split("\r\n")
    .map((row) => row.split(",").map((string) => parseInt(string)));

  return { edges, pages };
};

export const part1 = (input: string) => {
  const { edges, pages } = parseInput(input);
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

  return pages.reduce((prev, curr) => {
    const alreadyPrintedPages = new Set<number>();
    for (let i = 0; i < curr.length; i++) {
      if (rules.has(curr[i])) {
        const rulesSet = rules.get(curr[i]);
        const intersection =
          rulesSet?.intersection(alreadyPrintedPages) ?? new Set();
        if (intersection.size > 0) {
          return prev;
        }
      }
      alreadyPrintedPages.add(curr[i]);
    }

    const mid = curr[Math.floor(curr.length / 2)];
    return prev + mid;
  }, 0);
};

export const part2 = (input: string) => {};
