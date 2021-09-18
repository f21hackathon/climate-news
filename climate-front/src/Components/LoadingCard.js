import React from "react";
import Card from "@mui/material/Card";

import Loading from "./Loading";

const LoadingCard = () => {
	return (
		<Card className="article" className="loading-card">
			<Loading />
		</Card>
	);
};

export default LoadingCard;
