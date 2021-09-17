const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

var funcs = require("./models/model.js");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/articles", require("./routes/articles.js"));

// Error middleware
app.use((err, req, res, next) => {
	console.log(
		`Unhandled error ${err}. URL = ${req.originalUrl}, method = ${req.method}`
	);
	res.status.send(`500 - Server Error`);
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});

const country = "Mexico";

async function getNewsArticles(country) {
	const NEWS_API_KEY = "3a09f01bf6174499b438bfaa14eea1f5";
	const URL = `https://newsapi.org/v2/everything?q=climate ` +
		`OR energy OR environment OR global warming OR climate AND ${country} ` + 
		`change&pageSize=100&from=2021&sortBy=relevancy&apiKey=${NEWS_API_KEY}`;

	try {
		return await axios.get(URL);
	} catch (err) {
		process.stdout.write("Failed to retrieve news articles...\n");
	}
}

getNewsArticles(country)
	.then(res => {
		for (var i=0; i < res.data.articles.length; i++)
		{
			funcs.addArticle(country, res.data.articles[i]);
		}
	})
	.catch(err => {
		console.log("Something went wrong...\n", err);
	});
