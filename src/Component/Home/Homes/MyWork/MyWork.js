import React from 'react';
import { Link } from 'react-router-dom';
import honda from '../../../../images/honda.PNG'
import travel from '../../../../images/travel.PNG'
import hospital from '../../../../images/hospital.PNG'
import './MyWork.css'
const MyWork = () => {
    const designShow = {
        width: '18rem'
    }
    return (
        <div className="mt-5 recent">

            <h1 className="text-info ">My Recent Works</h1>
            {/* <div className="">
                <div className="col-lg-3 contsiner">
                      <div className="project card">
                          <h2>Honda</h2>
                          <img src={honda} alt="" />
                      </div>
                </div>
            </div> */}


         <div className="container">
             <div className="row row-cols-1 row-cols-md-3 g-3">
             <div className="col">
                        <div className="card w-100 img-fluid project" style={designShow}>
                        <h2 className="tittle">Honda</h2>
                            <img className="image-design" src={honda} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                {/* <h3>
                                Operation Theater</h3> */}


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
             
               </Link>
             <button>
             <a href="https://tamal-hondacbr-f80900.netlify.app/">Live site</a>
             </button>
                            </div>


                        </div>
                    </div>
            
            {/* 2nd  */}

            <div className="col">
                        <div className="project card w-100" style={designShow}>
                        <h2 className="tittle">Travel</h2>
                            <img className="image-design" src={travel} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                              

                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
              
               </Link>

               <button>
             <a href="https://travel-agent-a24e1.web.app/">Live site</a>
             </button>

                            </div>


                        </div>
                    </div>
        {/* end  */}


        {/* 3rd */}

        <div className="col ">
                        <div className=" project card w-100" style={designShow}>
                        <h2 className="tittle">Hospital</h2>
                            <img className="image-design" src={hospital} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                               


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
                     
               </Link>

               <button>
             <a href="https://healthcare-hospital.web.app/">Live site</a>
             </button>
             
                            </div>


                        </div>
                    </div>
            {/* end  */}
             </div>
         </div>
        </div>
    );
};

export default MyWork;