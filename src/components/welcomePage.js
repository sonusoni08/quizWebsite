import React from "react"
import "./welcomePage.css"

export default function WelcomePage(props) {
    return (
        <div className="login--page">
            <div className="contact-us">
                <form>
                    <input
                        placeholder="Name"
                        className="userInfoInput"
                        required="" type="text"
                        name="name"
                        value={props.name}
                        onChange={props.change}
                    />
                    <input
                        placeholder="Email"
                        className="userInfoInput"
                        name="email"
                        value={props.email}
                        onChange={props.change}
                        type="email" />
                    <input
                        name="phone"
                        className="userInfoInput"
                        value={props.phone}
                        onChange={props.change}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone" type="tel"
                    />
                    <button
                        type="button"
                        className="startQuizButton"
                        onClick={props.handleClick}
                    >Start Quiz</button>
                </form>
            </div>
        </div>
    )
}