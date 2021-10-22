
import React ,{ Component } from 'react';

import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-slideshow-image';
import { withTranslation } from 'react-i18next';
class Project extends React.Component {
    state = {
      projects:[],
  };
  componentDidMount() {
  
      axios.get("http://127.0.0.1:8000/api/project/").then(response => {
          this.setState({projects:response.data})
      })
   
   .catch (function(error) {
      console.log(error);
  })
  }
  render() {
    const { t } = this.props;
    return (
  
        <div className="container">
        <div class="section-title">
        
        <h2>{t('our projects in ')}</h2>
      </div>
      <div class="row d-flex align-items-center">
      {this.state.projects.map((img) => {
        return (
            <div  key={img.id} class="col-lg-3 col-md-6 col-12">
           
            <div >
            <Fade left>
              <img src={img.img} style={{width: "200px" ,height:"200px"}} />
            </Fade>
              </div>
           
          </div>
        )})}
    
        </div>
        </div>
    );
  }
  }
  
          
  export default withTranslation() (Project);
   