import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceData from './ServiceData/ServiceData';
import '../MyWork/MyWork.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const RecentWork = () => {
    const [work,setWork]=useState([])

    useEffect(()=>{
        Aos.init({duration:2000});
  },[])

    useEffect(()=>{
        fetch('/tamal.json')
        .then(res=>res.json())
        .then(data=>setWork(data))
    },[])
    return (
        <div className="" id="work"> 

            <div className="container">
<h1 data-aos="fade-up"  className="text-info mb-5 mt-5">My Recent Work</h1>
                <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">


                {
                        work.map(services => <ServiceData
                            services={services}
                        >

                        </ServiceData>)
                    }

                {/* {
                        work.map((offers,index)=>(
                            <div class="col">
              <div className="card  project">
                
             

                <h2 className="tittle">{offers.name}</h2>
                            <img className="image-design" src={offers?.image1} class="card-img-top" alt="..." />

                            <Link to={`/details/${offers.id}`}>
                                details
                    <button className="button">Details Now</button>
                    </Link>
                          
                <div className="card-body body-designs works">
                               

                    
                               <Link>
              <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
                    
              </Link>

              <button>
            <a href="https://healthcare-hospital.web.app/">Live site</a>
            </button>

            
                                  
            
                           </div>

               
              </div>
            </div>
                        ))
                    } */}


                </div>
                
            </div>
            
        </div>
    );
};

export default RecentWork;