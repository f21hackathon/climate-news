import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InfoIcon from '@mui/icons-material/Info';
import PieChartIcon from "@mui/icons-material/PieChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const CountryStatsList = ({ countryData }) => {
    // Data is not immediately available. Set to null until it later becomes available.
    const data = countryData ? countryData.data : null;
    const len = data ? data.length : null;

    // ISO 3166-1 alpha-3 - three-letter country codes
    const isoCode = countryData ? countryData.iso_code : null; 

    // Population by country
    const population = data ? data[len-1]["population"] : null;

    // Annual production-based emissions of carbon dioxide (CO2), measured in tonnes per person.
    const co2PerCapita = data ? `${data[len-1]["co2_per_capita"]} tonnes per person` : null;

    // Annual production-based emissions of carbon dioxide (CO2), measured as a percentage of global
    // production-based emissions of CO2 in the same year.
    const globalCo2Share = data ? `${data[len-1]["share_global_co2"]} %` : null;

    // Annual percentage growth in production-based emissions of carbon dioxide (CO2)
    const co2GrowthPct = data ? `${data[len-1]["co2_growth_prct"]} %` : null;

    // Place comma between every 3 digits for human readable format.
    // Source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    function commaDeliminateNumber(number) {
        return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;
    }

    return (
        <Box sx={{ flexGrow: 0, maxWidth: 752 }}>
            <Typography sx={{ mb: 2 }} variant="h6" component="div">
                <b>Country Environmental Stats</b>
            </Typography>
            <List>
                <ListItem>
                    <Tooltip
                        title="ISO 3166-1 three-letter country code"
                        placement="top-start">
                        <ListItemAvatar>
                            <Avatar>
                                <InfoIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </Tooltip>
                    <ListItemText
                        primary="ISO"
                        secondary={isoCode}
                    />
                </ListItem>
                <ListItem>
                    <Tooltip
                        title="Country population"
                        placement="top-start">
                        <ListItemAvatar>
                            <Avatar>
                                <EmojiPeopleIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </Tooltip>
                    <ListItemText
                        primary="Population"
                        secondary={commaDeliminateNumber(population)}
                    />
                </ListItem>
                <ListItem>
                    <Tooltip
                        title="Annual production-based emissions of carbon dioxide (CO2), measured in tonnes per person."
                        placement="top-start">
                        <ListItemAvatar>
                            <Avatar>
                                <PeopleOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </Tooltip>
                    <ListItemText
                        primary="CO2 per Capita"
                        secondary={co2PerCapita}
                    />
                </ListItem>
                <ListItem>
                    <Tooltip
                        title="Annual production-based emissions of carbon dioxide (CO2), measured as a percentage of global production-based emissions of CO2 in the same year"
                        placement="top-start">
                        <ListItemAvatar>
                            <Avatar>
                                <PieChartIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </Tooltip>
                    <ListItemText
                        primary="Global Share of CO2"
                        secondary={globalCo2Share}
                    />
                </ListItem>
                <ListItem>
                    <Tooltip
                        title="Annual percentage growth in production-based emissions of carbon dioxide (CO2)."
                        placement="top-start">
                        <ListItemAvatar>
                            <Avatar>
                                <ShowChartIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </Tooltip>
                    <ListItemText
                        primary="CO2 Production Growth"
                        secondary={co2GrowthPct}
                    />
                </ListItem>
            </List>
        </Box>
    );
}

export default CountryStatsList;
