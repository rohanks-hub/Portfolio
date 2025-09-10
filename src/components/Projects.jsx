import React from 'react';
import './Projects.css'; 

function Projects() {
  return (
    <div>
      <div id="projects" className="c">
        <h2>Projects</h2>
        <dl>
          <dt>Aquachain</dt>
          <dd>
            AquaChain is a decentralized web platform that leverages blockchain technology to securely log and track fish catch data. Built with Flask and MongoDB on the backend and a modern React.js + Tailwind CSS frontend, AquaChain enables users to record and visualize data such as catch location, weight, and timestamp. By integrating blockchain, the platform ensures data immutability, transparency, and trust—making it ideal for sustainable fisheries, regulatory compliance, and environmental research.
          </dd>
          <dt>Aquapredict</dt>
          <dd>
            AquaPredict is a machine learning-driven web application designed to forecast future water quality, specifically focusing on predicting dissolved oxygen (DO) levels. The backend is powered by an XGBoost Regressor (XGBR) model, trained on historical water quality data to deliver accurate predictions for 1 day, 1 week, and 4 weeks ahead. Built with Python, the system generates interactive visualizations to show 30-day DO trends, helping users monitor and plan for aquatic health.
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default Projects;
