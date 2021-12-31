import React from 'react';
import image1 from '../../../../images/developer.jpg'
import image2 from '../../../../images/mern.png'
import image3 from '../../../../images/designer.jpg'

const Service = () => {
    return (
        <div>
            <div className="container mb-5 p-3">
                  <h1  className="text-info mb-5 mt-5">Services</h1>
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Front End Developer</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src={image1} class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">MERN Stack Developer</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src={image2} class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Web Designer</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src={image3} class="card-img-top" alt="..." />


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Service;