const anagramChecker = input => {
  const splitInput = input.split('"');
  const cleaner = chunk => chunk.replace(/\s+|'/g, '').toLowerCase();
  
  const left = Array.from(cleaner(splitInput[1]));
  let right = cleaner(splitInput[3]);

  const leftLength = left.length;
  
  left.forEach((letter, index) => {
    right = right.replace(letter, '');
    if (index + 1 < leftLength && right.length === 0) {
      right += '+';
    }
  });
  
  return input.replace(' ? ', (!right.length) ? ' is an anagram of ' : ' is NOT an anagram of ');
};

module.exports = {anagramChecker};
