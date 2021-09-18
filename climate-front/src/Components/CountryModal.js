import React from "react";
import { countryList } from "../countryList";
import "./styles/CountryModal.css";

const CountryModal = ({ country }) => {
	console.log("MODAL: ", country);

	return <div className="country-modal-container">{country.country}</div>;
};

export default CountryModal;
