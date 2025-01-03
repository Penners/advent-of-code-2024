import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { part1, part2 } from "./implementation";

const example = fs.readFileSync(path.join(__dirname, "example.txt")).toString();
const example2 = fs
  .readFileSync(path.join(__dirname, "example.2.txt"))
  .toString();
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();

describe("day 4 part 1", () => {
  it("example works", () => {
    const result = part1(example);
    expect(result).toBe(18);
  });

  it("real implementation works", () => {
    const result = part1(input);
    expect(result).toBe(2551);
  });
});

describe("day 4 part 2", () => {
  it("example works", () => {
    const result = part2(example2);
    expect(result).toBe(9);
  });

  it("real implementation works", () => {
    const result = part2(input);
    expect(result).toBe(1985);
  });
});
