const db_functions = require('../db_functions')

describe('get values suite', () => {
  it('should read an element', () => {
    const obj = {
      "title": "Argo",
      "imdbId": "tt1024648",
      "releaseDate": "2012-10-04T04:00:00.000Z",
      "releaseCountry": "USA",
      "releaseYear": 2012,
      "releaseMonth": 9,
      "releaseDay": 4
    }
    expect(db_functions.readAnElementById("2012")).toEqual(obj);
  })
})
