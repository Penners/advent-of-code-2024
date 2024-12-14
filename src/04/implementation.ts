export const part1 = (input: string) => {
  const target = `XMAS`;
  const data: string[][] = input
    .split(`\n`)
    .map((row) => row.split("").filter((char) => char.trim() !== ""));

  const checkWord = (x: number, y: number) => {
    const cords: Record<
      | "north"
      | "north_east"
      | "east"
      | "south_east"
      | "south"
      | "south_west"
      | "west"
      | "north_west",
      {
        cords: number[][];
        string: string[];
      }
    > = {
      north: {
        cords: [],
        string: [],
      },
      north_east: {
        cords: [],
        string: [],
      },
      east: {
        cords: [],
        string: [],
      },
      south_east: {
        cords: [],
        string: [],
      },
      south: {
        cords: [],
        string: [],
      },
      south_west: {
        cords: [],
        string: [],
      },
      west: {
        cords: [],
        string: [],
      },
      north_west: {
        cords: [],
        string: [],
      },
    } as const;
    for (let i = 0; i < target.length; i++) {
      cords.north.cords.push([i, y - i]);
      cords.north.string.push(data?.[x]?.[y - i]);

      cords.north_east.cords.push([x + i, y - i]);
      cords.north_east.string.push(data?.[x + i]?.[y - i]);

      cords.east.cords.push([x + i, y]);
      cords.east.string.push(data?.[x + i]?.[y]);

      cords.south_east.cords.push([x + i, y + i]);
      cords.south_east.string.push(data?.[x + i]?.[y + i]);

      cords.south.cords.push([x, y + i]);
      cords.south.string.push(data?.[x]?.[y + i]);

      cords.south_west.cords.push([x - i, y + i]);
      cords.south_west.string.push(data?.[x - i]?.[y + i]);

      cords.west.cords.push([x - i, y]);
      cords.west.string.push(data?.[x - i]?.[y]);

      cords.north_west.cords.push([x - i, y - i]);
      cords.north_west.string.push(data?.[x - i]?.[y - i]);
    }

    return Object.values(cords).map((cord) => {
      const check = cord.string.join("");
      const valid = check.trim() === target;
      return {
        valid: valid,
        word: check,
      };
    });
  };

  let valid = 0;
  for (let y = 0; data.length > y; y++) {
    for (let x = 0; data[y].length > x; x++) {
      const results = checkWord(x, y);
      results.forEach((value) => {
        if (value.valid) {
          valid++;
        }
      });
    }
  }

  return valid;
};

export const part2 = (input: string) => {
  const target = `MAS`;
  const data: string[][] = input
    .split(`\n`)
    .map((row) => row.split("").filter((char) => char.trim() !== ""));

  const checkWord = (x: number, y: number) => {
    const cords: Record<
      "north_east" | "south_east" | "south_west" | "north_west",
      {
        cords: number[][];
        string: string[];
      }
    > = {
      north_east: {
        cords: [],
        string: [],
      },
      south_east: {
        cords: [],
        string: [],
      },
      south_west: {
        cords: [],
        string: [],
      },
      north_west: {
        cords: [],
        string: [],
      },
    } as const;
    for (let i = 0; i < target.length; i++) {
      cords.north_east.cords.push([x + i, y - i]);
      cords.north_east.string.push(data?.[x + i]?.[y - i]);

      cords.south_east.cords.push([x + i, y + i]);
      cords.south_east.string.push(data?.[x + i]?.[y + i]);

      cords.south_west.cords.push([x - i, y + i]);
      cords.south_west.string.push(data?.[x - i]?.[y + i]);

      cords.north_west.cords.push([x - i, y - i]);
      cords.north_west.string.push(data?.[x - i]?.[y - i]);
    }

    return Object.entries(cords).map(([key, cord]) => {
      const check = cord.string.join("");
      const valid = check.trim() === target;
      const cordLabel = cord.cords[1].join("-");
      return {
        key: key === "south_west" || key === "north_east" ? "l" : "r",
        middle: cordLabel,
        valid: valid,
        word: check,
      };
    });
  };

  let valid = 0;
  const l = new Set<string>();
  const r = new Set<string>();
  for (let y = 0; data.length > y; y++) {
    for (let x = 0; data[y].length > x; x++) {
      const results = checkWord(x, y);
      results.forEach((value) => {
        if (value.valid && value.key === "r") {
          r.add(value.middle);
        }
        if (value.valid && value.key === "l") {
          l.add(value.middle);
        }
      });
    }
  }

  let intersectionCount = 0;
  l.forEach((a) => {
    if (r.has(a)) {
      intersectionCount++;
    }
  });

  return intersectionCount;
};
