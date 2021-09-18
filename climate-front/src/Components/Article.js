import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loading from "./Loading";

export default function ImgMediaCard({ article }) {
	return (
		<Card className="article">
			<a className="article-link" href={article.url} target="_blank">
				<CardMedia
					component="img"
					alt={article.urlToImage}
					height="140"
					image={article.urlToImage}
				/>

				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						className="article-title">
						{article.title} - {article.author}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{article.description}
					</Typography>
				</CardContent>
				{/* <CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions> */}
			</a>
		</Card>
	);
}
