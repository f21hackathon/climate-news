import React from "react"
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography
} from "react-simple-maps"

const mapStyles = {
  width: "90%",
  height: "auto",
}

const Map = () => (
  <div>
    <ComposableMap
      width={500}
      height={500}
      projection="orthographic"
      projectionConfig={{ scale: 220 }}
      style={mapStyles}
    >
      <ZoomableGlobe>
        <circle cx={250} cy={250} r={220} fill="transparent" stroke="#CFD8DC" />
        <Geographies
          disableOptimization
          geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
        >
          {(geos, proj) =>
            geos.map((geo, i) => (
              <Geography
                key={geo.id + i}
                geography={geo}
                projection={proj}
                style={{
                  default: { fill: "#CFD8DC" }
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGlobe>
    </ComposableMap>
  </div>
)

export default Map
