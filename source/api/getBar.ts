export function getBar(barName: string) {
  switch (barName) {
    case 'Jimmys drinks':
      return {
        name: 'Jimmys drinks',
        address: 'Somewhere over the rainbow',
        drinks: {
          beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
        },
      }
    case 'Sjonnies':
      return {
        name: 'Sjonnies',
        address: 'Centrum 001',
        drinks: ['Heineken Pilsener'],
      }
    case 'Ollies coffee and more':
      return {
        name: 'Ollies coffee and more',
        address: 'Close to the unicorn pasture',
        drinks: {
          beer: ['Apostel Bräu', 'Pilsener Darguner Braurei', 'Hansa Pils'],
        },
      }
    case 'Koekenbier':
      return {
        name: 'Koekenbier',
        address: 'Pitlane 33',
        beer: [
          'Troll-Brew German IPA',
          'Lagerbier Hell Duff',
          'Bear Beer Premium Lager',
        ],
      }
  }
}
