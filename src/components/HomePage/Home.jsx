import React from "react";
import HeroSection from "./HeroSection";
import Community from "./Community";
import Course from "./Course";
import ReviewSection from "./ReviewSection";
import Institute from "./Institute";
import HeroSec from "../HomePg2/HeroSec";
import Features from "../HomePg2/Tools";
import InstituteReg from "../HomePg2/InstituteReg";
import AppPreview from "../HomePg2/AppPreview";
import PricingPlan from "../HomePg2/PricingPlan";
import Enroll from "../HomePg2/Enroll";

export default function Home(){
    return(
        <>
        <HeroSec/>
        <Features/>
        <InstituteReg/>
        <AppPreview/>
        <PricingPlan/>
        <Enroll/>
        {/* <HeroSection/>
        
        <Course/>*/}
        {/* <Institute/>
       
        <Community/>  */}
        </>
    )
}