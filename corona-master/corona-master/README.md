# Corona
Corana est une application mobile conçue pour surmonter les difficultés liées à la rareté des informations pendant la pandémie COVID-19. Elle fournit des informations utiles sur la COVID-19 et son évolution dans ce monde.

## Informations techniques
* L'application mobile est developé avec [React Native framework](https://reactnative.dev/).
* Le backend de l'application est réalisé avec [JHipster](https://jhipster.dev).
* L'application mobile consomme une API pour obtenir des statistiques sur [The virus tracker website](https://thevirustracker.com/api)
* L'appli est composée de trois pages primaires
    - News (actualités) Actualités sur l'evolution du covid-19 au Cameroun venant de diverses sources.
    - Statistiques Stats sur l'evolution du covid dans le monde et particulièrement au Cameroun
    - Info - des numeros a appeler en cas d'infection, Informations sur les 
        - Symptomes
        - Prevention
        - Traitement

## Product backlog

## Sprint 0
- [x] Developpement des interfaces basices
- [x] Enrichissement de la page d'information
- [x] Enrichissement de la page de statistiques
- [x] Integration de l'internationalisation
- Extraction automatique des informations sources fiables
    - [x] [OMS](https://www.who.int/fr)
    - [x] Informations de google sur le corona virus.
- [ ] Test de la version initial.
- [ ] Creation d'un logo et d'un nom pour l'application.
- [ ] Déploiement de la version initiale sur le play store.

## Sprint 1 (En planification)
- [ ] Enrichissement de la page des news.
- Extraction automatique des informations sources fiables
    - [ ] Site d'actualités sur le COVID-19 au Cameroon.
- [ ] Synchronisation des données pour un fonctionnement en offline.
- [ ] Dévelopement et déploiement du backend de l'application.

## Pour commencer

### Prérequis

Pour pouvoir installer et faire fonctionner l'application mobile, vous devez:
* Téléchargez et installez [Git](https://git-scm.com/downloads)
* Téléchargez et installez [Node](https://nodejs.org/en/) - take the LTS (latest stable version) version
* Configurez votre environnement pour permettre aux applications react native de fonctionner en utilisant ce [lien](https://reactnative.dev/docs/environment-setup#native) - choisissez **React Native CLI Quickstart**

### Installer

Entrez les commandes suivantes

```sh
$ git clone https://toolchain.boostasoft.tech:9050/corona-project/corona.git
$ cd corona
$ npm install
```

### Démarer

Pour demarer l'application sur votre telephone, entrez la commande suivante
 ```sh
$ npm start
```

Ensuite suivez ces étapes [steps](https://reactnative.dev/docs/running-on-device)

