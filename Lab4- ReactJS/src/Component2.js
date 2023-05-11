import React from "react";

export default function Component2(props) {
    function handleClick(e) {
        e.preventDefault();
        console.log(e.tareget[0].value);
    }
  return(
    <div>
        <h2>My name is {props.name} Sap: {props.sap}</h2>
        <form action="#" onSubmit={handleClick}>
            <input type="text" placeholder="Enter your name"/>
            <div>
                <button type="submit">Click</button>
            </div>
        </form>
    </div>
  );
}