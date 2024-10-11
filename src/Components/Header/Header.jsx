import React from "react";
import "./HeaderStyle.scss";
import Logo from "/src/assets/img/logo.png"
function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo da página"/>
            <nav>
                <ul>
                    <li>Filmes</li>
                    <li>Séries</li>
                    <li>Saiba mais</li>
                </ul>
            </nav>

            <button>Baixe nosso app</button>
        </header>
    )
}
export default Header