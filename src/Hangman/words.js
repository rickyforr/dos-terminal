import words from "an-array-of-english-words";
import _ from "lodash";

export const generateAlphabet = () => {
  const alpha = Array.from(Array(26)).map((_, i) => i + 65);
  return alpha.map((x) => String.fromCharCode(x));
};

export const getRandomWord = (min, max) => {
  const filtered = words.filter(
    (word) => word.length >= min && word.length <= max
  );
  const random = _.sample(filtered);
  return Array.from(random.toUpperCase());
};
