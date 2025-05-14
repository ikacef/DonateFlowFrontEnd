import "react";
import NavbarHome from "../display/NavbarHome.jsx";
import Footer from "../display/Footer.jsx";

/* Code fait uniquement par jayden*/
function Documentation() {


    return (

        <header className="documentation">

            <><NavbarHome/></>

            <p className="text-bg-info">DStack Technologique
                Frontend (React avec Axios) :
                React.js : Pour construire des interfaces dynamiques et réactives.
                Axios : Pour effectuer des requêtes HTTP afin de communiquer avec le backend (Spring Boot).
                React Router : Pour gérer la navigation dans l'application.
                CSS/Material-UI : Pour la mise en page et les composants d'interface utilisateur.
                Backend (Spring Boot) :
                Spring Boot : Framework Java pour créer une API RESTful robuste.
                Spring Security : Pour sécuriser l'application et gérer l'authentification et les autorisations des utilisateurs.
                Spring Data JPA : Pour interagir avec la base de données et gérer les entités (utilisateurs, campagnes, dons, DFC).
                PostgreSQL : Base de données relationnelle pour stocker les informations des utilisateurs, campagnes et transactions de DFC.
                Maven : Outil de gestion de dépendances et de construction pour le backend.
                Système de Crypto-Monnaie et Boutique
                Création du DonateFlow Coin (DFC) :

                Développement sur la blockchain Ethereum (ERC-20) ou Binance Smart Chain (BEP-20) pour assurer une large adoption.
                Possibilité de staking et récompenses supplémentaires pour les utilisateurs actifs.
                Smart contracts pour assurer la transparence des transactions et la gestion des récompenses.
                Gestion des DFC :

                API REST pour permettre aux utilisateurs de consulter, gagner et dépenser leurs DFC.
                Intégration d'un portefeuille crypto pour permettre le stockage et l'échange des DFC.
                Listage sur des plateformes d'échange comme Binance, Coinbase, et Uniswap pour permettre l'achat et la vente.
                Boutique en ligne :

                Interface de boutique construite avec React.js pour permettre aux utilisateurs de dépenser leurs DFC.
                Système de gestion de stock pour les articles disponibles à l'achat.
                Intégration d'une API pour traiter les commandes et débiter les DFC correspondants.
                Paiement :
                Stripe : Pour gérer les paiements sécurisés en monnaie fiduciaire et les paiements récurrents.
                Conversion de monnaie en DFC : Un pourcentage du don est converti en DFC (ex : 1$ donné = 10 DFC).
                Possibilité de payer directement en DFC pour soutenir une cause ou acheter un produit.
                Fonctionnalités à venir
                Améliorations pour les donateurs :

                Recommandations personnalisées pour les campagnes en fonction des dons précédents.
                Statistiques détaillées sur les dons effectués et leur impact.
                Ajout de bonus lors de certaines campagnes (ex : "Doublez vos DFC ce mois-ci !").
                Améliorations pour les créateurs de campagnes :

                Ajout de notifications pour tenir les donateurs informés des nouvelles mises à jour.
                Outils d'analyse avancés pour suivre la performance des campagnes.
                Expansion du système de Crypto-Monnaie (DFC) :

                Ajout de nouvelles manières de gagner des DFC (ex : engagement sur les réseaux sociaux, parrainage).
                Possibilité d'échanger des DFC contre des réductions sur des dons futurs.
                Introduction de partenariats pour permettre l'utilisation des DFC en dehors de la plateforme DonateFlow.</p>

            <><Footer/></>
        </header>

    )

}
export default Documentation