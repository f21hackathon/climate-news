const { url } = require("inspector");
const mongoose = require("mongoose");

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
	author: { type: String, required: true },
	content: { type: String, required: true },
	description: { type: String, required: true },
	publishedAt: { type: String, required: true },
	source: {
		id: { type: String, required: false },
		name: { type: String, required: true },
	},
	title: { type: String, required: true },
	url: { type: String, required: true },
	urlToImage: { type: String, required: true },
});

const Article = mongoose.model("Article", articleSchema);

const addArticle = async (articleObj) => {
	const article = new Article({
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

const findArticles = async () => {
	const query = Article.find();
	const result = await query.exec();
	return result;
};

module.exports = {
	Article,
	addArticle,
	findArticles,
};
