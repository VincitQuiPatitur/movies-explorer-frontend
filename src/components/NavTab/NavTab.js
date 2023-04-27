import Navigation from "../Navigation/Navigation";
import ProfileButton from "../ProfileButton/ProfileButton";
import React from "react";


function NavTab(props) {
    return (
        <div id='navtab' className={`navtab ${props.isActive ? `navtab_active` : ``}`}>
            <nav className="navtab__content">
                <Navigation
                    closeNavTab={props.closeNavTab}
                />
                <ProfileButton
                    closeNavTab={props.closeNavTab}
                />
            </nav>
        </div>
    );
}

export default NavTab;