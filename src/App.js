import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./index.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* import Details from './Pages/details'
import Categories from './Pages/Category';
import Producthdl from './Pages/Hdl';
import Tuya from './Pages/Tag/tag.jsx'
import smartlock from './Pages/Tag/smartlock'; */
import Producthdl from "./Pages/HDL/hdlproduct";
import Details from "./Pages/HDL/test";
import Tuya from "./Pages/Tuya/Tuya";
import smartDetail from "./Pages/Tuya/smartDetail";
import smartlock from "./Pages/Tuya/smartlock";
import Camera from "./Pages/Tuya/camera";
import CameraDetails from "./Pages/Tuya/CameraDetails";
import Gateway from "./Pages/Tuya/gateway";
import GatewayDetails from "./Pages/Tuya/GatewayDetails";
import Electrical from "./Pages/Tuya/electrical";
import ElectricalDetails from "./Pages/Tuya/ElectricalDetails";

import Sensor from "./Pages/Tuya/sensor";
import SensorDetails from "./Pages/Tuya/SensorDetails";

import Robot from "./Pages/Tuya/robot";
import RobotDetails from "./Pages/Tuya/RobotDetails";
import Energy from "./Pages/Tuya/energy";
import EnergyDetails from "./Pages/Tuya/EnergyDetails";
import LightingDetails from "./Pages/Tuya/LightingDetails";
import Lighting from "./Pages/Tuya/lighting";
import Slider from "./Pages/HDL/slider";
import Knx from './Pages/HDL/knx';
import BusproDetails from './Pages/HDL/busproDetail';
import KnxDetails from './Pages/HDL/KnxDetails';

import Buspro from './Pages/HDL/buspro';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Producthdl" component={Producthdl} />
            <Route exact path="/Producthdl/:id" component={Details} />
            <Route exact path="/producttuya" component={Tuya} />
            <Route exact path="/smartlock/:id" component={smartDetail} />
            <Route exact path="/smartlock" component={smartlock} />
            <Route exact path="/Camera/:id" component={CameraDetails} />
            <Route exact path="/Camera" component={Camera} />
            <Route exact path="/Gateway/:id" component={GatewayDetails} />
            <Route exact path="/Gateway" component={Gateway} />
            <Route exact path="/Electrical/:id" component={ElectricalDetails} />
            <Route exact path="/Electrical" component={Electrical} />
            <Route exact path="/Sensor/:id" component={SensorDetails} />
            <Route exact path="/Sensor" component={Sensor} />
            <Route exact path="/Robot/:id" component={RobotDetails} />
            <Route exact path="/Robot" component={Robot} />
            <Route exact path="/Energy/:id" component={EnergyDetails} />
            <Route exact path="/Energy" component={Energy} />
            <Route exact path="/Lighting/:id" component={LightingDetails} />
            <Route exact path="/Lighting" component={Lighting} />
            
            <Route exact path="/Knx/:id" component={KnxDetails} />
            <Route exact path="/Knx/" component={Knx} />
            <Route exact path="/Buspro/:id" component={BusproDetails} />
            <Route exact path="/Buspro/" component={Buspro} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
/* <Route exact path='/Producthdl' component={Producthdl} />
<Route exact path='/category' component={Categories} />
<Route exact path='/smartlock' component={smartlock}/>
<Route exact path='/product/:id' component={Details} />
<Route exact path='/producttuya' component={Tuya}/>  */
