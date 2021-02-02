import React from "react";
import axios from "axios";
import KoreaMap from "../components/koreaMap";
import "../routes/Home.css";

class Home extends React.Component{
  getMap = () => {
    console.log("getMap");
    return(
      <div>
        <KoreaMap />
      </div>
    );
  }
  componentDidMount(){
  }
  render(){
    return(
      <div>
        {this.getMap()}
      </div>
    ) 
  }
}

export default Home;
