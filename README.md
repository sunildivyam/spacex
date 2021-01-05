# SpaceX Program

SpaceX Program is an Universal React Typescript Application.
## Demo

To see the Live Production application, please visit [SpaceX Program Demo](https://spacex-ca7de.web.app/)
## Tech Stack

* React Razzle boilerplate.
* React Js, Typescript, Redux, Thunk, React Router, Bootstrap, Axios.
* Helmet, Express Js.

## Features

* Server Side rendered landing page.
  * Page's data is fetched from API on server itself on first load.
  * React App is Server side rendered consuming its data from API.
  * Redux store is created on server side, and preloaded state is added to the page response for the client.
  * SEO is added on Server using Helmet.
  * Browser gets static react App, fully rendered with HTML and data.
* Client React Application
  * Client react App just hyderates the Server renderd react App.
  * Improved performance.
  * Quick Landing Page load.
* CI/CD implemented. Explained in the section Contribution.
* Production Ready Application.

## Getting Started

```bash
// move to project root folder and run following commands:
// Installs project dependencies

npm install

// Run local dev server

npm run start

// Run tests

npm run test

// Create a prod build

npm run build

// Run Prod build on local server

npm run build:prod

```

## Contributing

I have kept the process to contribute, very simple. 

### 1) Clone and checkout this repository.

```bash
git clone https://github.com/sunildivyam/spacex.git
cd spacex
git checkout -B <your-branch>
```
### 2) Install and Run Application on local
 Please follow steps as mentioned in [Getting Started](#getting-started)
### 3) Push your Code to Repository
* You can not push any changes directly to `main' branch. The only way to contribute is to create a PR.

* Create a PR for your changes. 
    For each Push in PR, few checks would run by the GitHub Actions, like it runs you tests and build. If this check fails, you would not be able to merge your PR to `main` branch.
    
* Marge your PR.
    When all checks on the PR are successful, then you can merge your PR to `main` branch.

### 3) Automatic Deploy the application (CI/CD)

* The deployment is taken care by Github actions CI/CD as soon as a code push is done to `main` branch.

* Github Actions Runs the Checks, like tests and build, if successful then runs a deployment scripts.

* The application gets deployed on [Google firebase Cloud](https://console.firebase.google.com/u/0/project/spacex-ca7de/hosting/main) and is served from there. [SpaceX Program Demo App](https://spacex-ca7de.web.app/).

* Firebase serves hosted node applications via [Serverless Cloud functions as a service](https://console.firebase.google.com/u/0/project/spacex-ca7de/functions/list). So we have created a firebase function `root/index.js`. So this process also deploys our firebase function to the cloud.

* You can monitor the CI/CD pipeline workflows and watch logs and progress. [SpaceX programs Github CI/CD Workflows](https://github.com/sunildivyam/spacex/actions).

## Performance from Lighthouse tool.

[Performance](https://github.com/sunildivyam/spacex/blob/readme/updates/lightouse-perf.png?raw=true)

### Thanks You.

