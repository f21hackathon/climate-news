import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loading from "./Loading";
import LinkIcon from '@mui/icons-material/Link';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
			</a>

			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					className="article-title">
					<a className="article-link" href={article.url} target="_blank">
						{article.title} - {article.author}</a> 
							<CopyToClipboard text={article.url} onCopy={article.url}>
								<div class="tooltip"><LinkIcon sx={{ ':hover': {boxShadow: 6, color:'success.main'}}}></LinkIcon>
									<span class="tooltiptext">Copy link</span>
								</div>
							</CopyToClipboard>
				</Typography>
				
				<a className="article-link" href={article.url} target="_blank">
					<Typography variant="body2" color="text.secondary">
						{article.description}
					</Typography>
				</a>
			</CardContent>

				{/* <CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions> */}
			
		</Card>
	);
}
