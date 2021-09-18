import React from "react";

import LoadingCard from "./LoadingCard";
import "./styles/LoadingCards.css";

export default function LoadingCards({ article }) {
	return (
		<>
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
		</>
	);
}
