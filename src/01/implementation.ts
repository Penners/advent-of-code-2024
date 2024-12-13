const distance = (a: number, b: number) => {
  if (a > b) return a - b;
  return b - a;
};

export const part1 = (input: string): number => {
  const left: number[] = [];
  const right: number[] = [];
  input.split("\n").forEach((line) => {
    const [l, r] = line.split(" ").filter((char) => char.trim() !== "");
    left.push(parseInt(l));
    right.push(parseInt(r));
  });

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < left.length; i++) {
    total += distance(left[i], right[i]);
  }

  return total;
};

export const part2 = (input: string): number => {
  const left: number[] = [];
  const right: number[] = [];
  const rightCache = new Map<number, number>();
  input.split("\n").forEach((line) => {
    const [l, r] = line
      .split(" ")
      .filter((char) => char.trim() !== "")
      .map((n) => parseInt(n));
    left.push(l);
    right.push(r);
    const v = rightCache.get(r);
    if (v) {
      rightCache.set(r, v + 1);
    } else {
      rightCache.set(r, 1);
    }
  });

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < left.length; i++) {
    total += left[i] * (rightCache.get(left[i]) || 0);
  }

  return total;
};
