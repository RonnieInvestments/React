import { useState } from 'react';

function SearchSection ({page}) {

    const [value, setValue] = useState ("");

    if (page !== "Find") {
        return null;
    }

    const handleChange = (e) => {
        setValue (e.target.value);
    };

    return (
        <div className = "flex justify-center my-4">
            <div className = "flex items-center">
                <input className = "py-0.5 px-2 border" onChange = {handleChange} />
                <button className= "rounded px-2 py-1 text-white bg-blue-500 cursor-pointer">
                    Search
                </button>
            </div>
        </div>
    )

}


export default SearchSection;