import React from "react";
import HeroSection from "./HeroSection";
import Community from "./Community";
import Course from "./Course";
import ReviewSection from "./ReviewSection";
import Institute from "./Institute";

export default function Home(){
    return(
        <>
        <HeroSection/>
        
        <Course/>
        <Institute/>
       
        <Community/>
        </>
    )
}