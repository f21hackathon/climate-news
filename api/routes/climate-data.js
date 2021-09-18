const express = require("express");
const router = require("express").Router();

const { getProperties } = require("../models/climate-data");

router.get("/:country", async (req, res, next) => {
	try {
		const properties = await getProperties(req.params.country);
		res.status(200).send(properties);
	} catch (err) {
		res.status(500).send(err);
	}
})

module.exports = router;
