
import React , { Component } from "react";
import { Carousel } from "react-bootstrap";
import './product.css'

import axios from "axios";
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from "react-router-dom";

class Details extends Component {

  state = {
    Product:[],
};
componentDidMount() {

axios.get(
  `http://127.0.0.1:8000/api/ProductHdl/?id=${this.props.match.params.id} `)
  
  
  .then(response => {
  this.setState({Product:response.data})
})

.catch (function(error) {
console.log(error);
})
    }

  
    render() {
      return (
      
        <div >
        <div>
        {this.state.Product.map((item) => (
          <div  key={item.id}>
          
          <div  >
          
            <img  src={item.image_1} alt='' />
            <div >
            <h1>{item.Name}</h1>
            <p >{item.description}</p>

          </div>
            </div>
    
     </div>

             
        ))}
        
        <div className='back'>
        <Link to='/Producthdl'> <h1> Hdl PRODUCTS</h1> </Link>
      </div>
  
    </div>
    </div>
    )
  }
}
export default withRouter(Details);
  