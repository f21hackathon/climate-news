const url = require("inspector");
const mongoose = require("mongoose");
const axios = require("axios");

// MongoDB Atlas Connection
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
	author: { type: String, default: "" },
	content: { type: String, default: "" },
	description: { type: String, default: "" },
	publishedAt: { type: String, default: "" },
	source: {
		id: { type: String, default: "" },
		name: { type: String, default: "" },
	},
	title: { type: String, default: "" },
	url: { type: String, default: "" },
	urlToImage: { type: String, default: "" },
});

const Article = mongoose.model("Article", articleSchema);

/********************* DB methods *********************/

// Adds a single news article to DB
const addArticle = async (country, articleObj) => {
	// Only add article if an article with same title does not exist
	Article.findOne({title: articleObj.title}, function(err, result) {
		if (err) {
			return;
		}
		if (result) {
			return;
		} else {
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
		}
	});
};

// Return most recent news articles for given country
const findArticles = async (country) => {
	// Only query API if no articles exist for country, or if last published article
	// is over one week old (queries return limited news articles so a lot of them are
	// a few days old).
	await Article.find({country: country})
		.sort("publishedAt")
		.exec(async function(err, result) {
			if (err) {
			} else {
				if (!result.length) {
					await insertNewsArticles(country);
				} else {
					var yesterday = new Date();
					yesterday.setDate(yesterday.getDate() - 7);
					var mostRecentDate = new Date(result[0].publishedAt);
					if (mostRecentDate < yesterday) {
						await insertNewsArticles(country);
					}
				}
			}
		})
	await sleep(2000);
	return await loadNewsArticles(country);
};

// Populates DB with news articles for given country from NewsAPI
async function insertNewsArticles(country) {
	getNewsArticles(country)
		.then((res) => {
			for (var i = 0; i < res.data.articles.length; i++) {
				addArticle(country, res.data.articles[i]);
			}
		})
		.catch((err) => {
			console.log("Failed to insert article into DB...\n", err);
		});
}

// Loads most recent articles for given country from DB
async function loadNewsArticles(country) {
	const query = Article.find({ country: country }).limit(20);
	const result = await query.exec();
	return result;
}

/********************* API methods *********************/

const NEWS_API_KEY = "14ec7673538348e9a11dbcafc7770f83";

// Queries NewsAPI for articles for given country
async function getNewsArticles(country) {
	const URL =
		`https://newsapi.org/v2/everything?` +
		`q=+${country} energy environment "global warming"` +
		`change&pageSize=5&from=2021&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

	try {
		return await axios.get(URL);
	} catch (err) {
		console.log("Failed to retrieve news articles...\n");
	}
}

/********************* Helper methods *********************/

// Sleep function to wait for async queries to sync
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
	Article,
	addArticle,
	findArticles,
};
