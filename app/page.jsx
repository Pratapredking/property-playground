import React from "react";
import Hero from "/component/Hero";
import InfoBoxes from "/component/InfoBoxes";
import HomeProperties from "@/component/HomeProperties";
import connectDB from "/config/database";



const HomePage = () => {
    connectDB();
    // console.log(process.env.MONGODB_URI);
    return (  
    <>
        <Hero/>
        <InfoBoxes/>
        <HomeProperties/>
    </>
    );
}
 
export default HomePage;