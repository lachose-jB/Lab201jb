import "./Actualité.css";
import Pink from "./assets/pink trou.png";
import Scene from './assets/pink iheart radio.jpg';
import Covid from './assets/pinkcovid.jpg';
import Holywood from './assets/pinkPP.jpg'
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { React } from "react";
import Carousel from "./Carousel.js";

const Actualité = () => {

    const itemsTab = [{
        image: Scene,
        text: "la chanteuse Pink a été auréolée du trophée de l’icône lors des iHeartRadio Music Awards"
    },
    {
        image: Covid,
        text: "Pink encore hospitalisée : la chanteuse craque !"
    },
    {
        image: Holywood,
        text: "Pink prend la pose avec ses deux enfants pour inaugurer son étoile d’Hollywood Boulevard"
    }]

    return (
        <section className="Actualité" id="Actualité">
            <Carousel Items={itemsTab}/>
            <div className="Pink_record">
                <figure>
                    <img src={Pink} alt="Pink"/>
                </figure>
                <article>
                    <p>Pink bat tous les records! Avec son Beautiful Trauma World Tour</p>
                    <button>Plus de détails</button>
                </article>
            </div>
            <div className="social">
                <h3>Rejoignez Pink sur les réseaux </h3>
                <article>
                    <FaInstagram className="insta"/>
                    <FaTwitter className="twitter"/>
                    <FaFacebookSquare className="fb"/>
                </article>
            </div>
        </section>
    );
}
 
export default Actualité;