import React from "react";
import "./styles/CountryModal.css";

const CountryHover = ({ hover }) => {
	return (
		<div className="hoverModal">
			<h1>Country Hover Modal</h1>
			<h1>{hover}</h1>
		</div>
	);
};

export default CountryHover;
