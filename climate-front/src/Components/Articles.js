import React from "react";
import Article from "./Article";

import "./Articles.css";

const Articles = ({ articles }) => {
	const slicedArticles = articles.slice(0, 10);
	console.log(slicedArticles);
	return (
		<div className="articles-container">
			<h1 className="news-title">Climate News</h1>
			{slicedArticles.map((x, idx) => {
				return <Article article={x} />;
			})}
		</div>
	);
};




export default Articles;
