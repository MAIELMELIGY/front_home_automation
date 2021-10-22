import React, { Component } from "react";

import axios from "axios";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import image_tuya from "../../img/Tuya.jpeg";
import image_hdl from "../../img/HDL.jpeg";
import "./product.css";
class Category extends Component {
  render() {
    const { t } = this.props;

    return (
      <section id="Product" class="Product">
        <div class="container" data-aos="zoom-in">
          <div class="section-title"></div>
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 col-md-6 col-12">
              <Bounce left>
              <div className="box">
                <Link className="link" to={`/Producthdl`}>
                  
                  <img src={image_hdl} class="img-fluid" alt="" />{" "}
                  <h1>wired</h1>
                </Link>
                </div>
              </Bounce>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <Bounce right>
              <div className="box">
                <Link className="link" to={`/producttuya`}>
               
                  <img src={image_tuya} class="img-fluid" alt="" />{" "}
                  <h1>wirless</h1>
                </Link>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Category);
