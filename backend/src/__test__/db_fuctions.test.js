import db_functions  from '../db_functions'

const obj2012 = {
  "title": "Argo",
  "imdbId": "tt1024648",
  "releaseDate": "2012-10-04T04:00:00.000Z",
  "releaseCountry": "USA",
  "releaseYear": 2012,
  "releaseMonth": 9,
  "releaseDay": 4
}

describe('get values suite', () => {
  // get element by it
  it('should read an element', () => {
    expect(db_functions.readAnElementById("2012")).toEqual(obj2012);
  })

  // count elements
  it('should count nodes in movies.json', ()=>{
    expect(db_functions.getSize()).toBe(85)
  })
})

