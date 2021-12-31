import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import './Homes.css'
// import MyWork from './MyWork/MyWork';
// import Contact from './Contact/Contact';
import ContactUs from './ContactUs/ContactUs';
import RecentWork from './RecentWork/RecentWork';
import Service from './Service/Service';
import Skill from './Skill/Skill';
const Homes = () => {
    return (
        <div className="backgrounds-color">
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Service></Service>
         
            {/* <MyWork></MyWork> */}
            <RecentWork></RecentWork>
            <ContactUs/>
            
        </div>
    );
};

export default Homes;