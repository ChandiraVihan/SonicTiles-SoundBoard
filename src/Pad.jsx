import "./App.css"

function Pad(props) {
    return (
 <button style={{ backgroundColor: props.color }}
 className ={props.on ? "on" : ""}
 ></button>
    )
}

export default Pad; 