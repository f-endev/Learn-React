import React from "react";
import ReactDOM from "react-dom/client";



//This is a react element
const heading = React.createElement("h1", {id: "heading"}, "hi from React installed from npm");


//This is a react element using JSX syntax

const jsxHeading = <h1>hi from ReactJSX</h1>


//Noe we will create a React Component
// a js function nothing more: 
// to create a react componenet we cansee that they should be in a 
// capital leter so that JSX and identitfy that now we have create a funct ion component
const TitleComponent = () => (
        <h1>Hi, I am Title</h1>
);


//Now we will create a component that will use the TitleComponent
// this is a functional component using another functional component
//making a component composition
const HeadingComponent = () => (
    <h1>Hi i am Heading Component that holds title: <TitleComponent /></h1>
);


//Now we will render the component to the root div
const root = ReactDOM.createRoot(document.getElementById("root"));


// this is how we can render a react component(funtuional component)figma
 
root.render(<HeadingComponent />);





