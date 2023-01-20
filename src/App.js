import './App.css';
import React, { useState } from "react"
import WelcomePage from './components/welcomePage'
import Quiz from "./components/Quiz"
import NavBar from './components/navBar';

function App() {

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [currentPage, setCurrentPage] = useState(true);

  function userInfoInput() {
    setCurrentPage(prev => !prev)
  }

  function handleChange(event) {
    const { name, value, type } = event.target
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div>
      {currentPage && <WelcomePage
        name={userInfo.name}
        email={userInfo.email}
        phone={userInfo.phone}
        handleClick={userInfoInput}
        change={handleChange}
      />}
      {!currentPage && <NavBar
        name={userInfo.name}
        email={userInfo.email}
        phone={userInfo.phone}
      />}
      {!currentPage && <Quiz />}
    </div>
  )
}

export default App;
