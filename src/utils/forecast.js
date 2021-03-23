const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=705ba197f3f9bbaed5b169a268a0a811&query=' + lat + ',' + long + '&units=f'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + '. It is currently ' +  body.current.temperature + ' degrees out and feels like ' + body.current.feelslike + ' degrees out. The UV index is ' + body.current.uv_index
            )
        }
    })
}

module.exports = forecast