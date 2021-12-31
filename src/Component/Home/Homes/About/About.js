import React,{useEffect} from 'react';
import check1 from '../../../../images/tamal.jpg';
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
},[])
    return (
        <div id="#about" className="colors">
            <h1 data-aos="fade-in" className="text-info  mt-5 pt-5">About Me</h1>
            <div className=" about mt-5 mb-5 p-4" >
            <div className="row">
                <div className="col-lg-5 image-slide">
                <img data-aos="fade-right" src={check1} alt="" />
                
                 
                </div>
                <div className="col-lg-7 image-slide mb-5">
                <h5 data-aos="fade-up" className="texts">MD TAMAL SARKAR</h5>
                  <p data-aos="fade-up" className="texts">I am a programmer, font End Developer, Mern stack Developer,React Developer. I am determined to offer the best level of honesty, efficiency, and sincerity. </p>

<p data-aos="fade-up" className="texts">I am a technology enthusiast and a self-thinking programmer who wants to start a career as a web developer.  
I always look for challenges where I can make the most of my potential and always love. This is to achieve  
him. </p>
                <button className="bg-dark banner text-white p-2 m-2">Read More</button>
                </div>

            </div>

        </div>


        </div>
    );
};

export default About;