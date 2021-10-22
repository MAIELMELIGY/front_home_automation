import React from 'react'
import axios from 'axios'
import './footer.css';
import { Link } from 'react-router-dom';
import { AiOutlineMail , AiOutlinePhone} from "react-icons/ai";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
class Footer extends React.Component {
  state = {
    Topbar: [],
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/Header/")
      .then((response) => {
        this.setState({ Topbar: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  render() { 
    return( 
      <div>
      {this.state.Topbar.map((item) =>(
     <div>
     <footer class="text-center text-lg-start bg-light text-muted">

  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   

 
   
  
    <div>
      <a href={item.facebook_url} class="me-4 text-reset">
     
      <FontAwesomeIcon icon={faFacebookF} />
      </a>
  
     
      <a href={item.instagram_url} class="me-4 text-reset">
      <FontAwesomeIcon icon={faInstagram} />
      </a>
     
    
    </div>
  
  </section>
  
  <section class="">
    <div class="container text-center text-md-start mt-5">
       
      <div class="row mt-3">
    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h4 class="text-uppercase fw-bold mb-4">
           Home Automation
          </h4>
         
        </div>
       

     
        <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
          <Link to={`/Producthdl`} class="text-reset">  HDL Product</Link>
            
          </p>
          <p>
          <Link to={`/producttuya`} class="text-reset">  Tuya Product</Link>
          </p>
          
        </div>
       

       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
          <h6 class="text-uppercase fw-bold mb-4">
            Contact us 
          </h6>
          <p>
          <AiOutlineMail/>
          <a href="mailto:  {item.email} ">  {item.email} </a>
           
          </p>
          <p><AiOutlinePhone/>
          <a href=" tel:{item.phone}">{item.phone} </a>
          </p>
         
        </div>
       
      </div>
      
    </div>

  </section>



  <div class="text-center p-4" >
    ©  Copyright . All Rights Reserved 

   Mai Elmeligy
  </div>

</footer>

     </div>
     
     ) )}
     </div>
    );
  }
}
 
export default Footer;
