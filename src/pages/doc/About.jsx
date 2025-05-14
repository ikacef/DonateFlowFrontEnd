import "react";
import NavbarHome from "../display/NavbarHome.jsx";
import Footer from "../display/Footer.jsx";

/* Code fait uniquement par jayden*/
function About() {


    return (

        <header className="about">

            <><NavbarHome/></>

            <p className="text-bg-info">DonateFlow est une plateforme de collecte de fonds qui permet aux donateurs
                de soutenir des causes tout en gagnant des points, des badges et en suivant l'impact de leurs contributions. Les donateurs peuvent
                aussi interagir avec les créateurs de campagnes et aider à accroître la visibilité des projets.</p>

            <><Footer/></>
        </header>

    )

}
export default About