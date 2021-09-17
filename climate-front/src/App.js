import React, { useState, useEffect } from "react";
import axios from "axios";
import Articles from "./Components/Articles";
import "./App.css";
import Map from "./Components/Map";
import PrimarySearchAppBar from "./Components/AppBar";

const App = () => {
	const country = "Mexico";
	const [articles, setArticles] = useState([]);

	const ARTICLES_URI = "https://gcn-api-dev.herokuapp.com:443/articles";

	const getNewsData = async () => {
		const res = await axios.get(ARTICLES_URI);
		const data = res.data;
		setArticles(data);
	};

	useEffect(() => {
		getNewsData();
	}, []);

	return (
		<div className="App">
			<PrimarySearchAppBar />

			<div className="app-container">
				<Map />
				<div className="news-container">
					<h1 className="news-title">Climate News</h1>
					<Articles articles={articles} />
				</div>
			</div>
		</div>
	);
};

export default App;
