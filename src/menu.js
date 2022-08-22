import React from "react";
import "./menu.css"
import Logo from "./logo.svg"

function Menu() {

    return(
        <nav>
            <img src={Logo} width="120" />
            <ul>
                <li className="current">Eventy</li>
                <li>Obserwowane</li>
                <li>Powiadomienia</li>
                <li>Więcej</li>
            </ul>
        </nav>
    );

}

export default Menu;