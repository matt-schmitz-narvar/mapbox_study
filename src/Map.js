import React, { Component } from 'react';
import ReactMapboxGL, {Layer, Feature, Marker} from 'react-mapbox-gl';

const Map = ReactMapboxGL({
  accessToken: 'pk.eyJ1IjoibWF0dC1zY2htaXR6LW5hcnZhciIsImEiOiJjajd1eTlkeWIyaXdxMzNvM3Vmemw4NjRrIn0.Ni8El4mBJ13zY5VflI2Lhg'
})

const allCoords = [
  [80.26,13.1],
  [80.24,13.04],
  [80.1,13.06]
]

class MapComponent extends Component {
  render() {
    return (
      <div className="Map">
        <Map
          style="mapbox://styles/mapbox/streets-v10"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          zoom={[11]}
          center={[80.22, 13.07]}
          >
            {allCoords.map(coords => (
              <Marker
                coordinates={coords}
                anchor="bottom">
                <img src={'https://pbs.twimg.com/profile_images/573891632405204992/04kQ_DyP.png'} width="30" height="30"/>
              </Marker>
              )
            )}

            <Layer
              type="symbol" 
              id="marker"
              layout={{ "icon-image": "airport-15" }}
              image='https://pbs.twimg.com/profile_images/573891632405204992/04kQ_DyP.png'
            >
              <Feature coordinates={[80.22, 13.07]}/>
            </Layer>
        </Map>


      </div>
    );
  }
}

export default MapComponent;