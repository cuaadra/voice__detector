# Voice Detector - Vuetify Project

## Tecnologies Utilitzades

*   **Vue.js 3**: The progressive JavaScript framework for building user interfaces.
*   **Vuetify 3**: A complete UI framework built on top of Vue.js, providing a rich set of Material Design components.
*   **Electron**: Framework for building desktop applications with JavaScript, HTML, and CSS.
*   **Vite**: Next Generation Frontend Tooling, used for fast development.
*   **Pinia**: The official state management library for Vue.js.
*   **ESLint**: Pluggable JavaScript linter.
*   **Prettier**: An opinionated code formatter.

## Instruccions d'Instal·lació i Execució

Per posar en marxa aquest projecte en local, segueix els següents passos:

### 1. Clona el repositori

```bash
git clone <URL_DEL_REPOSITORI>
cd vuetify-project
```

### 2. Instal·la les dependències

Un cop dins del directori del projecte, instal·la totes les dependències necessàries:

```bash
npm install
# o bé
yarn install
```

### 3. Executa l'aplicació en mode desenvolupament

Per iniciar l'aplicació web en mode desenvolupament amb recàrrega en calent:

```bash
npm run dev
# o bé
yarn dev
```

Això iniciarà el servidor de desenvolupament i obrirà l'aplicació al teu navegador web per defecte (normalment a `http://localhost:3000/`).

### 4. Compila per a producció

Per compilar l'aplicació per a producció (web):

```bash
npm run build
# o bé
yarn build
```

Els fitxers compilats es trobaran al directori `dist` o `dist-electron` respectivament.

## Descripció de l'ús bàsic de l'aplicació

Aquesta aplicació està dissenyada per detectar i processar la veu. Un cop iniciada, l'usuari pot interactuar amb la interfície per activar la detecció de veu. La funcionalitat específica inclou:

*   **Reconeixement de veu:** Captura i interpreta ordres o text pronunciat per l'usuari.
*   **Interfície d'usuari intuïtiva:** Components de Vuetify que faciliten la interacció i visualització de l'estat del reconeixement.
*   **Comandaments de veu:** Permet a l'usuari controlar certs aspectes de l'aplicació mitjançant la veu (a la secció "VoiceCommander").

Per utilitzar l'aplicació, simplement inicia-la i segueix les indicacions de la interfície per començar a utilitzar la detecció de veu. Assegura't que el teu micròfon estigui configurat correctament.
