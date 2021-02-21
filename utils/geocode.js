const request = require('postman-request');

const geocode = (address, callback) => {
	const mapBoxKey = 'pk.eyJ1Ijoicm9kemlsbGExMzMiLCJhIjoiY2trY3V3MDl0MDNueTJwcXRkdXBlb2g5YiJ9.jbjnw8c2RgrFqPzln2OkeQ';
	const limit = '1';
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?types=address&access_token=${mapBoxKey}&limit=${limit}`;
	

	request({ url, json: true }, (error, response) => {
		const features = response.body.features;

		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (features.length === 0) {
			callback('Unable to find to location, please try again with a new search term', undefined);
		} else {
			callback(undefined, {
				latitude: features[0].center[1],
				longitude: features[0].center[0],
				location: features[0].place_name
			});
		}
	});
};

module.exports = geocode;
