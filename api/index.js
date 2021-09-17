const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use("/articles", require("./routes/articles.js"));

// Error middleware
app.use((err, req, res, next) => {
	console.log(
		`Unhandled error ${err}. URL = ${req.originalUrl}, method = ${req.method}`
	);
	res.status.send(`500 - Server Error`);
});

app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});
