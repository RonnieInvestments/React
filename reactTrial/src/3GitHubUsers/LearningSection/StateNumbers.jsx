import {useState} from "react";

function StateNumbers () {
    // use state is a function [value, funSetValue] = useState
    // initial state
    // returns an array [value, f() to update the value]
    console.log ("State is being rendered");
    const state = useState (0);
    console.log ("State is ", state);

    const n = state [0];
    const updatedN = state [1];

    const increment = () => {
        console.log ("Increment pressed");
        let newV = n + 1;
        updatedN (newV);
    };

    const decrement = () => {
        console.log ("Decrement pressed");
         let newV = n - 1;
        updatedN (newV);
    };


    return (
        <div className = "p-4">
           <button 
           className = "rounded-md shadow-md bg-red-600 text-white font-bold active: opacity-50 cursor-pointer"
           style = {{
                width: "20 px",
                height: "20 px",
            }}
            onClick= {increment}
            >+</button>

           <span>{n}</span>

           <button
           className = "rounded-md shadow-md bg-red-600 text-white font-bold active: opacity-50 cursor-pointer"
           style = {{
                width: "20 px",
                height: "20 px",
            }}
            onClick={decrement}
            >-</button>
        </div>
    )
}

export default StateNumbers;