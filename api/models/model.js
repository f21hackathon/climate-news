const { url } = require("inspector");
const mongoose = require("mongoose");
const axios = require("axios");

mongoose.connect(
	"mongodb+srv://admin:admin@cluster0.19vdk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
	}
);

const db = mongoose.connection;

db.once("open", () => {
	console.log("Successfully connected to MongoDB using Mongoose!");
});

// Define Schema
const articleSchema = mongoose.Schema({
	country: { type: String, required: true },
	author: { type: String, default: '' },
	content: { type: String, default: '' },
	description: { type: String, default: '' },
	publishedAt: { type: String, default: '' },
	source: {
		id: { type: String, default: '' },
		name: { type: String, default: '' },
	},
	title: { type: String, default: '' },
	url: { type: String, default: '' },
	urlToImage: { type: String, default: '' },
});

const Article = mongoose.model("Article", articleSchema);

const addArticle = async (country, articleObj) => {
	const article = new Article({
		country: country,
		author: articleObj.author,
		content: articleObj.content,
		description: articleObj.description,
		publishedAt: articleObj.publishedAt,
		source: {
			id: articleObj.source.id,
			name: articleObj.source.name,
		},
		title: articleObj.title,
		url: articleObj.url,
		urlToImage: articleObj.urlToImage,
	});
	return article.save();
};

const findArticles = async (country="USA") => {
	await insertNewsArticles(country);
	await sleep(2000);
	return await loadNewsArticles(country);
};

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function loadNewsArticles(country) {
	const query = Article.find({ "country": country });
	const result = await query.exec();
	return result;
}

async function insertNewsArticles(country) {
	getNewsArticles(country)
		.then(res => {
			for (var i=0; i < res.data.articles.length; i++)
			{
				addArticle(country, res.data.articles[i]);
			}
		})
		.catch(err => {
			console.log("Something went wrong...\n", err);
	});
}

async function getNewsArticles(country) {
	const NEWS_API_KEY = "3a09f01bf6174499b438bfaa14eea1f5";
	const URL = `https://newsapi.org/v2/everything?` +
		`q=+${country} energy environment "global warming"` +
		`change&pageSize=100&from=2021&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

	try {
		return await axios.get(URL);
	} catch (err) {
		console.log("Failed to retrieve news articles...\n");
	}
}

module.exports = {
	Article,
	addArticle,
	findArticles,
};
