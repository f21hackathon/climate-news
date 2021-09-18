import React from "react";
import "./styles/CountryModal.css";
import CountryStatsList from "./CountryStatsList";

const CountryModal = (props) => {
	console.log("STATS: ", props.stats);
	return (
		<div className="country-modal-container">
			<div className="country-name-container">
				<img className="flag-img" src={props.country.image} alt={props.country.image} />
				<h3>{props.country.country}</h3>
			</div>

			<div className="country-stats">
				<CountryStatsList countryData={props.stats}/>
			</div>

		</div>
	);
};

export default CountryModal;
