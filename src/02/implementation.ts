import { distance } from "../utils";

const parseInput = (input: string): number[][] => {
  return input.split("\n").map((line) =>
    line
      .split(" ")
      .filter((char) => char.trim() !== "")
      .map((char) => parseInt(char))
  );
};

const isValidDistance = (a: number, b: number): boolean => {
  const result = distance(a, b);
  return !(result === 0 || result > 3);
};

const followsTrend = (a: number, b: number, trend: "+" | "-"): boolean => {
  if (trend === "+" && a < b) return true;
  if (trend === "-" && a > b) return true;
  return false;
};

const isValid = (row: number[]) => {
  if (row[0] === row[1]) return false;
  const trend = row[0] > row[1] ? "-" : "+";
  for (let i = 0; i < row.length - 1; i++) {
    let curr = row[i];
    let next = row[i + 1];
    if (!isValidDistance(curr, next)) {
      return false;
    }
    if (!followsTrend(curr, next, trend)) {
      return false;
    }
  }
  return true;
};

export const part1 = (input: string) => {
  const data = parseInput(input);

  return data.reduce((prev, curr) => {
    if (isValid(curr)) {
      return prev + 1;
    }
    return prev;
  }, 0);
};

export const part2 = (input: string) => {
  const data = parseInput(input);

  return data.reduce((prev, curr) => {
    for (let i = 0; i < curr.length; i++) {
      const candidate = curr.filter((_, index) => index !== i);
      const result = isValid(candidate);
      if (result) {
        return prev + 1;
      }
    }

    return prev;
  }, 0);
};
