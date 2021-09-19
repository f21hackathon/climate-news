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
	logoLg: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
			flexGrow: 1
		}
	},
	logoSm: {
		display: "block",
		[theme.breakpoints.up("xs")]: {
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
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						className={classes.logoLg}>
						Climate News
					</Typography>
					<Typography
						variant="h6"
						noWrap
						component="div"
						className={classes.logoSm}>
						CN	
						<img src={earth} alt="Logo" className="logo"/>
					</Typography>

					<FreeSoloCreateOption countries={countries} />

				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
