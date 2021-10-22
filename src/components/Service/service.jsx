import React ,{ Component } from 'react';

import axios from 'axios';
import './Service.css';
import Fade from 'react-reveal/Fade';
import { withTranslation } from 'react-i18next';

class Service extends React.Component {
  state = {
    Service:[],
};
componentDidMount() {

    axios.get("https://apihomeautomation.herokuapp.com/api/Service/").then(response => {
        this.setState({Service:response.data})
    })
 
 .catch (function(error) {
    console.log(error);
})
}
render() {
    const { t } = this.props;
  return (
    <section id="Service" className="Service">
    <div className="container">
    <div class="section-title">
    
    <h2>{t('Our Service')}</h2>
  </div>
      <div className="row">
        {this.state.Service.map((Service) => {
          return (
           
            <div className="col-lg-4" data-aos="fade-up">
           <Fade right>
              <div className="box" key={Service.id}>
              <Fade Top>
                <h4> {Service.title} </h4>
                <p>{Service.content}</p>
                </Fade>
              </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
}
}

        
export default  withTranslation() (Service);
 