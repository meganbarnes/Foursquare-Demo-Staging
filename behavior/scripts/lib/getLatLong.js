'use strict'

const request = require('request')

module.exports = function getLatLong(query, next) {
  const key = `Ar8_lxvb7vC3wD8KmSuFLQyR7QwhDWTCInXrvCNjFQZz4o2wdG1Y60uWNT-zxHYn`

  const requestUrl = `http://dev.virtualearth.net/REST/v1/Locations?query=${query}&key=${key}`

  console.log('Making HTTP GET request to:', requestUrl)

  request(requestUrl, (err, res, body) => {
    if (err) {
      throw new Error(err)
    }

    if (body) {
      const parsedResult = JSON.parse(body)
      next(parsedResult)
    } else {
      next()
    }
  })
}

