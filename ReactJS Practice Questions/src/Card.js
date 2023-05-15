import React from "react";

function Card(props){
    return(
        <>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
        </>
    )
}

export default Card;