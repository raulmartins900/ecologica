import React from "react"
import "./Cards.css"
import ReactCardFlip from "react-card-flip";

function Cards(props){
    const[isFlipped, setIsFlipped] = React.useState(false)
    function handleClick(){
        setIsFlipped(!isFlipped)
    }

    return(
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="flash-card" onClick={handleClick}>
                <div className="flash-card-header">Pergunta</div>
                <div className="flash-card-content">{props.frontSide}</div>
            </div>
            <div className="flash-card" onClick={handleClick}>
                <div className="flash-card-header">Resposta</div>
                <div className="flash-card-content">{props.backSide}</div>
            </div>
        </ReactCardFlip>
        
    )

}

export default Cards