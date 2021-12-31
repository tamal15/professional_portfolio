import React, { useEffect } from 'react';
import './Header.css'
import tamal from '../../../../images/tamal.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Header = () => {
    useEffect(()=>{
                Aos.init({duration:2000});
    },[])
    return (
        <div>
              <div className=" designs pb-5 m-3">
            <div className="row">
                <div className="col-lg-6">
                <h4 data-aos="fade-up">Hello, I'm  <span>MD TAMAL SARKAR</span></h4>
                <div class="animatted-text">
   <h3>Front End developer</h3>
     <h3>Web Designer</h3>
     <h3>MERN developer</h3>
    </div> 
   

             <a href="https://drive.google.com/file/d/1nAPQ4GC2lvUj4JDg3ygKfzeWrESP9-JJ/view?usp=drivesdk" target="_blank"><button className="bg-dark banner text-white p-2 m-2">Download Resume</button></a>

    {/* <button className="bg-dark banner text-white p-2 m-2"> <a href="https://drive.google.com/file/d/1nAPQ4GC2lvUj4JDg3ygKfzeWrESP9-JJ/view?usp=drivesdk"></a>Download Resume</button> */}

    <div className="media-icons">                         
     <a href="#"> <i class="fab fa-facebook-square"></i></a>
          <a href="#"> <i class="fab fa-youtube"></i></a>
         <a href="#">  <i class="fab fa-twitter-square"></i></a>
     </div> 

               
                  
                </div>
                <div className="col-lg-6 image-slide  ">
                      <img data-aos="fade-left" src={tamal} alt="" />
                </div>

            </div>

        </div>
          
        </div>
    );
};

export default Header;

//    <div class="animatted-text">
//                     <h3>web developer</h3>
//                     <h3>web design developer</h3>
//                     <h3>web front developer</h3>
//                    </div> 
//                    <a href="#" class="btn"> my woek</a>
//                     <div className="media-icons">
//                          <a href="#"> <i class="fab fa-facebook-square"></i></a>
//                          <a href="#"> <i class="fab fa-youtube"></i></a>
//                          <a href="#">  <i class="fab fa-twitter-square"></i></a>
//                    </div> 







{/* <div className="">
<div className="row backgrounds mt-2">
    <div className="col-lg-6 content">
    <h4>Hello, I'm  <span>MD TAMAL SARKAR</span></h4>
   

    <div class="animatted-text">
   <h3>web developer</h3>
     <h3>web design developer</h3>
     <h3>web front developer</h3>
    </div> 
    <a href="#" class="btn"> my woek</a>
     <div className="media-icons">                          <a href="#"> <i class="fab fa-facebook-square"></i></a>
          <a href="#"> <i class="fab fa-youtube"></i></a>
         <a href="#">  <i class="fab fa-twitter-square"></i></a>
     </div> 
    </div>
   

    <div className="col-lg-6">
         <h5>tamal</h5>
         <h5>tamal</h5>
         <h5>tamal</h5>
</div>
 
</div>

</div> */}