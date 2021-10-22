
import React , { Component } from "react";
import { Carousel } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

import './client.css'
import axios from "axios";
import { withTranslation } from 'react-i18next';

class Client extends Component {
  state = {
    Client: [],
  };
  componentDidMount() {
    axios
      .get("https://apihomeautomation.herokuapp.com/api/Client/")
      .then((response) => {
        this.setState({ Client: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { t } = this.props;

    return (
        <section id="clients" class="clients">
        <div class="container" data-aos="zoom-in">
        <div class="section-title">
       
        <h2>{t('our Client')}</h2>
        </div>  
        <div class="row d-flex align-items-center">
 
      {this.state.Client.map((item) => {
        return (
          <div class="col-lg-4 col-md-6 col-12">
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
          <div class="flipper">
          
       <div className="front">
        <img src={item.img} class="img-fluid" alt=""/>
        <h1>{item.client}</h1>
        </div>
      <div className="back">
        <p>{item.review}</p>
        </div>
       
     
        </div>
                 
       </div>
     </div>
        )})}
        </div>
        </div>
        </section>
    );
  }
}

export default  withTranslation() ( Client);
