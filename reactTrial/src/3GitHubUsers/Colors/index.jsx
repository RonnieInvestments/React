import { useState } from "react";
import ColorList from "./ColorLIst";
import NewColor from "./NewColor";


function Colors () {
    const [colors, setColors] = useState (["blue", "black", "green"]);
    const [activeColor, setActiveColor] = useState ("blue");
    
    return (
        <div>
            <NewColor colors={colors} setColors={setColors}/>
            <ColorList colors = {colors}/>
        </div>
    )
}

export default Colors;