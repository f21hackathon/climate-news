import React, { useState, useEffect } from "react";
import axios from "axios";

import Articles from "./Components/Articles";
import Map from "./Components/Map";
import PrimarySearchAppBar from "./Components/AppBar";
import Loading from "./Components/Loading";
import LoadingCard from "./Components/LoadingCard";

import "./App.css";

const App = () => {
	const country = "Mexico";
	const [articles, setArticles] = useState([]);
	const [countryName, setCountryName] = useState("");

	console.log("ARTICLES: ", articles);

	const updateCountryName = (countryInput) => {
		console.log(countryInput);
		setCountryName(countryInput);
	};

	const ARTICLES_URI = "https://gcn-api-dev.herokuapp.com:443/articles";

	const getNewsData = async () => {
		const res = await axios.get(ARTICLES_URI);
		const data = res.data;
		const updatedArticles = [...articles, data];
		console.log("Updated Articles: ", updatedArticles);
		setArticles(data);
	};

	useEffect(() => {
		getNewsData();
	}, []);

	return (
		<div className="App">
			<PrimarySearchAppBar updateCountryName={updateCountryName} />

			<div className="app-container">
				<Map />

				<div className="news-container">
					{articles.length > 0 ? (
						<Articles articles={articles} />
					) : (
						<LoadingCard />
					)}
					{/* <Articles articles={articles} /> */}
				</div>
			</div>
		</div>
	);
};

export default App;
