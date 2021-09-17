const express = require("express");
const router = require("express").Router();

const { Article, addArticle, findArticles } = require("../models/model.js");

// ---------------------------------- CRUD ROUTES ----------------------------------
// Create URL: http://localhost:5000/articles
router.post("/", async (req, res, next) => {
	try {
		const data = {
			author: req.body.author,
			content: req.body.author,
			description: req.body.description,
			publishedAt: req.body.publishedAt,
			source: {
				id: req.body.source.id,
				name: req.body.source.name,
			},
			title: req.body.title,
			url: req.body.url,
			urlToImage: req.body.urlToImage,
		};

		const newArticle = await addArticle(data);
		res.status(201).send(newArticle);
	} catch (err) {
		res.status(500).send(err);
	}
});

// Retrieve URL: http://localhost:3000/articles
router.get("/", async (req, res, next) => {
	try {
		const articles = await findArticles();
		res.status(200).send(articles);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
