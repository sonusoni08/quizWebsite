import React from "react"

export default function Option(props) {

    console.log(props)
    let color = "transparent"
    if (props.isSubmitted) {
        if (props.selected) {
            if (props.data === props.answer) {
                color = "#F4D03F"
            }
            else {
                color = "#E42217"
            }
        }
        else if (props.data === props.answer) {
            color = "#0BDA51"
        }
    }
    const styles = {
        backgroundColor: color
    }

    const point = String.fromCharCode("a".charCodeAt(0) + props.id);

    return (
        <button
            style={styles}
            onClick={() => props.handleClick(props.id)}
            className="optionContainer"> {point + ") " + props.data} </button>
    )
}