import React from "react";
import "./styles/CountryModal.css";

const CountryModal = ({ country }) => {
	console.log("MODAL: ", country);

	return (
		<div className="country-modal-container">
			<div className="country-name-container">
				<img className="flag-img" src={country.image} alt={country.image} />
				<h3>{country.country}</h3>
			</div>
		</div>
	);
};

export default CountryModal;
