const express = require("express");
const router = require("express").Router();

const { getProperties } = require("../models/climate-data");

// GET Route for retrieving climate stats for a given country
router.get("/:country", async (req, res, next) => {
	try {
		const properties = await getProperties(req.params.country);
		res.status(200).send(properties);
	} catch (err) {
		res.status(500).send(err);
	}
})

module.exports = router;
