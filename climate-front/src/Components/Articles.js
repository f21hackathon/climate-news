import React, { Component } from "react";
import "./Articles.css";

const Articles = ({ articles }) => {
	return (
		<div className="articles-container">
			{articles.map((x, idx) => {
				return (
					<div key={idx} className="article">
						<h4>
							{x.title} - {x.author}
						</h4>
						<hr />
							<img className="image" src={x.urlToImage} alt={x.urlToImage}></img>
						<p>Link: <a href={x.url} target="_blank">{x.url}</a></p>
						<p>{x.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Articles;
