import db_functions from '../db_functions'

const obj2012 = {
  "title": "Argo",
  "imdbId": "tt1024648",
  "releaseDate": "2012-10-04T04:00:00.000Z",
  "releaseCountry": "USA",
  "releaseYear": 2012,
  "releaseMonth": 9,
  "releaseDay": 4
}

const valuesFrom1933to1935 = [
  {
    "title": "Cavalcade",
    "imdbId": "tt0023876",
    "releaseDate": "1933-01-05T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 1933,
    "releaseMonth": 0,
    "releaseDay": 5
  },
  {
    "title": "It Happened One Night",
    "imdbId": "tt0025316",
    "releaseDate": "1934-02-22T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 1934,
    "releaseMonth": 1,
    "releaseDay": 22
  },
  {
    "title": "Mutiny on the Bounty",
    "imdbId": "tt0026752",
    "releaseDate": "1935-11-08T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 1935,
    "releaseMonth": 10,
    "releaseDay": 8
  }
]

describe('get values suite', () => {

  // get element by id
  it('should read an element', () => {
    expect(db_functions.getElementById("2012")).toEqual(obj2012);
  })

  // count elements
  it('should count nodes in movies.json', () => {
    return db_functions.getSize()
      .then(result => {
        expect(result).toBe(85)
      })
  })

  // range from ... to ...
  it('should get 5 elements (length)', () => {
    return db_functions.getKeysFromTo(5, 10)
      .then(result => {
        expect(result.length).toBe(5)
      })
  })

  it('should get 5 elements (keys)', () => {
    const arrFrom1927To1932 = ['1927', '1929', '1930', '1931', '1932']
    return db_functions.getKeysFromTo(0, 5)
      .then(result => {
        expect(result).toEqual(arrFrom1927To1932)
      }

      )
  })

  it('should get 3 elements (values) from their keys', () => {
    return db_functions.getValuesFromKeys('1933', '1934', '1935')
      .then(result => {
        expect(result).toEqual(valuesFrom1933to1935)
      })
  })

  it('should get 3 elements (values) from their index', () => {
    return db_functions.getElementsFromTo(5, 8)
      .then(result => {
        expect(result).toEqual(valuesFrom1933to1935)
      })
  })

})
