let movies = require('../db/movies.json')

module.exports = {

  readAnElementById: (id) => {
    return movies[id]
  }

}