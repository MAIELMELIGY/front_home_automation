import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
class Energy extends React.Component {
  state = {
    Energy: [],
    filterData: [],
    Product: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/Tag/").then((response) => {
      this.setState({ Energy: response.data });
    });
    axios
      .get("http://127.0.0.1:8000/api/ProductTuya/")
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
            {this.state.Energy
              .filter((smartloack) => smartloack.Name === "Energy")
              .map((Energy) => {
                return (
                  <div
                    className="container position-relative"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    key={Energy.id}
                  >
                    <img className="cover" src={Energy.img_description} />

                    <h2> {Energy.Name}</h2>
                    <p>{Energy.description}</p>
                  </div>
                );
              })}
          </div>
        </section>
        <div>
          <div class="row" id="sortable">
            <div class="col-md-3">
              {this.state.Product.filter(
                (Product) => Product.tag === "Energy"
              ).map((Product) => (
                <div class="card-sub" key={Product.id}>
                  <Link className="link" to={`/Energy/${Product.id}`}>
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

export default Energy;
