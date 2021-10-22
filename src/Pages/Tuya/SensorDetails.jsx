import React, { Component } from "react";

import "./product.css";

import axios from "axios";
import { withTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

class SensorDetail extends Component {
  state = {
    Product: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://apihomeautomation.herokuapp.com/api/ProductTuya/?id=${this.props.match.params.id} `
      )

      .then((response) => {
        this.setState({ Product: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
        <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
    <div class="col-md-10">
          {this.state.Product.map((item) => (
            <div class="card">
            <div class="row">
                <div class="col-md-6">
                    <div class="images p-3">
                        <div class="text-center p-4"> <img id="main-image" src={item.image_1} width="250" /> </div>
                        <div class="thumbnail text-center"> <img onclick="change_image(this)" src={item.image_2} width="100"/> <img onclick="change_image(this)" src={item.image_3} width="100"/> <img onclick="change_image(this)" src={item.image_1} width="100"/> </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="product p-4">
                        <div class="d-flex justify-content-between align-items-center">
                        </div>
                            <h5 class="text-uppercase">{item.Name}</h5>
                           
                        </div>
                        <p class="about">{item.description}</p>
                        
                    </div>
                </div>
           
        </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
}
export default withRouter(SensorDetail);
