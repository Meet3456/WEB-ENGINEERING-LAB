import React, {useState} from "react";

export default function Component3() {
    const [count,setCount] = useState(0);
    return(
        <div>
            <div>Counter: {count}</div>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
}