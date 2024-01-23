function findBiggestWord(input) {
  let words = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 2; j <= input.length; j++) {
      words.push(input.slice(i, j))
    }
  }

  words = [...new Set(words)];

  words.sort((a, b) => b.length - a.length);

  let regex1 = /^[^aeiou][aeiou]{1,2}?([^aeiou]{1,2}[aeiou]{1,2}){1,52}|^[aeiouw]{1,2}[^aeiou]{1,2}?([aeiou])|^[^aeiou][aeiouw][aeiouh]/;

  let list1 = words
    .filter((word) => word.length <= 46)
    .filter((word) => word.match(regex1));

  const regex2 = /^(?:(?![b-df-hj-np-tv-z]{3}).)*$/;
  
  const result = list1
    .filter(str => regex2.test(str));
    
  return result[0];
}

const input = "asdfzxascvdfnozebranetworkpoasoidfuizxdfzxascvdcvdcvdasdnznznzasdf";

console.log(findBiggestWord(input) === 'nozebranetwork');