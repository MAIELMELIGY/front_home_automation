import React, { Component } from "react";
import { Link } from "react-router-dom";
import './details.css'
import axios from "axios";
class Lighting extends React.Component {
  state = {
    Lighting: [],
    filterData: [],
    Product: [],
  };

  componentDidMount() {
    axios.get("https://apihomeautomation.herokuapp.com/api/Tag/").then((response) => {
      this.setState({ Lighting: response.data });
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
            {this.state.Lighting
              .filter((smartloack) => smartloack.Name === "Lighting")
              .map((Lighting) => {
                return (
                  <div
                    className="container position-relative"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    key={Lighting.id}
                  >
                  <div>
                  <img className="cover" src={Lighting.img_description} />
                  </div>
                  <div class="row light-blue lighten-5 z-depth-4">
                  <div class="col-sm-3"> <img class="circle" src={Lighting.img_slider}/> </div>
                  <div class="col-sm-9">
                      <p class="name">{Lighting.Name}</p>
                     
                      <p>{Lighting.description}</p>
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
                (Product) => Product.tag === "Lighting"
              ).map((Product) => (
                <div class="card-sub" key={Product.id}>
                  <Link className="link" to={`/Lighting/${Product.id}`}>
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

export default Lighting;
