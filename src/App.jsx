import React, { useState } from "react"
import pads from "./pads"
import Pad from "./Pad.jsx"
import "./App.css"

function App() {

    const [padArray, setPadArray] = useState(pads)


    // function toggle(id) {
    //     setPadArray(prevPads => prevPads.map(item => {
    //       return item.id === id ? {...item, on : !item.on} : item   //this function flips the sdate of only the clicked pad
    //     }))
    // }

    function toggle(id) {
    setPadArray(prevPads => prevPads.map(item => {
        // If it's the item we clicked, set 'on' to true (or !item.on if you want to be able to turn it back off)
        // If it's NOT the item we clicked, set 'on' to false
        return item.id === id ? { ...item, on: !item.on } : { ...item, on: false }
    }))
}


    const buttonElements = padArray.map (pads => (
        <Pad toggle = {toggle} id={pads.id} key = {pads.id} color={pads.color} on={pads.on} />))

    return (
        <>
          <h1> SonicTiles</h1>
          <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
        </>
    )
}

export default App;