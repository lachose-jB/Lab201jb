import React, {useState} from "react";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import './navbar.css'
import logo from './assets/logofinalblanc.png';
import Actu from './Actualité';
import album from './Album';
import Artiste from './artisteInfo/ArtisteInfo';

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '100vh'}} className="header" id="header">
            <nav>
                <figure> <a href="#header"><img alt="logo" src={logo}/></a></figure>
                <ul className="navbar__Link">
                    <li className="navbar__item"><a href='#Artiste' className=".capt">Artiste</a></li>
                    <li className="navbar__item"><a href='#Golden' className=".capt">Ticket d'Or</a></li>
                    <li className="navbar__item"><a href='#Actualité' className=".capt">Actualités</a></li>
                    <li className="navbar__item"><a href='#Album' className=".capt">Album</a></li>
                </ul>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
            <ul className="navbar__Links">
                <li className="navbar__item"><span className=".capt">Artiste</span></li>
                <li className="navbar__item"><span className=".capt">Ticket d'Or</span></li>
                <li className="navbar__item"><span className=".capt">Actualités</span></li>
                <li className="navbar__item"><span className=".capt">Album</span></li>
            </ul>
            <section className='socialNav'>
                <FaInstagram className="instagN iconv"/>
                <FaTwitter className="twittersN iconv"/>
                <FaFacebookSquare className="fbsN iconv"/>
            </section>
            </div>
            <article>
                <h1 className="UpCase">trustfall</h1>
                <buttongroupe className="action1">
                    <button className="Commd" >Précommander</button>
                    <button className="TikD">Ticket d'Or</button>
                </buttongroupe>
            </article>
        </div>
    )
}

export default Navbar