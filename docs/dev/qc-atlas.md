# Run the QC Atlas UI locally to manipulate it.
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
## prerequisites
- node version v16.20.2
- npm version 8.19.4
- Docker & Docker Compose

## Steps
1. Clone the QC-Atlas UI [repository](https://github.com/aldekal/qc-atlas-ui.git)
2. The UI depends on some other components, therefore clone the [framework repository](https://github.com/aldekal/bloqcat-framework.git)
3. Run 
    ```shell 
    docker-compose up db -d
    docker-compose --profile bloqcat up -d
    ```
    in the root directory of the **framework** repository
4. The QC Atlas UI is based on Angular. Install the Angular CLI globally with `npm install -g @angular/cli`
5. Run `npm install` in the root directory of the **QC-Atlas UI** repository
6. Run `ng serve` in the root directory of the **QC-Atlas UI** repository
7. Deployment server runs on `http://localhost:4210/`

Changes in the UI are automatically applied to the deployment server.