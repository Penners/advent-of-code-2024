import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { part1, part2 } from "./implementation";

const example = fs.readFileSync(path.join(__dirname, "example.txt")).toString();
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();

describe("day 6 part 1", () => {
  it("example works", () => {
    const result = part1(example);
    expect(result).toBe(41);
  });

  it("real implementation works", () => {
    const result = part1(input);
    expect(result).toBe(5242);
  });
});

// describe("day 6 part 2", () => {
//   it("example works", () => {
//     const result = part2(example);
//     expect(result).toBe(123);
//   });

//   it("real implementation works", () => {
//     const result = part2(input);
//     expect(result).toBe(5564);
//   });
// });
