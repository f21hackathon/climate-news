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
						<a href={x.url}><img className="image" src={x.urlToImage} alt={x.urlToImage}></img></a>
						<p><a class="linkable" href={x.url}>{x.description}</a></p>
					</div>
				);
			})}
		</div>
	);
};




export default Articles;
