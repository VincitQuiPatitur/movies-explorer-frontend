import Navigation from "../Navigation/Navigation";
import ProfileButton from "../ProfileButton/ProfileButton";
import React from "react";


function NavTab(props) {
    return (
        <div id='navtab' className={`navtab${props.isActive ? `_active` : ``}`}>
            <nav className="navtab__content">
                <Navigation/>
                <ProfileButton />
            </nav>
        </div>
    );
}

export default NavTab;