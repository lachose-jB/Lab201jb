import React from 'react';
import './PageFooter.css';
import logo from '../assets/logofinalblanc.png';
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
        <figure> <img alt="logo" src={logo}/></figure>
        <ul className="navbar__LinksF">
                <li className="navbar__itemF"><span className=".captF">Artiste</span></li>
                <li className="navbar__itemF"><span className=".captF">Ticket d'Or</span></li>
                <li className="navbar__itemF"><span className=".captF">Actualités</span></li>
                <li className="navbar__itemF"><span className=".captF">Album</span></li>
            </ul>
        <article className='social_icoF'>
            <FaInstagram className="instag iconf"/>
            <FaTwitter className="twitters iconf"/>
            <FaFacebookSquare className="fbs iconf"/>
        </article>
        <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
  );
};
export default Footer