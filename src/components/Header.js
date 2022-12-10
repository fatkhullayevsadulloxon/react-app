import PixerLogo from "../assets/img/pixer-logo.svg"
import "./header.css"

const Header = () => {
    return (
       <header className="header">
            <div className="container">
                <div className="header__container">
                    <a href="#">
                        <img src={PixerLogo} alt="" />
                    </a>
                    <nav className="sitenav">
                        <ul className="list">
                            <li className="item">
                                <a className="link" href="#">Bosh sahifa</a>
                            </li>
                            <li className="item">
                                <a className="link" href="#">Xizmatlar</a>
                            </li>
                            <li className="item">
                                <a className="link" href="#">Portfolio</a>
                            </li>
                            <li className="item">
                                <a className="link" href="#">Jamoa</a>
                            </li>
                            <li className="item">
                                <a className="link" href="#">Blog</a>
                            </li>
                            <li className="item">
                                <a className="link" href="#">Kontaktlar</a>
                            </li>
                            <li className="item">
                                <a className="header__btn" href="tel:+998909213711">+998 90 921 37 11</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
       </header>
    )
}

export default Header