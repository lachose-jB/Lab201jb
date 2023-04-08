import React from 'react';
import './ArtisteInfo.css'
import photo1 from '../assets/img1.png';
import photo2 from '../assets/img2.png';
import photo3 from '../assets/img3.png';

const ArtisteInfo = () => {
    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
    return (
        <main className="Main" id="Artiste">
            <section className="sect1 reveal">
                <article className="sect1 reveal fade-left" >
                    <h2>
                        Qui est Pink?
                    </h2>
                    <p>
                        PINK de son vrai nom Alecia Beth Moore est née le 8 septembre 1979 à Doleystown en Pennsylvanie,
                        par son style atypique et sa musique orienté Pop, rock et RnB, 
                        la célébrée chanteuse et actrice est l'une des personnalités les plus affluentes du monde de la musique.
                    </p>
                </article>
                <figure>
                    <img src={photo1} alt="I1"/>
                </figure>
            </section>
            <section className="sect2 reveal ">
                <figure className="sect2 reveal fade-right ">
                    <img src={photo3} alt="I2"/>
                </figure>
                <article>
                    <h2>
                        Le commencement
                    </h2>
                    <p>
                        Beth a commencé la musique à 15 ans à travers le groupe de musique de son lycée qu'elle a intégré en
                        tant que choriste mais elle commença réellement à 20 ans où elle se fera remarquer et passera par
                        plusieurs groupes de musique avant de se faire connaître du grand public lors de sa reprise de la
                        chanson "lady marmelade" du film "Moulin Rouge " un an après avoir sorti son première album "Can't
                        Take Me Home".
                    </p>
                </article>
            </section>
            <section className="sect3 reveal fade-left">
                <article>
                    <h2>Palmarés</h2>
                    <p>
                        Alecia est une chanteuse très précoce avec notamment plus de 60 millions d'albums et 75 millions 
                        singles vendus ainsi que 3 Grammy Awards en 2014, la chanteuse ne s'arrête plus. Elle a annoncé la
                        sortie de son album "TrustFall" ainsi que sa tournée. Vous ne voulez pas rater cet évènement alors
                        n'hésitez plus !
                    </p>
                    <buttongroupe className="Btn_Re">
                        <button className="preCom">Précommander</button>
                        <button className="reserv">Reserver</button>
                    </buttongroupe>
                </article>
                <figure>
                    <img src={photo2} alt="I3"/>
                </figure>
            </section>
        </main>
    );
}

export default ArtisteInfo;
