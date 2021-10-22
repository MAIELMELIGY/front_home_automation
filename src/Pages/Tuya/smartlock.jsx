import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
class smartlock extends React.Component {
  state = {
    smartlock: [],
    filterData: [],
    Product: [],
  };

  componentDidMount() {
    axios.get("https://apihomeautomation.herokuapp.com/api/Tag/").then((response) => {
      this.setState({ smartlock: response.data });
    });
    axios
      .get("https://apihomeautomation.herokuapp.com/api/ProductTuya/")
      .then((response) => {
        this.setState({ Product: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <section id="hero" classNmae="d-flex align-items-center">
          <div>
            {this.state.smartlock
              .filter((smartloack) => smartloack.Name === "Smartlock")
              .map((smartlock) => {
                return (
                  <div
                    className="container position-relative"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    key={smartlock.id}
                  >
                  <div>
                  <img className="cover" src={smartlock.img_description} />
                  </div>
                  <div class="row light-blue lighten-5 z-depth-4">
                  <div class="col-sm-3"> <img class="circle" src={smartlock.img_slider}/> </div>
                  <div class="col-sm-9">
                      <p class="name">{smartlock.Name}</p>
                     
                      <p>{smartlock.description}</p>
                  </div>
                  </div>
                  </div>
                );
              })}
          </div>
        </section>
        <div>
          <div class="row" id="sortable">
            <div class="col-md-3">
              {this.state.Product.filter(
                (Product) => Product.tag === "Gateway"
              ).map((Product) => (
                <div class="card-sub" key={Product.id}>
                  <Link className="link" to={`/smartlock/${Product.id}`}>
                    <img class="card-img-top img-fluid" src={Product.image_1} />
                    <div class="card-block">
                      <h4 class="card-title">{Product.Name}</h4>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default smartlock;
