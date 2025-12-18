import { useState } from "react"
import "./App.css"

function Pad(props) {

    const [isOn, setIsOn] = useState(props.on);

    function toggle() {
        setIsOn(prevIsOn => !prevIsOn);
    }

    return (
 <button style={{ backgroundColor: props.color }}
    className ={isOn ? "on" : ""} 
    onClick={toggle}
 ></button>
    )
}

export default Pad; 