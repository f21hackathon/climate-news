import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FreeSoloCreateOption from "./SearchBar";
import earth from "./styles/earth.png"

import "./styles/Navbar.css";

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

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" style={{ background: "#219fff" }}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						<img src={earth} alt="Logo" className="logo"/>
						<b>Climate News</b>
						
					</Typography>

					<FreeSoloCreateOption countries={countries} />

				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
