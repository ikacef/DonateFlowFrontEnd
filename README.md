# DonateFlow

DonateFlow est une plateforme de collecte de fonds qui permet aux donateurs de soutenir des causes tout en gagnant des points, des badges et en suivant l'impact de leurs contributions. Les donateurs peuvent aussi interagir avec les créateurs de campagnes et aider à accroître la visibilité des projets.

---

## Fonctionnalités

### Pour les Donateurs :
- **Système de Réputation** :
  - Gagnez des points pour vos dons, partages et interactions.
  - Débloquez des badges et récompenses basées sur votre engagement.
  - Suivez l'impact de vos dons via des mises à jour régulières (ex : "Vous avez aidé 200 personnes à recevoir des repas").

- **Découverte des Campagnes** :
  - Recherchez des campagnes par catégorie, région, ou cause.
  - Recommandations personnalisées basées sur les dons précédents.

- **Dons** :
  - Effectuez des dons ponctuels ou récurrents.
  - Possibilité de faire des dons anonymes ou publics.
  - Suivi transparent des fonds collectés.

- **Badges et Classements** :
  - Gagnez des badges en fonction de vos actions (par exemple, « Top Donateur », « Champion de [Cause] »).
  - Consultez le classement des meilleurs donateurs.

### Pour les Créateurs de Campagnes :
- **Création de Campagnes** :
  - Créez facilement des campagnes avec description, images, vidéos et objectifs financiers.
  - Mettez à jour les campagnes en temps réel pour informer les donateurs.

- **Suivi de l’Impact** :
  - Publiez des mises à jour transparentes sur l'utilisation des fonds collectés.

---

## Stack Technologique

### Frontend (React avec Axios) :
- **React.js** : Pour construire des interfaces dynamiques et réactives.
- **Axios** : Pour effectuer des requêtes HTTP afin de communiquer avec le backend (Spring Boot).
- **React Router** : Pour gérer la navigation dans l'application.
- **CSS/Material-UI** : Pour la mise en page et les composants d'interface utilisateur.

### Backend (Spring Boot) :
- **Spring Boot** : Framework Java pour créer une API RESTful robuste.
- **Spring Security** : Pour sécuriser l'application et gérer l'authentification et les autorisations des utilisateurs.
- **Spring Data JPA** : Pour interagir avec la base de données et gérer les entités (utilisateurs, campagnes, dons).
- **PostgreSQL** : Base de données relationnelle pour stocker les informations des utilisateurs et des campagnes.
- **Maven** : Outil de gestion de dépendances et de construction pour le backend.

### Paiement :
- **Stripe** : Pour gérer les paiements sécurisés, les dons et les paiements récurrents.

---

## Fonctionnalités à venir

1. **Améliorations pour les donateurs** :
   - Recommandations personnalisées pour les campagnes en fonction des dons précédents.
   - Statistiques détaillées sur les dons effectués et leur impact.

2. **Améliorations pour les créateurs de campagnes** :
   - Ajout de notifications pour tenir les donateurs informés des nouvelles mises à jour.
   - Outils d'analyse avancés pour suivre la performance des campagnes.

