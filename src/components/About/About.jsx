import React ,{ Component } from 'react';

import axios from 'axios'
import Fade from 'react-reveal/Fade';
import "./About.css";
import CountUp from 'react-countup';

class About extends Component {
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
    return (
     
        <section id="about" clasName="about">
        {this.state.About.map((item) => (
          <div class="container">
            <div  key={item.id}>
              <div className="Number">
              
                <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                <Fade left>
                  <img src={item.about_image} className="img-fluid" alt="" />
                  </Fade>
                </div>
                <div
                  class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                  data-aos="fade-right"
                >
                <Fade right>
                  <h1>{item.title}</h1>
                  <p className="font-italic">{item.content}</p>
                  </Fade>
                </div>
              </div>
            </div>
           
          </div>
        
        ))}
      </section>
    )
  }
}
/* function About() {
    return (
        <div id='about'>
            <div className='about-text'>
              <Fade bottom>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum cum expedita. Voluptas ratione beatae sunt incidunt, in delectus doloremque aliquid, iure tempora ad nobis.</p>
                <button>Read More</button>
                </Fade>
            </div>
            
            <div className='about-image'>
            <Fade right>
                <img src={aboutimage} alt=''/>
            </Fade>
            </div>
        </div>
    )
}
 */
export default About;

