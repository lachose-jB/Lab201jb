import "./Album.css";
import Cover from "../assets/cover3.png";
import Ticket from "../assets/Golden ticket.png";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect } from "react";


const Album = () => {
    
    useEffect( () => {
        fetch("https://api.deezer.com/search?q=trustfall").then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    },[])

    return ( 
        <section className="Album">
            {/* <img src={Blob} alt="blob" className="blob"/> */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob">
                <path fill="#FFA8D9" d="M56.7,-55.7C67.5,-45.9,66.2,-22.9,58.9,-7.3C51.6,8.4,38.3,16.7,27.5,33.2C16.7,49.6,8.4,74.1,-3.2,77.3C-14.8,80.5,-29.5,62.4,-44.8,46C-60.1,29.5,-75.9,14.8,-70.1,5.7C-64.4,-3.3,-37.2,-6.6,-21.9,-16.4C-6.6,-26.2,-3.3,-42.4,9.8,-52.2C22.9,-62,45.9,-65.4,56.7,-55.7Z" transform="translate(100 100)"/>
            </svg>
            <figure className="cover">
             <img src={Cover} alt="Cover d'album"/>
            </figure>
            <ul className="tracklist">
                <li><strong>01.</strong>When I get there<FaPlayCircle className="logo"/></li>
                <li><strong>02.</strong>TrustFall<FaPlayCircle className="logo"/></li>
                <li><strong>03.</strong>Turbulence<FaPlayCircle className="logo"/></li>
                <li><strong>04.</strong>Long way to go</li>
                <li><strong>05.</strong>Kid's in love</li>
                <li><strong>06.</strong>Never gonna not dance again</li>
                <li><strong>07.</strong>Runaway</li>
                <li><strong>08.</strong>Last call</li>
                <li><strong>09.</strong>Hate me</li>
                <li><strong>10.</strong>Lost cause</li>
                <li><strong>11.</strong>Feel something</li>
                <li><strong>12.</strong>Just say I'm sorry</li>
            </ul>

            <p>Précommander l'album et vous aurai peut-être la chance de recevoir <span>le Ticket d'or</span> et ainsi avoir accès à des surprises !</p>

            <figure className="ticket-or">
                <img src={Ticket} alt="ticket d'or"/>
            </figure>

        </section>
    );
}
 
export default Album;