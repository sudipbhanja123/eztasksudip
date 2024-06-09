import React from "react";
import Header from "./Header";
import ServiceCard from "./ServiceCard";
import "./MainComponent.css";
import logopresentation from "../Assets/logopresentation.png";
import logovisual from "../Assets/logovisual.png";
import logoTransition from "../Assets/logopresentation.png";
import logographics from "../Assets/logographics.png";
import logoresearch from "../Assets/logoresearch.png";
import logodata from "../Assets/logodata.png";

const MainComponent = () => {
  const services = [
    {
      title: "Presentation Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: logopresentation,
    },
    {
      title: "Audio - Visual Production",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: logovisual,
    },
    {
      title: "Translation Services",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: logoTransition,
    },
    {
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: logographics,
    },
    {
      title: "Research & Analytics",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: logoresearch,
    },
    {
      title: "Data Processing",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: logodata,
    },
  ];
  return (
    <div className="main">
      <div className="cols-2">
        <Header />
      </div>

      <div className="cols-3 services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
