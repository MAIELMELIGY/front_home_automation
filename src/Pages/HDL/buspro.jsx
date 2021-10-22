import React, { Component } from "react";
import { Link } from "react-router-dom";
import './details.css'
import axios from "axios";
class Buspro extends React.Component {
  state = {
    Buspro: [],
    filterData: [],
    Product: [],
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/ProductHdl/")
      .then((response) => {
        this.setState({ Buspro: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
        <div className="main">
        <div class="row" id="sortable">
            <div class="col-md-3">
            {this.state.Buspro
              .filter((Buspro) => Buspro.SubCategory=== "Buspro")
              .map((Buspro) => {
                return (
                
                    <div class="card-sub" key={Buspro.id}>
                    <Link className="link" to={`/Buspro/${Buspro.id}`}>
                      <img class="card-img-top img-fluid" src={Buspro.image_1} />
                      <div class="card-block">
                        <h4 class="card-title">{Buspro.Name}</h4>
                      </div>
                    </Link>
                  </div>
             
                );
              })}
          </div>
     
        <div>
         </div>
         </div>
         </div>

    );
  }
}

export default Buspro;
