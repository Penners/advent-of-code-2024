export const part1 = (input: string) => {
  const regex = /mul\((?<l>[0-9]+),(?<r>[0-9]+)\)/g;
  let m;
  let output = 0;
  while ((m = regex.exec(input)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    if (m.groups?.l && m.groups?.r) {
      output += parseInt(m.groups?.l) * parseInt(m.groups?.r);
    }
  }
  return output;
};
