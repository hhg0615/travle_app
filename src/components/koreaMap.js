import React from "react";
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';


function getMap(){
 // var mapshaper = require('mapshaper');  //npm으로 해당 모듈을 설치해야 된다.
 // var ogr2ogr = require('ogr2ogr'); //npm으로 해당 모듈을 설치해야 된다.
//  var fs = require("fs");
 // var geojson = ogr2ogr('../korea_area/TL_SCCO_SIG.shp').stream();
 //  geojson.pipe(fs.createWriteStream('sdf.json'));
}

class koreaMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = { center: [0, 0], zoom: 1 };

    this.olmap = new Map({
      target: null,
      layers: [
        new TileLayer({
          source: new OSM()
          // getMap()
        })
      ],
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      })
    });
  }
  componentDidMount() {
    this.olmap.setTarget("map");
  }

  render(){
        return(
          <div id="map" className="map" style={{ width: "100%", height: "360px" }}></div>
        ) 
      }
};
  
export default koreaMap;