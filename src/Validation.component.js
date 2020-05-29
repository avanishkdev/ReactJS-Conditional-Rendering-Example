import React from "react";

const Validation =(props) => {

 const content = props.length <=5 ? <p>Text is too short</p>: <p>Text longs enough</p>
 return (content);
}

export default Validation;