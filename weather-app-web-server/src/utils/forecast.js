const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e9c9e046cd082cf223208f47bd04344a/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location') 
        } else {
            const {temperature, precipProbability} = body.currently
            const summary = body.daily.data[0].summary
            callback(undefined, 
                summary + 'It is currently ' + temperature + ' degrees out. There is ' + precipProbability + '% chance of rain')
        }
    })
}

module.exports = {
    forecast
}