import React, { useState, useEffect } from "react";
import axios from "axios";

import Articles from "./Components/Articles";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import LoadingCards from "./Components/LoadingCards";
import NoArticle from "./Components/NoArticle";
import { countryList } from "./countryList";

import "./App.css";
import CountryModal from "./Components/CountryModal";

const App = () => {
	const [articles, setArticles] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [statusCode, setStatusCode] = useState("");

	console.log("STATUS CODE: ", statusCode);

	const updateCountryName = (countryInput) => {
		setSelectedCountry("SELECTED: ", countryInput);
	};

	const getNewsData = async (country) => {
		setArticles([]);
		setStatusCode("");
		const ARTICLES_URI = `https://gcn-api-dev.herokuapp.com:443/articles/${country}`;
		const res = await axios.get(ARTICLES_URI);
		if (res.status === 200) setStatusCode("200");
		const data = res.data;
		setArticles(data);
	};

	// Find country by clicking on map
	const clickCountry = (geo) => {
		const foundCountry = countryList.filter(
			(x) => x.three_digit_ISO_country_code === geo.id.toString()
		)[0];
		setSelectedCountry(foundCountry);
		getNewsData(foundCountry.country);
	};

	return (
		<div className="App">
			<Navbar countries={countryList} updateCountryName={updateCountryName} />

			<div className="app-container">
				{selectedCountry ? <CountryModal country={selectedCountry} /> : null}

				<Map clickCountry={clickCountry} selectedCountry={selectedCountry} />
				{selectedCountry ? (
					<div className="news-container">
						{statusCode === "200" ? (
							articles.length > 0 ? (
								<Articles articles={articles} />
							) : (
								<NoArticle country={selectedCountry} />
							)
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
