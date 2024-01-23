function findBiggestWord(input) {
  const regex = /^[^aeiou][aeiou]{1,2}?([^aeiou]{1,2}[aeiou]{1,2}){1,52}|^[aeiouw]{1,2}[^aeiou]{1,2}?([aeiou])|^[^aeiou][aeiouw][aeiouh]/;

  const list = getListWords(input)
    .filter((word) => word.length <= 46)
    .filter((word) => word.match(regex));

  const result = getWordsWithoutThreeOrMoreConsonants(list);
    
  return result[0];
}

function getListWords(input) {
  let words = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 2; j <= input.length; j++) {
      words.push(input.slice(i, j));
    }
  }

  const uniqueWords = [...new Set(words)];

  uniqueWords.sort((a, b) => b.length - a.length);

  return uniqueWords;
}

function getWordsWithoutThreeOrMoreConsonants(list) {
  const regex = /^(?:(?![b-df-hj-np-tv-z]{3}).)*$/;
  
  return list
    .filter(str => regex.test(str));
}

const input = "asdfzxascvdfnozebranetworkpoasoidfuizxdfzxascvdcvdcvdasdnznznzasdf";

console.log(findBiggestWord(input) === 'nozebranetwork');