import React from "react";
import "./styles/CountryModal.css";
import CountryStatsList from "./CountryStatsList";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const CountryModal = (props) => {
	const useStyles = makeStyles((theme) => ({
		main: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			width: "100%"
		},
		countryModalContainerLg: {
			overflow: "hidden",
			overflowY: "scroll",
			display: "none",
			flexDirection: "column",
			alignItems: "center",
			zIndex: 3,
			backgroundColor: "rgb(253, 249, 249)",
			height: "100%",
			width: "80%",
			maxHeight: "85vh",
			borderRadius: "10px",
			margin: "1%",
			[theme.breakpoints.up("md")]: {
				display: "flex"
			}
		},
		countryModalContainerSm: {
			overflow: "hidden",
			overflowY: "scroll",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			zIndex: 3,
			backgroundColor: "rgb(253, 249, 249)",
			height: "100%",
			width: "100%",
			borderRadius: "10px",
			margin: "1%",
			[theme.breakpoints.up("md")]: {
				display: "none"
			}
		},
	}))

	const classes = useStyles();
	return (
		<div
			className={classes.main}
		>
		<Container
			className={classes.countryModalContainerLg}
			maxWidth="false"
		>
			<div className="country-name-container">
				<img className="flag-img" src={props.country.image} alt={props.country.image} />
				<h3>{props.country.country}</h3>
			</div>

			<div className="country-stats" style={{maxHeight: "100%"}}>
				<CountryStatsList countryData={props.stats}/>
			</div>

		</Container>
		<Container
			className={classes.countryModalContainerSm}
			maxWidth="false"
		>
			<div className="country-name-container">
				<img className="flag-img" src={props.country.image} alt={props.country.image} />
				<h3>{props.country.country}</h3>
			</div>

			<div className="country-stats" style={{maxHeight: "100%"}}>
				<CountryStatsList countryData={props.stats}/>
			</div>

		</Container>
		</div>
	);
};

export default CountryModal;
