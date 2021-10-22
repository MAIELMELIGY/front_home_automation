import React, { Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./hdl.css";
import image_knx from "../../img/asset 12.png";
import image_buspro from "../../img/asset 9.png";
class Producthdl extends Component {
  state = {
    Product: [],
  };

  componentDidMount() {
    axios
      .get("https://apihomeautomation.herokuapp.com/api/ProductHdl/")
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
      <div className="image-container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-2">
            <Link to={`/Knx`}>
              {" "}
              <img className="img-fluid" src={image_knx} />
            </Link>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-2">
            <Link to={`/Buspro`}>
              <img className="img-fluid" src={image_buspro} />
            </Link>
          </div>
        </div>
      
        </div>
        <div className="video-contain">
        <div className="row">
        {this.state.Product.map((item) => (
          <div  key={item.id} className="col-md-4">

          <video src={item.videofile} width="500" height="400" controls>
          </video>
          </div>
          ))}
          </div>
          <div  >
          </div>
        </div>
    </div>

  
     
    );
  }
}
export default Producthdl;
