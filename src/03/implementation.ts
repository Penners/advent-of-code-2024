const innerRegex = /mul\((?<l>\d{1,3}),(?<r>\d{1,3})\)/g;
const outerRegex = /(?:do\(\)|^)(?<valid>.*?)(?:don't\(\)|$)/g;

export const part1 = (input: string) => {
  let m;
  let output = 0;
  while ((m = innerRegex.exec(input)) !== null) {
    if (m.index === innerRegex.lastIndex) {
      innerRegex.lastIndex++;
    }
    if (m.groups?.l && m.groups?.r) {
      output += parseInt(m.groups?.l) * parseInt(m.groups?.r);
    }
  }
  return output;
};

export const part2 = (input: string) => {
  let m;
  let output = 0;
  const joined = input.replace(/(\r\n?|\n|\t)/g, " ");

  while ((m = outerRegex.exec(joined)) !== null) {
    if (m.index === outerRegex.lastIndex) {
      outerRegex.lastIndex++;
    }

    if (m.groups?.valid) {
      let b;
      while ((b = innerRegex.exec(m.groups?.valid)) !== null) {
        if (b.index === innerRegex.lastIndex) {
          innerRegex.lastIndex++;
        }
        if (b.groups?.l && b.groups?.r) {
          const res = parseInt(b.groups?.l) * parseInt(b.groups?.r);
          output += res;
        }
      }
    }
  }
  return output;
};
