import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import Footer from "../Footer/Footer";
import Whyus from "../Whyus/Whyus";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Service from "../Service/service";
import Client from "../Client/client";
import AboutNumber from "../About/about_number";
import Navbar from "./../Navbar/Navbar";
import Category from "../Product/category";
import video from "../../img/cover.mp4";
import VideoLooper from "react-video-looper";
import Project from "../projects/projects";
class Home extends React.Component {
  state = {
    home: [],
  };
  componentDidMount() {
    axios
      .get("https://apihomeautomation.herokuapp.com/api/Header/")
      .then((response) => {
        this.setState({ home: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div id="main">
        <Navbar />
        <div className="slider">
          {this.state.home.map((home) => {
            return (
              <div>
                <div
                  style={{
                    width: "1536px",
                    height: "600px",
                    overflow: "hidden",
                     allow="autoplay"
                  }}
                >
                  <VideoLooper source={video} />
                </div>
              </div>
            );
          })}
        </div>

        <Service />
        <Category />
        <Project />
        <Client />
        <AboutNumber />
        <About />
        <Whyus />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
