import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        pid: this.props.productid,
        imageurl: this.props.imgurl,
        product: this.props.productname,
        price: this.props.price,
        description: this.props.description,
    }

    }


    render() {

        return (
          <div className="productcardmain">
            <div className="cardbox">
              <div className="cardimage">
               
              </div>
              <div className="productname">
                <p>{this.state.productname}</p>
    
              </div>
    
              
              <div className="bottomcontainer">
                <div className="price">
                  <p>{this.state.price}$</p>
                </div>
    
                <div className="buybtn">
                  <a href={"/details/" + this.state.pid}>Details</a>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    