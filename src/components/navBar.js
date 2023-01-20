import React from "react"
import "./navBar.css"

export default function NavBar(props) {
    return (
        <div className="navbar">
            <span><h3>Name : {props.name}</h3></span>
            <span><h3>Email : {props.email}</h3></span>
            <span><h3>Phone : {props.phone}</h3></span>
        </div>
    )
}