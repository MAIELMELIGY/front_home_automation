import React ,{ Component } from 'react';

import axios from 'axios'
import Fade from 'react-reveal/Fade';
import "./aboutNumber.css";
import { withTranslation } from 'react-i18next';

import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class AboutNumber extends Component {
    state = {
        About:[],
    };
componentDidMount() {
    
        axios.get("https://apihomeautomation.herokuapp.com/api/About/").then(response => {
            this.setState({About:response.data})
        })
     
     .catch (function(error) {
        console.log(error);
    })
    }
render() {
  const { t } = this.props;
    return (
     
        <section id="aboutNumber" clasName="aboutNumber">
        <div >
        <h1>
         Number of our Happy clients of home automation company
        </h1>
        </div>
        {this.state.About.map((item) => (
          <div class="container">
            <div className="number" key={item.id}>
              <div class="row">
              
                <div class="col-lg-4 order-1 order-lg-2" data-aos="fade-left">
              
               <h2><CountUp start={0} end= {item.number_of_client} duration={4}>
                </CountUp>
                <h4> {t('Number of client')}  </h4>
                </h2> 
                </div>
                <div
                  class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1 content"
                  data-aos="fade-right"
                >
              
               <h2><CountUp start={0} end= {item.number_of_project} duration={4}>
                </CountUp>
                </h2> 
                <h4>  {t('Number of Project')}</h4>
              
                </div>
                <div
                class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1 content"
                data-aos="fade-right"
              >
              <h2><CountUp start={0} end= {item.number_of_Awards} duration={4}>
               </CountUp>
               </h2> 
                          <h4> {t('Awards')}</h4>

              </div>  
            
              </div>
            </div>
           
          </div>
        
        ))}
      </section>
    )
  }
}

export default   withTranslation() (AboutNumber);

