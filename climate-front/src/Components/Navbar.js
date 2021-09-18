import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FreeSoloCreateOption from "./SearchBar";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "32ch",
			"&:focus": {
				width: "40ch",
			},
		},
	},
}));

const Navbar = ({ countries }) => {
	// Handles updating state when something is typed in the search bar
	const [country, setCountry] = useState("");

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
						<u>Climate News</u>
					</Typography>
					{/* <Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper> */}
						{/* <StyledInputBase
							placeholder="Search for a country"
							inputProps={{ "aria-label": "search" }}
							onChange={(e) => handleChange(e)}
							onSubmit={(e) => handleSubmit(e)}
						/> */}
						<FreeSoloCreateOption countries={countries} />
					{/* </Search> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
