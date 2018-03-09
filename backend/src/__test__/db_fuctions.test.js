import dbFunctions from '../db_functions'
import movies from '../../db/movies.json'

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
    expect(dbFunctions.getElementById("2012")).toEqual(obj2012);
  })

  // count elements
  it('should count nodes in movies.json', () => {
    return dbFunctions.getSize()
      .then(result => {
        expect(result).toBe(85)
      })
  })

  // range from ... to ...
  it('should get 5 elements (length)', () => {
    return dbFunctions.getKeysFromTo(5, 10)
      .then(result => {
        expect(result.length).toBe(5)
      })
  })

  it('should get 5 elements (keys)', () => {
    const arrFrom1927To1932 = ['1927', '1929', '1930', '1931', '1932']
    return dbFunctions.getKeysFromTo(0, 5)
      .then(result => {
        expect(result).toEqual(arrFrom1927To1932)
      }

      )
  })

  it('should get 3 elements (values) from their keys', () => {
    return dbFunctions.getValuesFromKeys('1933', '1934', '1935')
      .then(result => {
        expect(result).toEqual(valuesFrom1933to1935)
      })
  })

  it('should get 3 elements (values) from their index', () => {
    return dbFunctions.getElementsFromTo(5, 8)
      .then(result => {
        expect(result).toEqual(valuesFrom1933to1935)
      })
  })

})

describe('pagination suite', () => {

  const OFFSET = 0;
  const LIMIT = 10;

  it('should get first 10 elements', () => {
    return dbFunctions.getElementsFromTo(OFFSET, LIMIT)
      .then(result => {
        expect(result).toEqual(
          expect.arrayContaining([
            '1927', '1929', '1930', '1931', '1932',
            '1933', '1934', '1935', '1936', '1937'
          ].map(key => movies[key]))
        )
      })
  })

  it('should get next 10 elements', () => {
    return dbFunctions.getElementsFromTo(OFFSET + LIMIT, LIMIT + LIMIT)
      .then(result => {
        expect(result).toEqual(
          expect.arrayContaining([
            '1938', '1939', '1940', '1941', '1942',
            '1943', '1944', '1945', '1946', '1947'
          ].map(key => movies[key]))
        )
      })
  })

  it('should get prev 10 elements', () => {
    return dbFunctions.getElementsFromTo(OFFSET - LIMIT, LIMIT - LIMIT)
      .then(result => {
        expect(result).toEqual(
          // this should be an empty array
          expect.arrayContaining([].map(key => movies[key]))
        )
      })
  })

  it('should get last 10 elements', async () => {
    const LAST_OFFSET = Math.floor(await dbFunctions.getSize() / LIMIT) * LIMIT
    const LAST_LIMIT = LAST_OFFSET + LIMIT
    const result = await dbFunctions.getElementsFromTo(LAST_OFFSET, LAST_LIMIT)
    expect(result).toEqual(
      expect.arrayContaining([
        '2008', '2009', '2010', '2011', '2012'
      ].map(key => movies[key]))
    )
  })

})
