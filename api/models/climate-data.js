const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "co2-data.json");

const getProperties = async (country) => {
	let rawdata = fs.readFileSync(jsonPath);
	let climate_data = JSON.parse(rawdata);
	return climate_data[country];
};

module.exports = {
	getProperties,
};
