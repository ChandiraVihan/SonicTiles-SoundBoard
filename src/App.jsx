import React, { useState, useRef } from "react" // Fixed: useRef is camelCase
import pads from "./pads"
import Pad from "./Pad.jsx"
import "./App.css"

function App() {
    const [padArray, setPadArray] = useState(pads)
    const audioRef = useRef(null)

    function toggle(id) {
        const clickedPad = padArray.find(pad => pad.id === id)
        
        // Check if we are turning the pad ON or OFF
        const isTurningOff = clickedPad.on 

        if (!isTurningOff && clickedPad.sound) {
            // Stop previous sound
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
            }
            // Play new sound
            audioRef.current = new Audio(clickedPad.sound)
            audioRef.current.play()
        } else if (isTurningOff) {
            // Optional: Stop sound if user clicks the active pad to turn it off
            audioRef.current?.pause()
        }

        setPadArray(prevPads => prevPads.map(item => {
            // Radio button logic: only the clicked one can be true, others false
            return item.id === id ? { ...item, on: !item.on } : { ...item, on: false }
        }))
    }

    const buttonElements = padArray.map(pad => (
        <Pad 
            toggle={toggle} 
            id={pad.id} 
            key={pad.id} 
            color={pad.color} 
            on={pad.on} 
        />
    ))

    return (
        <>
            <h1>SonicTiles</h1>
            <main>
                <div className="pad-container">
                    {buttonElements}
                </div>
            </main>
        </>
    )
}

export default App;