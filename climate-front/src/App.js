import React, { useState, useEffect } from "react";
import axios from "axios";

import Articles from "./Components/Articles";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import LoadingCards from "./Components/LoadingCards";

import { countryList } from "./countryList";

import "./App.css";

const App = () => {
	const country = "Mexico";
	const [articles, setArticles] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");

	const updateCountryName = (countryInput) => {
		setSelectedCountry(countryInput);
	};

	const ARTICLES_URI = "https://gcn-api-dev.herokuapp.com:443/articles";

	const getNewsData = async () => {
		const res = await axios.get(ARTICLES_URI);
		const data = res.data;
		const updatedArticles = [...articles, data];
		console.log("Updated Articles: ", updatedArticles);
		setArticles(data);
	};

	// Find country by clicking on map
	const clickCountry = (geo) => {
		const foundCountry = countryList.filter(
			(x) => x.ISO === geo.id.toString()
		)[0].country;
		setSelectedCountry(setSelectedCountry);
		console.log(foundCountry);
	};

	useEffect(() => {
		getNewsData();
	}, []);

	return (
		<div className="App">
			<Navbar countries={countryList} updateCountryName={updateCountryName} />

			<div className="app-container">
				<Map clickCountry={clickCountry} />

				<div className="news-container">
					{articles.length > 0 ? (
						<Articles articles={articles} />
					) : (
						<LoadingCards />
					)}
					{/* <Articles articles={articles} /> */}
				</div>
			</div>
		</div>
	);
};

export default App;
