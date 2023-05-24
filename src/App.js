import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css'
export default function App() {
    const [darkMode, setDark] = React.useState(false);
    function toggleDarkMode(){
        setDark(prev=>!prev);
    }
    return (
        <div className="container">
            <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}