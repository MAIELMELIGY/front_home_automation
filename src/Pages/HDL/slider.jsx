
import React from 'react';

import backvideo from '../../img/cover.mp4'
import logo1 from '../../img/logo.png'
class Slider extends React.Component {
 render(){
 return(
     <div>
 <div className='carousel-fluid slide carousel-fade' data-ride='carousel' data-interval='false'>
 <div className='carousel-inner'>
 <div className='carousel-item active'>
 <div className='view'>
 <video autoPlay loop>
 <source src={backvideo} type='video/mp4' />
 </video>
 <div className='full-bg-img flex-center mask gba-black-dark white-text'>
 
 <ul className='animated fadeInUp col-md-12 list-unstyled list-inline'>
 
 <li>
 <div className="hm-gradient">
 <div className="full-bg-img">
 <div className="container flex-center">
 <div className="row pt-5 mt-3">
 <div className="col-lg-6 wow fadeIn mb-5 text-center text-lg-left">
 <div className="white-text">
 <hr className="my-2 white" />
 
 
 </div>
 </div>
 
 </div>
 </div>
 </div>
 </div>
</li>
</ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 )}};
 export default Slider