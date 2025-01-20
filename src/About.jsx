import React from "react";

const About = () => {
  return (
    <div className="page-content">
      <h1>About</h1>
      <p>Welcome to the About page. Learn more about this page here.</p>
      <li>This was all coded in visual studio using vite, the dependencies used were cors, dotenv
                  express, node-fetch, react, react-dom, react-router-dom, and threejs.
                </li>
                <li>It utilizes ChatGPTs API through axios in order to get responses</li>
                <li>ThreeJS was used in order to make a interactive background which reacts dependent on mouse movements</li>
                <li>This project was done in order to learn the basics of API's and interactive page designs</li>
                <li>I also use console.log debugging in order to ensure that everything runs smoothly and to be able to find the source of bugs</li>
    </div>
  );
};

export default About;
