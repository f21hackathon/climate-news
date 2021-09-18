import React from "react";
import {
	ComposableMap,
	ZoomableGlobe,
	Geographies,
	Geography,
	Markers,
	Marker,
	ZoomableGroup,
} from "react-simple-maps";

import "./Map.css";

const mapStyles = {
	width: "60%",
	height: "auto",
};

const Map = () => (
	const getCoords = (geo) => {
		console.log(geo)
	}
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
								className="geography"
								onClick={() => getCoords(geo)}
								key={geo.id + i}
								geography={geo}
								projection={proj}
								style={{
									default: { fill: "rgb(165, 212, 168)" },
								}}
							/>
						))
					}
				</Geographies>

				<Markers>
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
				</Markers>
			</ZoomableGlobe>
		</ComposableMap>
	</div>
)

);

export default Map;
