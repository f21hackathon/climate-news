import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const CountryStatsList = ({ countryData }) => {
	const [dense, setDense] = useState(false);
	const [secondary, setSecondary] = useState(false);

	return (
		<Box sx={{ flexGrow: 0, maxWidth: 752 }}>
			<Typography sx={{ mb: 2 }} variant="h6" component="div">
				<u>Country Environmental Stats</u>
			</Typography>
			<List dense={dense}>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<EmojiPeopleIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="Population"
						// secondary={ countryData.population }
					/>
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<PeopleOutlineIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="CO2 per Capita"
						// secondary={ countryData.co2PerCapita }
					/>
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<TrendingUpIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="Cumulative CO2"
						// secondary={ countryData.co2Cumulative }
					/>
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<PublicIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="Global Share of CO2"
						// secondary={ countryData.co2Global }
					/>
				</ListItem>
			</List>
		</Box>
	);
};

export default CountryStatsList;
