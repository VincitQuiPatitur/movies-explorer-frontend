import headerLogo from "../../images/logo-header.svg";
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link className="logo" to='/'>
            <img src={headerLogo} alt="Логотип в виде зеленого круга с белой фигуркой" className="logo__image"/>
        </Link>
    );
}

export default Logo;