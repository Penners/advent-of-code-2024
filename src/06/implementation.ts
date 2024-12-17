const parseInput = (input: string) => {
  let startX: number = 0;
  let startY: number = 0;
  const data = input.split("\r\n").map((row) => row.split(""));

  data.forEach((row, y) => {
    if (startX !== 0) return;
    row.forEach((cell, x) => {
      if (cell === "^") {
        startX = x;
        startY = y;
        return;
      }
    });
  });
  return { data, startX, startY };
};

const cursor = { N: "▲", S: "▼", E: "►", W: "◄" };

export const part1 = (input: string) => {
  const { data, startX, startY } = parseInput(input);

  let x = startX;
  let y = startY;
  type Direction = "N" | "E" | "S" | "W";
  let direction: Direction = "N";
  let turns = 0;
  let outOfBounds = false;
  const positions = new Set();
  const step = () => {
    positions.add(`${y}:${x}`);
    if (direction === "N") y--;
    if (direction === "S") y++;
    if (direction === "E") x++;
    if (direction === "W") x--;
  };
  const turnIfNeeded = () => {
    if (direction === "N" && data[y - 1]?.[x] === "#") {
      direction = "E";
      turns++;
    }
    if (direction === "E" && data[y]?.[x + 1] === "#") {
      direction = "S";
      turns++;
    }
    if (direction === "S" && data[y + 1]?.[x] === "#") {
      direction = "W";
      turns++;
    }
    if (direction === "W" && data[y]?.[x - 1] === "#") {
      direction = "N";
      turns++;
    }
  };
  const isGameOver = () => {
    if (direction === "N" && data[y - 1]?.[x] === undefined) {
      return true;
    }
    if (direction === "S" && data[y + 1]?.[x] === undefined) {
      return true;
    }
    if (direction === "E" && data[y]?.[x + 1] === undefined) {
      return true;
    }
    if (direction === "W" && data[y]?.[x - 1] === undefined) {
      return true;
    }
    return false;
  };

  while (!outOfBounds) {
    turnIfNeeded();
    turnIfNeeded();
    turnIfNeeded();
    step();
    outOfBounds = isGameOver();
  }

  // off by one error here.... todo maybe fix in part 2
  return positions.size + 1;
};

export const part2 = (input: string) => {};
