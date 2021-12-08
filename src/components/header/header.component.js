import { Link } from "react-router-dom";
import "./header.styles.scss"

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src="logo.jpg" alt="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="#">PROFILE</Link>
                <Link className="option" to="#">ABOUT</Link>
            </div>
        </div>
         
    )
}

export default Header;