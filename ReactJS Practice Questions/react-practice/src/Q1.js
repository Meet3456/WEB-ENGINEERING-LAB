import React from "react";
import ReactDOM from "react-dom";

// Single Element
const message = <h1>Hello World!</h1>;

// Component with Multiple Elements
function Question1() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a paragraph</p>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
    </div>
  );
}

ReactDOM.render(message, document.getElementById("root")); // Render single element
ReactDOM.render(<Question1 />, document.getElementById("root")); // Render component with multiple elements

export default Question1;
