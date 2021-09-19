import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import "./styles/SearchBar.css";

const filter = createFilterOptions();

const FreeSoloCreateOption = ({
	countries,
	searchCountry,
	selectedCountry,
	setSelectedCountry,
}) => {
	const [value, setValue] = useState(selectedCountry);

	useEffect(() => {
		if (value !== null) {
			setSelectedCountry(value);
			searchCountry(value.country);
		}
	}, [value]);

	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				if (typeof newValue === "string") {
					setValue({
						country: newValue,
					});
				} else if (newValue && newValue.inputValue) {
					// Create a new value from the user input
					setValue({
						country: newValue.inputValue,
					});
				} else {
					setValue(newValue);
				}
			}}
			filterOptions={(options, params) => {
				const filtered = filter(options, params);

				const { inputValue } = params;
				// Suggest the creation of a new value
				const isExisting = options.some(
					(option) => inputValue === option.country
				);
				if (inputValue !== "" && !isExisting) {
					filtered.push({
						inputValue,
						country: `No results for "${inputValue}"`,
					});
				}

				return filtered;
			}}
			selectOnFocus
			clearOnBlur
			handleHomeEndKeys
			id="free-solo-with-text-demo"
			options={countries}
			getOptionLabel={(option) => {
				// Value selected with enter, right from the input
				if (typeof option === "string") {
					return option;
				}
				// Add "xxx" option created dynamically
				if (option.inputValue) {
					return option.inputValue;
				}
				// Regular option
				return option.country;
			}}
			renderOption={(props, option) => (
				<li {...props}>
					<div className="search-option">
						<img
							src={option.image}
							alt={option.image}
							className="search-image"
						/>
						<p className="search-text">{option.country}</p>
					</div>
				</li>
			)}
			sx={{ width: 300 }}
			freeSolo
			renderInput={(params) => (
				<TextField
					className="search-input"
					{...params}
					label="Search for a country"
					variant="standard"
				/>
			)}
		/>
	);
};

export default FreeSoloCreateOption;
