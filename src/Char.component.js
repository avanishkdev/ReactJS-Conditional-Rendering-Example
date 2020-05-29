import React from "react";

const Char =(props) => {

const inlinebox = {
    display: "inline-block",
    padding: "16px",
    textAlign : "center",
    margin: "16px",
    border: "1px solid black"
}
return <p style={inlinebox} onClick={()=> props.click(props.id)}>{props.letter}</p>
}

export default Char;