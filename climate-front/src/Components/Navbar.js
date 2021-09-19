import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FreeSoloCreateOption from "./SearchBar";
import earth from "./styles/earth.png"

import "./styles/Navbar.css";

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	logoLg: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "block",
			flexGrow: 1
		}
	},
	logoSm: {
		display: "block",
		[theme.breakpoints.up("md")]: {
			display: "none",
			flexGrow: 1
		}
	}
}))

const Navbar = ({ countries }) => {
	// Handles updating state when something is typed in the search bar

	// // Handles on enter
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("COUNRY: ", country);
	// };

	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	setCountry(e.target.value);
	// };

	const classes = useStyles();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" style={{ background: "#219fff" }}>
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="h6"
						noWrap
						component="div"
						className={classes.logoLg}>
						<img src={earth} alt="Logo" className="logo"/>
						Climate News <em id='tagline'>- Click or search for a country to view climate news and statistics.</em>
					</Typography>
					<Typography
						variant="h6"
						noWrap
						component="div"
						className={classes.logoSm}>
						<img src={earth} alt="Logo" className="logo"/>
					</Typography>
					<FreeSoloCreateOption countries={countries} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
