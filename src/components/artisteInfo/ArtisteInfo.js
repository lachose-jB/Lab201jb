import React from 'react';
import './ArtisteInfo.css'
import photo1 from '../assets/img1.png';
import photo2 from '../assets/img2.png';
import photo3 from '../assets/img3.png';

const ArtisteInfo = () => {
    return (
        <main className="Main">
            <section className="sect1">
                <article>
                    <h2>
                        Qui est Pink?
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum mollitia ipsam vel ut praesentium, facilis unde at illum 
                        laboriosam similique quisquam exercitationem possimus voluptatem 
                        sunt, animi excepturi perspiciatis impedit assumenda.
                    </p>
                </article>
                <figure>
                    <img src={photo1} alt="I1"/>
                </figure>
            </section>
            <section className="sect2">
                <figure>
                    <img src={photo3} alt="I2"/>
                </figure>
                <article>
                    <h2>
                        Le commencement
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum mollitia ipsam vel ut praesentium, facilis unde at illum 
                        laboriosam similique quisquam exercitationem possimus voluptatem 
                        sunt, animi excepturi perspiciatis impedit assumenda.
                    </p>
                </article>
            </section>
            <section className="sect3">
                <article>
                    <h2>Palmarés</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum mollitia ipsam vel ut praesentium, facilis unde at illum 
                        laboriosam similique quisquam exercitationem possimus voluptatem 
                        sunt, animi excepturi perspiciatis impedit assumenda.
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
