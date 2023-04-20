import headerLogo from "../../images/logo-header.svg";
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to='/'>
            <img src={headerLogo} alt="Логотип в виде зеленого круга с белой фигуркой" className="logo" />
        </Link>
    );
}

export default Logo;