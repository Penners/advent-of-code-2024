import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { part1, part2 } from "./implementation";

describe("day 1 part 1", () => {
  const input = fs
    .readFileSync(path.join(__dirname, "example.input.txt"))
    .toString();

  const realInput = fs
    .readFileSync(path.join(__dirname, "real.input.txt"))
    .toString();
  it("example works", () => {
    const result = part1(input);
    expect(result).toBe(11);
  });

  it("real implementation works", () => {
    const result = part1(realInput);
    expect(result).toBe(2344935);
  });
});

describe("day 1 part 2", () => {
  const input = fs
    .readFileSync(path.join(__dirname, "example.input.txt"))
    .toString();

  const realInput = fs
    .readFileSync(path.join(__dirname, "real.input.txt"))
    .toString();
  it("example works", () => {
    const result = part2(input);
    expect(result).toBe(31);
  });

  it("real implementation works", () => {
    const result = part2(realInput);
    expect(result).toBe(27647262);
  });
});
