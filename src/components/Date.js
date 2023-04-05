import "./Date.css";
import React from "react";
import { useState, useEffect } from "react";
import _ from '../firebase-usefull/init';
import databaseService from '../firebase-usefull/database';

const Date = () => {

    const [datesTab, setDatesTab] = useState([]);
 
    useEffect( () => {
    databaseService.readData("dates", (data) => {
      let tab = [];
      for(const key in data){
        const newdate = {...data[key], id: key}
        tab.push(newdate)
      }
      setDatesTab(tab)
    })
  },[])

    let date1 = "";

    const reverseDate = (d) => {
        date1 = d;
        date1 = date1.split("-");
        for(let n = 0; n < date1.length; n++){
            if( n == 2){
                switch(date1[1]){
                    case '01':
                    date1[1] = 'Janvier';
                        break;
                    case '02':
                    date1[1] = 'Février';
                        break;
                    case '03':
                    date1[1] = 'Mars';
                        break;
                    case '04':
                    date1[1] = 'Avril';
                        break;
                    case '05':
                    date1[1] = 'Mai';
                        break;
                    case '06':
                    date1[1] = 'Juin';
                        break;
                    case '07':
                    date1[1] = 'Juillet';
                        break;
                    case '08':
                    date1[1] = 'Août';
                        break;
                    case '09':
                    date1[1] = 'Septembre';
                        break;
                    case '10':
                    date1[1] = 'Novembre';
                        break;
                    case '11':
                    date1[1] = 'Octobre';
                        break;
                    case '12':
                    date1[1] = 'Décembre';
                        break;
                }
            }
            
        }
        date1 = date1.reverse();
        date1 = date1.join(" ");
        date1 = date1.toString();
        console.log(date1)
        return date1
    }

    return ( 
        <div className="date">
            <h2>Tournée trustfall</h2>
            {datesTab.map((date) => {
                return(

                    <div className="date-container" key={date.id}>

                        <div className="date-item">

                            <div className="circle">
                                {reverseDate(date.date)}
                            </div>

                            <article>
                                <h3>{date.salle}</h3>
                                <p>{date.adresse}</p>
                                <p>{date.ville}</p>
                            </article>

                            <span>Sold out !</span>
                        </div>
                        
                        <button>reserver</button>

                    </div>
                )
            })}
            
        </div>
    );
}
 
export default Date;