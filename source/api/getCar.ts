export function getCar(carBrand: string) {
  switch (carBrand) {
    case 'Mazda':
      return {
        brand: 'Mazda',
        type: 'MX5 NB 1.8',
        milage: 199999.99,
        extras: ['2001 Special Edition'],
      }
    case 'BMW':
      return {
        brand: 'BMW',
        type: '335',
        milage: '100000',
        extras: ['LCI', 'KW Coilovers'],
      }
    case 'RedBull':
      return {
        brand: 'RedBull',
        type: 'RB18',
        milage: 1966.018,
        extras: ['Won the Driver Standings of 2022F1'],
      }
    case 'Volkswagen':
      return {
        brand: 'Volkswagen',
        type: 'ID3',
        milage: 315,
        extras: 'Roof Racks'
      }
  }
}
