# Oeuficient — Gestion intelligente de couvoir

Oeuficient est une application web full-stack destinée à faciliter la gestion des activités d’un couvoir avicole. Elle vise à centraliser le suivi des lots d’œufs, des espèces, des incubations et des éclosions, tout en améliorant la traçabilité des opérations et la consultation des données d’exploitation.

Le projet associe une interface web développée avec React et TypeScript à une API REST construite avec Java et Spring Boot, reliée à une base de données PostgreSQL.

## Sommaire

- [Présentation](#-présentation)
- [Fonctionnalités](#-fonctionnalités)
- [Tableau de bord analytique](#-tableau-de-bord-analytique)
- [Technologies](#-technologies)
- [Architecture du projet](#-architecture-du-projet)
- [Prérequis](#-prérequis)
- [Installation et configuration](#-installation-et-configuration)
- [Lancement de l'application](#-lancement-de-lapplication)
- [API REST](#-api-rest)
- [Sécurité](#-sécurité)
- [Tests et qualité](#-tests-et-qualité)
- [Améliorations prévues](#-améliorations-prévues)

## Présentation

La gestion d’un couvoir nécessite un suivi rigoureux des œufs depuis leur réception jusqu’à leur incubation et leur éclosion. Les informations relatives aux lots, aux équipements, aux quantités et aux dates doivent rester cohérentes tout au long du processus.

Oeuficient a pour objectif de faciliter ce suivi grâce à une application centralisée qui permet de :

- Organiser les données relatives aux lots d’œufs et aux espèces.
- Gérer les équipements et les différentes zones du couvoir.
- Enregistrer et suivre les opérations d’incubation et d’éclosion.
- Contrôler les accès selon les rôles des utilisateurs.
- Consulter les informations de l’exploitation à travers une interface web et un tableau de bord analytique.

## Fonctionnalités

### Gestion des données avicoles

- Gestion des espèces et de leurs durées d’incubation et d’éclosion.
- Gestion des lots d’œufs et de leurs quantités.
- Suivi des incubations et des éclosions.
- Gestion des couvoirs, des chariots et des éclosoirs.
- Association des données opérationnelles aux espèces et aux lots concernés.

### Suivi des cycles d'incubation et d'éclosion

Le système prend en compte les durées définies pour chaque espèce afin de contribuer au calcul des dates prévisionnelles du cycle.

L’objectif métier est de faciliter le suivi des différentes étapes :

1. Enregistrement du lot d’œufs.
2. Mise en incubation et suivi de la quantité placée.
3. Détermination de la date prévisionnelle de transfert en fonction de la durée d’incubation.
4. Suivi de l’éclosion et estimation de la date correspondante selon l’espèce.

La cohérence de ces règles, notamment le lien entre une incubation précise et son éclosion, fait partie des points à valider au fil du développement.

### Gestion des utilisateurs

- Authentification des utilisateurs.
- Gestion des rôles et des sections.
- Protection des routes de l’interface.
- Contrôle des accès aux ressources du backend selon les autorisations configurées.

### Interface web

Le frontend propose notamment :

- Une page de connexion.
- Des espaces de travail adaptés aux utilisateurs.
- Des interfaces de suivi des opérations.
- Un tableau de bord administratif.
- Un tableau de bord analytique destiné à faciliter la consultation des indicateurs de l’activité.

## Tableau de bord analytique

Oeuficient intègre un dashboard analytique dans son frontend afin de donner une vue synthétique des informations de gestion du couvoir.

Ce tableau de bord constitue un point d’entrée pour visualiser les données utiles au suivi de l’activité et faciliter la prise de décision.

Les indicateurs et graphiques affichés doivent être interprétés en fonction des données effectivement disponibles et des fonctionnalités reliées au backend dans la version utilisée.

## Technologies

### Frontend

| Technologie | Utilisation |
|---|---|
| React 19 | Construction de l’interface utilisateur |
| TypeScript | Typage statique du code |
| Vite | Serveur de développement et build |
| React Router | Navigation entre les pages |
| Tailwind CSS | Mise en forme de l’interface |
| Framer Motion | Animations et interactions visuelles |
| Lucide React | Icônes |

### Backend

| Technologie | Utilisation |
|---|---|
| Java 17 | Langage du backend |
| Spring Boot 4.0.2 | Structure de l’application |
| Spring Web MVC | Exposition des API REST |
| Spring Data JPA | Persistance et accès aux données |
| Spring Security | Sécurisation des ressources |
| Jakarta Bean Validation | Validation des données entrantes |
| JJWT 0.11.5 | Gestion des jetons JWT |
| Lombok | Réduction du code répétitif |
| Maven | Gestion des dépendances et construction |

### Base de données et outils

- PostgreSQL : stockage des données.
- Git et GitHub : gestion du code source et du versionnement.
- Postman : tests manuels des endpoints de l’API.

## Architecture du projet

Le dépôt est organisé en deux applications principales :

```text
Oeuficient/
├── Frontend-App/
│   ├── src/
│   │   ├── components/
│   │   ├── middleware/
│   │   ├── pages/
│   │   └── services/
│   ├── package.json
│   └── ...
│
├── Backend-App/
│   └── couvoir-oeuficient/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/
│       │   │   └── resources/
│       │   └── test/
│       ├── pom.xml
│       └── ...
│
└── README.md
```

**Frontend-App** contient l’interface React, les pages, les composants, la navigation et les services qui communiquent avec l’API.

**Backend-App/couvoir-oeuficient** contient l’application Spring Boot, les contrôleurs REST, les entités métier, les DTO, les services, les dépôts de données et la configuration de sécurité.

La communication entre les deux parties s’effectue par des requêtes HTTP vers l’API REST.

## ⚙️ Prérequis

Avant de lancer le projet, installer :

- Git.
- Node.js et npm.
- Java Development Kit (JDK) 17.
- Maven.
- PostgreSQL.

Les dépendances npm ayant déjà été installées dans l’environnement de développement, il n’est pas nécessaire de relancer leur installation à chaque démarrage.

## Installation et configuration

### 1. Cloner le dépôt

```bash
git clone https://github.com/BlackMugi/Oeuficient.git
cd Oeuficient
```

### 2. Configurer PostgreSQL

Créer une base de données PostgreSQL nommée `oeuficient`, ou adapter la configuration pour utiliser une autre base.

Exemple SQL :

```sql
CREATE DATABASE oeuficient;
```

### 3. Configurer le backend

Se placer dans le dossier du backend :

```bash
cd Backend-App/couvoir-oeuficient
```

Le fichier `src/main/resources/application.properties` utilise des variables de configuration pour les paramètres de connexion et le secret JWT.

Les variables suivantes doivent être définies dans l’environnement avant de lancer l’application :

| Variable | Description |
|---|---|
| `DB_URL` | URL JDBC de PostgreSQL |
| `DB_USERNAME` | Utilisateur PostgreSQL |
| `DB_PASSWORD` | Mot de passe PostgreSQL |
| `JWT_SECRET` | Secret utilisé pour signer les jetons JWT |
| `BOOTSTRAP_ADMIN_NOM` | Nom du compte administrateur initial |
| `BOOTSTRAP_ADMIN_PRENOM` | Prénom du compte administrateur initial |
| `BOOTSTRAP_ADMIN_EMAIL` | Adresse e-mail du compte administrateur initial |
| `BOOTSTRAP_ADMIN_PASSWORD` | Mot de passe du compte administrateur initial |

Exemple de format pour l’URL de la base :

```text
jdbc:postgresql://localhost:5432/oeuficient
```

Les valeurs sensibles doivent rester locales et ne doivent pas être publiées sur GitHub. Utiliser des variables d’environnement ou un fichier local exclu du versionnement.

Le projet configure actuellement `spring.profiles.default=local`. Vérifier le profil actif et le comportement du bootstrap avant tout déploiement.

### 4. Configurer le frontend

Le service d’authentification utilise actuellement l’URL locale suivante :

```text
http://localhost:8080/api/auth
```

Le frontend doit donc pouvoir communiquer avec le backend lancé sur le port `8080`, sauf si l’adresse de l’API est modifiée dans la configuration du projet.

## Lancement de l'application

Les deux applications doivent fonctionner simultanément en développement.

### Démarrer le backend

Depuis `Backend-App/couvoir-oeuficient` :

```bash
mvn spring-boot:run
```

Si Maven n’est pas installé globalement, utiliser le Maven Wrapper du projet s’il est présent.

Le backend est configuré pour être accessible localement sur le port `8080`, sauf modification de sa configuration.

### Démarrer le frontend

Ouvrir un second terminal à la racine du dépôt :

```bash
cd Frontend-App
npm run dev
```

Vite affiche dans le terminal l’adresse locale permettant d’ouvrir l’application dans le navigateur.

### Vérifier le frontend

Depuis `Frontend-App` :

```bash
npm run build
npm run lint
```

- `npm run build` lance la vérification TypeScript et construit l’application.
- `npm run lint` exécute ESLint.

Ces commandes sont disponibles dans le `package.json`. Leur réussite doit être vérifiée dans l’environnement local avant de considérer le build comme validé.

## API REST

Le backend expose des endpoints REST organisés par domaine fonctionnel.

Endpoints confirmés dans le code consulté :

| Méthode | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Authentification |
| `GET` | `/api/incubations` | Consultation des incubations |
| `POST` | `/api/incubations` | Enregistrement d’une incubation |
| `GET` | `/api/eclosions` | Consultation des éclosions |
| `POST` | `/api/eclosions` | Enregistrement d’une éclosion |

Les ressources relatives aux espèces, aux lots et aux équipements font partie du domaine métier. Consulter les contrôleurs du backend pour connaître la liste exhaustive des endpoints et les méthodes réellement disponibles.

### Authentification

L’endpoint de connexion reçoit les identifiants de l’utilisateur et retourne les informations nécessaires à l’authentification, dont un jeton JWT.

Le frontend utilise ce jeton pour les requêtes qui nécessitent une authentification.

## Sécurité

Le backend s’appuie sur Spring Security et JWT pour contrôler l’accès aux ressources protégées.

Les principes de sécurité du projet comprennent :

- L’authentification des utilisateurs.
- La gestion des rôles et des sections.
- La protection des endpoints selon les règles de sécurité configurées.
- La validation des données entrantes.
- La séparation des responsabilités entre contrôleurs, services et couche de persistance.

Les autorisations doivent être vérifiées à la fois dans les règles de sécurité et dans la logique métier des services. Le comportement exact de chaque rôle dépend de la configuration en vigueur.

## Tests et qualité

Le backend contient une classe de test Spring Boot destinée notamment à vérifier le chargement du contexte de l’application.

Pour exécuter les vérifications Maven :

```bash
mvn clean verify
```

Les scénarios métier à couvrir en priorité comprennent :

- La connexion avec des identifiants valides et invalides.
- Les permissions selon les rôles et les sections.
- La validation des quantités d’œufs et des capacités des équipements.
- Le calcul des dates prévisionnelles selon l’espèce.
- La cohérence entre les incubations, les lots et les éclosions.
- La gestion des erreurs et des données invalides.

La présence de tests dans le dépôt ne signifie pas que tous ces scénarios sont déjà automatisés. Les résultats des commandes doivent être contrôlés avant de déclarer les tests réussis.

##  Améliorations prévues

Les axes de consolidation et d’évolution comprennent :

- Renforcer les tests automatisés des règles métier.
- Consolider les relations entre incubations, transferts et éclosions.
- Vérifier les mises à jour de stock après les opérations.
- Finaliser les validations des quantités et des capacités.
- Continuer à renforcer les restrictions d’accès par rôle et par section.
- Compléter la documentation des endpoints et des réponses API.
- Vérifier la configuration de production et la gestion des secrets.
- Améliorer la couverture des indicateurs du tableau de bord analytique.

## À propos du projet

Oeuficient est un projet de développement full-stack orienté vers un besoin métier concret : la gestion et le suivi des opérations d’un couvoir avicole.

Il permet de mettre en pratique la conception d’une API REST, la persistance relationnelle avec PostgreSQL, l’authentification JWT, la gestion des autorisations et l’intégration d’une interface React/TypeScript.

**Dépôt GitHub :** https://github.com/BlackMugi/Oeuficient

---

*Documentation en cours d’évolution avec le développement du projet.*
