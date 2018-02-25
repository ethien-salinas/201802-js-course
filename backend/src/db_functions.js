let movies = require('../db/movies.json')

module.exports = {

  getAll: () => {
    return movies
  },

  getElementById: (id) => {
    return movies[id]
  },

  getSize: () => {
    return new Promise((resolve, reject) => {
      resolve(Object.keys(movies).length)
    })
  },

  getKeysFromTo: (start, end) => {
    return new Promise((resolve, reject) => {
      resolve(Object.keys(movies).slice(start, end))
    })
  },

  getValuesFromKeys: (...keys) => {
    return new Promise((resolve, reject) => {
      resolve(keys.map(key => movies[key]))
    })
  }

}
