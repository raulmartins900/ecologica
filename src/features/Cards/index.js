import React from "react"
import "./Cards.css"

function Cards(props){
    const[text,setText] = React.useState(props.frontSide)
    const[turn, setTurn] = React.useState(0)

    function handleClick(){
        if(turn === 0){
            setText(props.backSide)
            setTurn(1)
        } else {
            setText(props.frontSide)
            setTurn(0)
        }
    }

    return(
        <div className="flash-card" onClick={handleClick}>
            <div className="flash-card-header">{props.title}</div>
            <div className="flash-card-content">{text}</div>
        </div>
    )

}

export default Cards