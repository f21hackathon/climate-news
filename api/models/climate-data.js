const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "data/co2-data.json");

// Returns climate data for given country
const getProperties = async (country) => {
	let rawdata = fs.readFileSync(jsonPath);
	let climate_data = JSON.parse(rawdata);
	return climate_data[country];
};

module.exports = {
	getProperties,
};
