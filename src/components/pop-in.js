import { useState } from 'react';
import './pop-in.css';
import Ticket from './assets/Golden ticket.png';
import { FaTimes } from "react-icons/fa";

const PopIn = ({passFalse}) => {

    const [codeValue, setCodeValue] = useState("");

    const inputHandler = (event) => {
        setCodeValue(event.target.value)
    }

    const closeTicket = () => {
        passFalse()
    }
    
    return (  
        <div className="Pop-in">
            <div className="Pop-in-item">
                <FaTimes className='close' onClick={closeTicket}/>
                <h1>1ére Visite</h1>
                <figure>
                    <img src={Ticket} alt="ticket d'or"/>
                </figure>
                <h2>RENTREZ LE CODE</h2>
                <p>Ce ticket que vous pouvez retrouvez dans la pochette de votre album précommander vous permettra d'acceder aux loges des concerts.</p>
                <input type="text" name="code" value={codeValue} placeholder='Code' onChange={inputHandler}/>
                <button>Validez</button>
            </div>
        </div>
    );
}
 
export default PopIn;