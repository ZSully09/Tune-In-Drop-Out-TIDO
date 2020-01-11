function pickOne(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

function makePartyName() {
  let wordLists = [
    'Awesome,Purple,Belated,Excited'.split(','),
    ['Green', 'Southern', 'Eager', 'Slender'],
    ['Velociraptor', 'Skyscraper', 'Chesterfield']
  ];

  let choiceWords = wordLists.map(list => pickOne(list));

  return choiceWords.join('-');
}

console.log(makePartyName());
