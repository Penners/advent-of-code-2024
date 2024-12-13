import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { part1, part2 } from "./implementation";

const example = fs.readFileSync(path.join(__dirname, "example.txt")).toString();
const example2 = fs
  .readFileSync(path.join(__dirname, "example.2.txt"))
  .toString();
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();

describe("day 3 part 1", () => {
  it("example works", () => {
    const result = part1(example);
    expect(result).toBe(161);
  });

  it("real implementation works", () => {
    const result = part1(input);
    expect(result).toBe(159833790);
  });
});

describe("day 3 part 2", () => {
  it("example works", () => {
    const result = part2(example2);
    expect(result).toBe(48);
  });

  it("real implementation works", () => {
    const result = part2(input);
    expect(result).toBe(89349241);
  });
});
