import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const CountryStatsList = ({ countryData }) => {
    // Data is not immediately available. Set to null until it later becomes available.
    const data = countryData ? countryData.data : null;
    const len = data ? data.length : null;
    const population = data ? data[len-1]["population"] : null;
    const co2PerCapita = data ? data[len-1]["co2_per_capita"] : null;
    const cumCo2 = data ? data[len-1]["cumulative_co2"] : null;
    const globalCo2Share = data ? data[len-1]["share_global_co2"] : null;

    return (
        <Box sx={{ flexGrow: 0, maxWidth: 752 }}>
            <Typography sx={{ mb: 2 }} variant="h6" component="div">
                <b>Country Environmental Stats</b>
            </Typography>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmojiPeopleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Population"
                        secondary={population}
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
                        secondary={co2PerCapita}
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
                        secondary={cumCo2}
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
                        secondary={globalCo2Share}
                    />
                </ListItem>
            </List>
        </Box>
    );
}

export default CountryStatsList;
