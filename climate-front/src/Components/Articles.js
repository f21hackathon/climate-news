import React from "react";
import Article from "./Article";

import "./styles/Articles.css";

const Articles = ({ articles }) => {
	const slicedArticles = articles.slice(0, 10);
	return (
		<div className="articles-container">
			<h1 className="news-title">Climate News</h1>
			{slicedArticles.map((x, idx) => {
				return <Article article={x} key={idx} />;
			})}
		</div>
	);
};

export default Articles;
