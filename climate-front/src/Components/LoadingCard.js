import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Loading from "./Loading";

const LoadingCard = () => {
	return (
		<Card className="article" className="loading-card">
			<Loading />
		</Card>
	);
};

export default LoadingCard;
