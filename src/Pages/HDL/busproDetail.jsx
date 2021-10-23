
import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
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

class BusproDetails extends Component {
  state = {
    Product: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://apihomeautomation.herokuapp.com/api/ProductHdl/?id=${this.props.match.params.id} `
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
            <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8 col-centered">
            <div class="maintxt">
                <img src="{item.image_1}" class="img-responsive"/>
                <span class="overlay-text">{item.Name}</span>
            </div>
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
export default withRouter(BusproDetails);
