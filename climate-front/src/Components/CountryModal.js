import React from "react";
import "./styles/CountryModal.css";
import CountryStatsList from "./CountryStatsList";

const CountryModal = ({ country, stats }) => {
	console.log("MODAL: ", country);

	return (
		<div className="country-modal-container">
			<div className="country-name-container">
				<img className="flag-img" src={country.image} alt={country.image} />
				<h3>{country.country}</h3>
			</div>

			<div className="country-stats">
				<CountryStatsList countryData={stats}/>
			</div>

		</div>
	);
};

export default CountryModal;
