import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './ServiceData.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ServiceData = (props) => {
    const {id, name, image1, description,site } = props.services;
    useEffect(()=>{
      Aos.init({duration:2000});
},[])
    return (
        <div>

<div data-aos="fade-up" class="col">
              <div className="card  project">
                
             

                <h2 className="tittle">{name}</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src={image1} class="card-img-top" alt="..." />


                          
                <div className="card-body body-designs works">
                               
                <NavLink to={`/friend/${id}`}>
                                
                                <button className="button banners bg-dark">Details Now</button>
                                </NavLink>
                    
                               {/* <Link>
              <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
                    
              </Link> */}

              <button className="banners bg-dark">
            <a href={site}>Live site</a>
            </button>

            
                                  
            
                           </div>

               
              </div>
            </div>
            
        </div>
    );
};

export default ServiceData;