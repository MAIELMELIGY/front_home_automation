import React, { Component } from "react";
import { Link } from "react-router-dom";
import './details.css'
import axios from "axios";
class Knx extends React.Component {
  state = {
    Knx: [],
    filterData: [],
    Product: [],
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/ProductHdl/")
      .then((response) => {
        this.setState({ Knx: response.data });
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
            {this.state.Knx
              .filter((Knx) => Knx.SubCategory=== "Knx")
              .map((Knx) => {
                return (
                
                    <div class="card-sub" key={Knx.id}>
                    <Link className="link" to={`/Knx/${Knx.id}`}>
                      <img class="card-img-top img-fluid" src={Knx.image_1} />
                      <div class="card-block">
                        <h4 class="card-title">{Knx.Name}</h4>
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

export default Knx;
