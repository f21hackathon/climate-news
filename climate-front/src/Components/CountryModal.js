import React from "react";
import "./styles/CountryModal.css";
import CountryStatsList from "./CountryStatsList";

const CountryModal = (props) => {
	return (
		<div className="country-modal-container" style={{overflow: "hidden", overflowY: "scroll"}}>
			<div className="country-name-container">
				<img className="flag-img" src={props.country.image} alt={props.country.image} />
				<h3>{props.country.country}</h3>
			</div>

			<div className="country-stats" style={{maxHeight: "100%"}}>
				<CountryStatsList countryData={props.stats}/>
			</div>

		</div>
	);
};

export default CountryModal;
