import React from "react";
import { aboutBanner } from "../assets/data";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const AboutPage = () => {
  return (
    <div className="h-screen mt-20">
      <Banner pageName={"About Us"} />
    </div>
  );
};

export default AboutPage;
