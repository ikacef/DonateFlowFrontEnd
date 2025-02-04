# DonateFlow

DonateFlow est une plateforme de collecte de fonds qui permet aux donateurs de soutenir des causes tout en gagnant des points, des badges et en suivant l'impact de leurs contributions. Les donateurs peuvent aussi interagir avec les créateurs de campagnes et aider à accroître la visibilité des projets.

---

## Fonctionnalités

### Pour les Donateurs :
- **Système de Réputation** :
  - Gagnez des points pour vos dons, partages et interactions.
  - Débloquez des badges et récompenses basées sur votre engagement.
  - Suivez l'impact de vos dons via des mises à jour régulières (ex : "Vous avez aidé 200 personnes à recevoir des repas").

- **Système de Crypto-Monnaie et Boutique** :
  - Lancement d'une **crypto-monnaie native (DonateFlow Coin - DFC)**, listée sur plusieurs plateformes d'échange de crypto-monnaies.
  - Chaque don effectué permet de gagner des **DFC**, utilisables dans la boutique et échangeables sur le marché des cryptos.
  - Intégration d'un portefeuille intégré pour stocker, transférer et échanger des DFC.
  - Affichage du solde en temps réel et historique des transactions.
  - Possibilité d'utiliser les DFC pour acheter des produits ou services dans la boutique.

- **Découverte des Campagnes** :
  - Recherchez des campagnes par catégorie, région, ou cause.
  - Recommandations personnalisées basées sur les dons précédents.

- **Dons** :
  - Effectuez des dons ponctuels ou récurrents.
  - Possibilité de faire des dons anonymes ou publics.
  - Suivi transparent des fonds collectés.

- **Badges et Classements** :
  - Gagnez des badges en fonction de vos actions (par exemple, "Top Donateur", "Champion de [Cause]").
  - Consultez le classement des meilleurs donateurs.

### Pour les Créateurs de Campagnes :
- **Création de Campagnes** :
  - Créez facilement des campagnes avec description, images, vidéos et objectifs financiers.
  - Mettez à jour les campagnes en temps réel pour informer les donateurs.

- **Suivi de l’Impact** :
  - Publiez des mises à jour transparentes sur l'utilisation des fonds collectés.

---

## Stack Technologique

### **Frontend (React avec Axios)** :
- **React.js** : Pour construire des interfaces dynamiques et réactives.
- **Axios** : Pour effectuer des requêtes HTTP afin de communiquer avec le backend (Spring Boot).
- **React Router** : Pour gérer la navigation dans l'application.
- **CSS/Material-UI** : Pour la mise en page et les composants d'interface utilisateur.

### **Backend (Spring Boot)** :
- **Spring Boot** : Framework Java pour créer une API RESTful robuste.
- **Spring Security** : Pour sécuriser l'application et gérer l'authentification et les autorisations des utilisateurs.
- **Spring Data JPA** : Pour interagir avec la base de données et gérer les entités (utilisateurs, campagnes, dons, DFC).
- **PostgreSQL** : Base de données relationnelle pour stocker les informations des utilisateurs, campagnes et transactions de DFC.
- **Maven** : Outil de gestion de dépendances et de construction pour le backend.

### **Système de Crypto-Monnaie et Boutique**
- **Création du DonateFlow Coin (DFC)** :
  - Développement sur la blockchain Ethereum (ERC-20) ou Binance Smart Chain (BEP-20) pour assurer une large adoption.
  - Possibilité de staking et récompenses supplémentaires pour les utilisateurs actifs.
  - Smart contracts pour assurer la transparence des transactions et la gestion des récompenses.

- **Gestion des DFC** :
  - API REST pour permettre aux utilisateurs de consulter, gagner et dépenser leurs DFC.
  - Intégration d'un portefeuille crypto pour permettre le stockage et l'échange des DFC.
  - Listage sur des plateformes d'échange comme Binance, Coinbase, et Uniswap pour permettre l'achat et la vente.

- **Boutique en ligne** :
  - Interface de boutique construite avec **React.js** pour permettre aux utilisateurs de dépenser leurs DFC.
  - Système de gestion de stock pour les articles disponibles à l'achat.
  - Intégration d'une API pour traiter les commandes et débiter les DFC correspondants.

### **Paiement** :
- **Stripe** : Pour gérer les paiements sécurisés en monnaie fiduciaire et les paiements récurrents.
- **Conversion de monnaie en DFC** : Un pourcentage du don est converti en DFC (ex : 1$ donné = 10 DFC).
- **Possibilité de payer directement en DFC** pour soutenir une cause ou acheter un produit.

---

## Fonctionnalités à venir

1. **Améliorations pour les donateurs** :
   - Recommandations personnalisées pour les campagnes en fonction des dons précédents.
   - Statistiques détaillées sur les dons effectués et leur impact.
   - Ajout de bonus lors de certaines campagnes (ex : "Doublez vos DFC ce mois-ci !").

2. **Améliorations pour les créateurs de campagnes** :
   - Ajout de notifications pour tenir les donateurs informés des nouvelles mises à jour.
   - Outils d'analyse avancés pour suivre la performance des campagnes.

3. **Expansion du système de Crypto-Monnaie (DFC)** :
   - Ajout de nouvelles manières de gagner des DFC (ex : engagement sur les réseaux sociaux, parrainage).
   - Possibilité d'échanger des DFC contre des réductions sur des dons futurs.
   - Introduction de partenariats pour permettre l'utilisation des DFC en dehors de la plateforme DonateFlow.

