let movies = require('../db/movies.json')

module.exports = {

  readAnElementById: (id) => {
    return movies[id]
  },

  getSize: ()=>{
    return new Promise((resolve, reject)=>{
      resolve(Object.keys(movies).length)
    })
  }

}
