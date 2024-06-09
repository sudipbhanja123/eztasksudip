import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="card-header">
        <img src={icon} alt={title} className="service-icon" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
