import {
	ComposableMap,
	ZoomableGlobe,
	Geographies,
	Geography,
} from "react-simple-maps";
import "./styles/Map.css";

const mapStyles = {
	width: "90%",
	height: "100%",
};

const Map = ({ clickCountry, selectedCountry }) => {
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
									// onMouseEnter={(e) => handleHover(geo, e)}
									// onMouseLeave={(e) => handleHover("", e)}
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
				</ZoomableGlobe>
			</ComposableMap>
		</div>
	);
};

export default Map;
