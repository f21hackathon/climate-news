const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routes
app.use("/articles", require("./routes/articles.js"));
app.use("/climate-data", require("./routes/climate-data"));

// Error middleware
app.use((err, req, res, next) => {
	console.log(
		`Unhandled error ${err}. URL = ${req.originalUrl}, method = ${req.method}`
	);
	res.status.send(`500 - Server Error`);
});

// Default port on Heroku is port 443
app.listen(process.env.PORT || PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});

