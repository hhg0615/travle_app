import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import Navigation from "./components/Navigation";

// 네비게이션이 HashRouter밖에있으면 동작하지않는다.
// Link가 라우터 안에 있어야 하기 때문
// openlayers 6.5.0
function App(){
  return ( 
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App; 