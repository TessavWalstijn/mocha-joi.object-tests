export function getPerson(name: string) {
  switch (name) {
    case 'James':
      return {
        name: 'James',
        age: 25,
        siblings: ['Johnathan'],
        metaData: {},
        active: true,
      }
    case 'Johnathan':
      return {
        name: 'Johnathan',
        age: 23,
        siblings: ['James'],
        active: true,
      }
  }
}
