import React from "react";
import Promo from "../Promo/Promo";
import NavBar from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";

function Main() {
    return (
        <main className='main'>
            <Promo/>
            <AboutProject/>
            <NavBar/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
    );
}

export default Main;