import React from "react";
import ReactDOM from "react-dom/client";



//This is a react element
const heading = React.createElement("h1", {id: "heading"}, "hi from React installed from npm");


//This is a react element using JSX syntax

const jsxHeading = <h1>hi from ReactJSX</h1>
//Jsx => is converted into React Element by Babel

//react element is then renderd on browser as a DOM element
//than DOM element is rendered on the browser as HTML element by react-dom
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(jsxHeading);

