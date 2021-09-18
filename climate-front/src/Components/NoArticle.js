import React from "react";

import { FaSadCry } from "react-icons/fa";

const NoArticle = ({ country }) => {
	return (
		<div className="articles-container">
			<h1 className="news-title">Climate News</h1>
			<h3 style={{ color: "#c752ff" }}>
				No Articles found for {country.country}
			</h3>
			<FaSadCry size={100} color="#db8fff" />
		</div>
	);
};

export default NoArticle;
