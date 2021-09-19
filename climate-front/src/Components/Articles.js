import React from "react";
import Article from "./Article";

import "./styles/Articles.css";

const Articles = ({ articles , country }) => {
	const slicedArticles = articles.slice(0, 10);
	return (
		<div className="articles-container">
			<h1 id='NewsCardsHeader' className="news-title">{country.country} Climate News</h1>
			{slicedArticles.map((x, idx) => {
				return <Article article={x} key={idx} />;
			})}
		</div>
	);
};

export default Articles;
