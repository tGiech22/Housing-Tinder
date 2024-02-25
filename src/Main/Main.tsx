
import MainLogo from "./MainLogo";
import React, { useState } from "react";
import MainLogin from "./MainLogin";
import MainSignup from "./MainSignup";

function Main() {
    const [showSection1, setShowSection1] = useState(true);

    const toggleSections = () => {
        setShowSection1((prevState) => !prevState);
    };
    return (
        <div className="main-container">
            <div className="main-logo">
                <MainLogo />
            </div>
            {showSection1 ? (
              <div className="button-main-container">
              <button className="main-button" onClick={toggleSections}>Login</button>
              <button className="main-button" onClick={toggleSections} style={{backgroundColor:"#FF89A9"}}>Sign Up</button>
            </div>
            ) : (
                <MainSignup/>
            )}
        </div>
    )
}

export default Main;