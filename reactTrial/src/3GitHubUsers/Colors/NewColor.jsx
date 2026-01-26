import { useState } from "react";

function NewColor ({colors, setColors}) {
    const [value, setValue] = useState ("");
    
    const handleChange = (e) => {
        console.log (e.target.value);
        setValue (e.target.value);
    };

    const addColor = () => {
        let newColor = [...colors];
        newColor.push (value);
        setColors (newColor);
        setValue ("");
    }

    return (
        <div className = "flex">
            <input value = {value} className = "border" onChange={handleChange}/>
            <button 
            onClick = {addColor}
            className = "py-0.5 px-2 rounded-md bg-blue-500 text-white active:opacity-50 shadow-md">
                Add
            </button>
        </div>
    )
}

export default NewColor;