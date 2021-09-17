import React, { useState, useEffect } from "react";
import axios from "axios";
import Articles from "./Articles";
import "./App.css";
import Map from "./Map";
import PrimarySearchAppBar from "./Components/AppBar";

const API_KEY = "3a09f01bf6174499b438bfaa14eea1f5"; //News API Key
// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log("API KEY: ", API_KEY);

const App = () => {
	const country = "Mexico";
	const [articles, setArticles] = useState([]);

	const URL = `https://newsapi.org/v2/everything?q=climate OR energy OR environment OR global warming OR climate AND ${country} change&pageSize=100&from=2021&sortBy=relevancy&apiKey=${API_KEY}`;

	const getNewsData = async () => {
		const res = await axios.get(URL);
		const data = res.data;
		const newsArticles = data.articles;
		setArticles(newsArticles);
		console.log(newsArticles);
	};

	useEffect(() => {
		getNewsData();
	}, []);

	return (
		<div className="App">
			<div>
				<PrimarySearchAppBar />
			</div>

			<div>
				<Map />
			</div>
			
			<div className="app-container">
				<h1>Climate News</h1>
				<Articles articles={articles} />
			</div>
		</div>
	);
};

export default App;
