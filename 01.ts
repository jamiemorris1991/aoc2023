import { getLines, spelledDigits } from "./utils";

const part1 = () => {
  const getFirstAndLast = (str: string) => {
    const digitsRegex = /\d+/g;

    const match = str.match(digitsRegex)?.join("");

    return match ? Number(match?.[0] + match?.[match?.length - 1]) : 0;
  };
  const lines = getLines("01");

  return lines.reduce((acc, next) => {
    return acc + getFirstAndLast(next);
  }, 0);
};

const part2 = () => {
  const getFirstAndLast = (str: string) => {
    const matches: string[] = [];

    for (let i = 0; i < str.length; i++) {
      if (!isNaN(+str.charAt(i))) matches.push(str.charAt(i));
      for (const digit of spelledDigits) {
        if (str.startsWith(digit, i)) {
          matches.push(digit);
          i += digit.length - 2; // Move the index to the end of the matched digit
          break;
        }
      }
    }

    const matchAsDigits =
      matches
        ?.map((str) =>
          (str || "").length > 1 ? `${spelledDigits.indexOf(str)}` : str
        )
        .join("") || "";

    return Number(matchAsDigits[0] + matchAsDigits[matchAsDigits.length - 1]);
  };

  const lines = getLines("01");
  return lines.reduce((acc, next) => acc + getFirstAndLast(next), 0);
};

console.log({ part1: part1(), part2: part2() });
