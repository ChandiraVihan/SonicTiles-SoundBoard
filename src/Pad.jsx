import { useState } from "react"
import "./App.css"

function Pad(props) {


    return (
 <button style={{ backgroundColor: props.color }}
    className ={props.on ? "on" : ""}
    onClick = {() => props.toggle(props.id)}
 ></button>
    )
}

export default Pad; 