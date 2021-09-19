import React, { useState } from "react";
import {
	ComposableMap,
	ZoomableGlobe,
	Geographies,
	Geography,
	Markers,
	Marker,
	ZoomableGroup,
} from "react-simple-maps";
import { geoPath } from "d3-geo";
import { geoTimes } from "d3-geo-projection";

import "./styles/Map.css";

const mapStyles = {
	width: "60%",
	height: "auto",
};

var countryDetails = require("../country_details.js");

const Map = ({ clickCountry, selectedCountry, handleHover }) => {
	// const [zoom, setZoom] = useState(1);
	// const [center, setCenter] = useState([0, 0]);

	// const projection = () => {
	// 	return geoTimes()
	// 		.translate([800 / 2, 450 / 2])
	// 		.scale(160);
	// };

	// const handleGeographyClick = (geo, e) => {
	// 	clickCountry(geo, e);
	// 	const path = geoPath().projection(projection());
	// 	const centroid = projection().invert(path.centroid(geo));
	// 	setCenter(centroid);
	// 	setZoom(4);
	// };

	return (
		<div className="map-container">
			<ComposableMap
				width={500}
				height={500}
				projection="orthographic"
				projectionConfig={{ scale: 220 }}
				style={mapStyles}>
				<ZoomableGlobe>
					<circle
						className="circle"
						cx={250}
						cy={250}
						r={220}
						fill="#80a2d9"
						stroke="#CFD8DC"
					/>
					<Geographies
						disableOptimization
						geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json">
						{(geos, proj) =>
							geos.map((geo, i) => (
								<Geography
									onMouseEnter={(e) => handleHover(geo, e)}
									onMouseLeave={(e) => handleHover("", e)}
									className="geography"
									onClick={(e) => clickCountry(geo, e)}
									key={geo.id + i}
									geography={geo}
									projection={proj}
									style={{
										default: {
											fill:
												selectedCountry &&
												geo.id === selectedCountry.three_digit_ISO_country_code
													? "orange"
													: "rgb(165, 212, 168)",
										},
									}}
								/>
							))
						}
					</Geographies>

					{/* <Markers>
						<Marker
							marker={{ coordinates: [-153.2917758, 67.75961636] }}
							style={{
								default: { fill: "#FF5722" },
								hover: { fill: "#FFFFFF" },
								pressed: { fill: "#FF5722" },
							}}>
							<circle
								cx={0}
								cy={0}
								r={5}
								style={{
									stroke: "#FF5722",
									strokeWidth: 3,
									opacity: 0.9,
								}}
							/>
						</Marker>
					</Markers> */}
				</ZoomableGlobe>
			</ComposableMap>
		</div>
	);
};

export default Map;
