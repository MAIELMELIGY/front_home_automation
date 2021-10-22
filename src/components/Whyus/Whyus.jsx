import React ,{ Component } from 'react';

import axios from 'axios';
import './Whyus.css';
import Fade from 'react-reveal/Fade';
import { withTranslation } from 'react-i18next';

class Whyus extends React.Component {
  state = {
    Whyus:[],
};
componentDidMount() {

    axios.get("https://apihomeautomation.herokuapp.com/api/why_home/").then(response => {
        this.setState({Whyus:response.data})
    })
 
 .catch (function(error) {
    console.log(error);
})
}
render() {
  const { t } = this.props;
  return (
    <section id="why-us" className="why-us">
    <div className="container">
    <div class="section-title">
   
  
  </div>
      <div className="row">
        {this.state.Whyus.map((Whyus) => {
          return (
           
            <div className="col-lg-3" data-aos="fade-up">
           
              <div className="box" key={Whyus.id}>
              <Fade right>
               
                <h3> {Whyus.title} </h3>
            
                </Fade>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
}
}

        
export default withTranslation() (Whyus);
 