import React, { useState } from "react";
import axios from "axios";
import Articles from "./Components/Articles";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import LoadingCards from "./Components/LoadingCards";
import NoArticle from "./Components/NoArticle";
import CountryModal from "./Components/CountryModal";

import { countryList } from "./countryList";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const App = () => {
	const [articles, setArticles] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState({
		ISOcode: "",
		country: "",
		image: "",
		three_digit_ISO_country_code: "",
	});
	const [statusCode, setStatusCode] = useState("");
	const [countryStats, setCountryStats] = useState([]);
	const [hover, setHover] = useState("");

	// Same as clickCountry but for searching instead of clicking map
	const searchCountry = (countryInput) => {
		console.log("SELECTED COUNTRY: ", countryInput);
		getNewsData(countryInput);
		getCountryStats(countryInput);
	};

	// constants added for clipboard copy function
	const [isCopied, setIsCopied] = useState(false);
	const onCopyText = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	const updateCountryName = (countryInput) => {
		setSelectedCountry("SELECTED: ", countryInput);
	};

	// Get climate stats for given country
	const getCountryStats = async (country) => {
		const STATS_URI = `https://gcn-api-dev.herokuapp.com:443/climate-data/${country}`;
		const res = await axios.get(STATS_URI);
		const data = res.data;
		setCountryStats(data);
	};

	// Get news articles for given country
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
	const clickCountry = (geo, e) => {
		const foundCountry = countryList.filter(
			(x) => x.three_digit_ISO_country_code === geo.id.toString()
		)[0];
		console.log("selectedCountry: ", foundCountry);
		setSelectedCountry(foundCountry);
		getNewsData(foundCountry.country);
		getCountryStats(foundCountry.country);
	};

	const useStyles = makeStyles((theme) => ({
		app: {
			top: 0,
			left: 0,
			position: "absolute",
			width: "100vw",
			maxHeight: "none",
			[theme.breakpoints.up("md")]: {
				maxHeight: "100vh",
			},
		},
		appContainerLg: {
			display: "none",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			height: "93vh",
			[theme.breakpoints.up("md")]: {
				display: "flex",
			},
		},
		appContainerSm: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			alignItems: "center",
			height: "auto",
			width: "100%",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
		newsContainerLg: {
			display: "none",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%",
			marginRight: "2%",
			maxHeight: "85vh",
			overflow: "scroll",
			borderRadius: "10px",
			backgroundColor: "rgb(253, 249, 249)",
			[theme.breakpoints.up("md")]: {
				display: "block",
			},
		},
		newsContainerSm: {
			display: "block",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "auto",
			marginRight: "2%",
			overflow: "scroll",
			borderRadius: "10px",
			backgroundColor: "rgb(253, 249, 249)",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
	}));

	const classes = useStyles();

	return (
		<div className={classes.app}>
			<Navbar
				countries={countryList}
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
				searchCountry={searchCountry}
			/>
			<Container className={classes.appContainerLg} maxWidth="false">
				{selectedCountry.country ? (
					<CountryModal country={selectedCountry} stats={countryStats} />
				) : null}
				<Map
					clickCountry={clickCountry}
					selectedCountry={selectedCountry}
				/>
				{selectedCountry.country ? (
					<div className={classes.newsContainerLg}>
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
			</Container>
			<Container className={classes.appContainerSm} maxWidth="false">
				{selectedCountry.country ? (
					<CountryModal country={selectedCountry} stats={countryStats} />
				) : null}
				<Map
					clickCountry={clickCountry}
					selectedCountry={selectedCountry}
				/>
				{selectedCountry.country ? (
					<div className={classes.newsContainerSm}>
						{statusCode === "200" ? (
							articles.length > 0 ? (
								<Articles articles={articles} country={selectedCountry} />
							) : (
								<NoArticle country={selectedCountry} />
							)
						) : (
							<LoadingCards />
						)}
					</div>
				) : null}
			</Container>
		</div>
	);
};

export default App;
