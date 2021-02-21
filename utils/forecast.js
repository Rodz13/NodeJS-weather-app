const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=4858d9e8fa503f88ad8b42e56b14dd99&query=${latitude},${longitude}&units=m`;
	
	request({ url, json: true }, (error, response) => {
		const data = response.body.current;
		const location = response.body.location;

		if (error) {
			callback('Unable to connect to weather service!', undefined);
		} else if (data.error) {
			callback('unable to find location.', undefined);
		} else {
			callback(undefined,
				`${data.weather_descriptions}. It is currently ${data.temperature} degrees out. It feels ${data.feelslike} degrees out in ${location.name}.`
			);
		}
	});
}

module.exports = forecast;
