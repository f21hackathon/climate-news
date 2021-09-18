import React, { useState, useEffect } from "react";
import axios from "axios";

import Articles from "./Components/Articles";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import LoadingCards from "./Components/LoadingCards";

import { countryList } from "./countryList";

import "./App.css";
import CountryModal from "./Components/CountryModal";

const App = () => {
	const country = "Mexico";
	const [articles, setArticles] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");

	const updateCountryName = (countryInput) => {
		setSelectedCountry("SELECTED: ", countryInput);
	};

	const getNewsData = async (country) => {
		const ARTICLES_URI = `https://gcn-api-dev.herokuapp.com:443/articles`;
		const res = await axios.get(ARTICLES_URI);
		const data = res.data;
		setArticles(data);

		// console.log("ARTICLES: ", data);
	};

	// Find country by clicking on map
	const clickCountry = (geo) => {
		const foundCountry = countryList.filter(
			(x) => x.three_digit_ISO_country_code === geo.id.toString()
		)[0];
		setSelectedCountry(foundCountry);
		// console.log("FOUND COUNTRY: ", foundCountry);

		// get news for a country after clicking on it
		// GET /:country is working properly in backend yet
		getNewsData();
	};

	useEffect(() => {
		getNewsData();
	}, []);

	return (
		<div className="App">
			<Navbar countries={countryList} updateCountryName={updateCountryName} />

			<div className="app-container">

				{selectedCountry ? <CountryModal country={selectedCountry} /> : null}

				<Map clickCountry={clickCountry} />
				{selectedCountry ? (
					<div className="news-container">
						{articles.length > 0 ? (
							<Articles articles={articles} />
						) : (
							<LoadingCards />
						)}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default App;
