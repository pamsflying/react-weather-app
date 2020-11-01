import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
    return (
    <div className="App">
        <div className="container">
            <Weather defaultCity="Chicago" />
            <footer>
                    <a href="https://github.com/pamsflying/react-weather-app.git" target="_blank" rel="noreferrer"> Open-source code</a> by Pam Miller. Hosted by <a href=
                    "https://peaceful-boyd-df51b2.netlify.app" target="_blank" rel="noreferrer"> Netlify</a>.
            </footer>
        </div>
    </div>
 );
}

