function pickOne(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

export default function makePartyName() {
  let wordLists = [
    [
      'Awesome',
      'Shenanigans',
      'Belated',
      'Excited',
      'Tickles',
      'Pancake',
      'Stupendous',
      'Moist',
      'Ointment',
      'Curdle'
    ],
    [
      'Smear',
      'Yolk',
      'Fetus',
      'Smear',
      'Secrete',
      'Slurp',
      'Clogged',
      'Rural',
      'Discharge',
      'Sputum'
    ],
    [
      'Velociraptor',
      'Skyscraper',
      'Chesterfield',
      'Pterodactyl',
      'Oozing',
      'Pulp',
      'Orifice',
      'Pyramid',
      'Island',
      'Jubilant'
    ]
  ];

  let choiceWords = wordLists.map(list => pickOne(list));

  return choiceWords.join('-');
}

console.log(makePartyName());
