This README provides instructions on setting up and running the _**BloQCat Framework**_ as Docker application using Docker Compose. [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Quickstart
The base components QC Atlas, QC Atlas UI, LaTeX Renderer, Winery, and the databases run by default using:
```bash 
  docker-compose up db -d
  docker-compose up -d
 ```
 > ⚠️ The database (db) must be started before the other containers to ensure that it was fully initialized. Otherwise the other containers may fail to start.

## Prerequisites
- [Install Docker](https://docs.docker.com/install/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)
- [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Hardware requirements
- For Docker at least **2 GB** RAM

## Project Structure

## Project Structure

This Docker Compose setup includes multiple services:

| Service              | Description                                  | Port | GitHub                                                                                 | Docker Hub                                                                 |
|----------------------|----------------------------------------------|------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **bloqCat-api**      | An API service                               | 5000 | [bloqCat-api](https://github.com/aldekal/bloqCat)                                      | [bloqCat-api](https://hub.docker.com/repository/docker/aldekal/bloqcat-api/general)   |
| **winery**           | A service for managing the repository        | 8080 | [winery](https://github.com/aldekal/winery)                                            | [winery](https://hub.docker.com/repository/docker/aldekal/winery/general)                |
| **db**               | A PostgreSQL database service                | 5060 | [qc-atlas-content](https://github.com/aldekal/qc-atlas-content)                        | N/A                                                                          |
| **qc-atlas-ui**      | The UI for QC Atlas                          | 80   | [qc-atlas-ui](https://github.com/aldekal/qc-atlas-ui)                                  | [qc-atlas-ui](https://hub.docker.com/repository/docker/aldekal/qc-atlas-ui/general)           |
| **qc-atlas-api**     | The API for QC Atlas                         | 6626 | [qc-atlas-api](https://github.com/aldekal/qc-atlas-api)                                | [qc-atlas-api](https://hub.docker.com/repository/docker/aldekal/qc-atlas-api/general)          |
| **pattern-atlas-api**| The API for Pattern Atlas                    | 1977 | [pattern-atlas-api](https://github.com/PatternAtlas/pattern-atlas-api)                 | [pattern-atlas-api](https://hub.docker.com/r/patternatlas/pattern-atlas-api)         |
| **pattern-atlas-ui** | The UI for Pattern Atlas                     | 1978 | [pattern-atlas-ui](https://github.com/PatternAtlas/pattern-atlas-ui)                   | [pattern-atlas-ui](https://hub.docker.com/r/patternatlas/pattern-atlas-ui)           |
| **auth**             | Keycloak authentication service              | 7080 | N/A                                                                                    | [quay.io](https://quay.io/repository/keycloak/keycloak?tab=tags&tag=18.0.0#:~:text=ea2b367609b2-,18.0.0,-2%20years%20ago)  |
| **latex-renderer**   | A service for rendering LaTeX                | 5030 | [latex-renderer](https://github.com/UST-QuAntiL/latex-renderer)                        | [latex-renderer](https://hub.docker.com/repository/docker/planqk/latex-renderer)      |
| **config-server**    | An etcd configuration server                 | 2379 | [etcd](https://github.com/etcd-io/etcd)                                                | [etcd](https://quay.io/repository/coreos/etcd)                                       |

- [bloqCat-modeling](https://github.com/aldekal/bloqCat-modeling): This repository defines all NodeTypes and RelationshipTypes required to demonstrate the BloQCat Framework within Winery.
- [qc-atlas-content](https://github.com/aldekal/qc-atlas-content): This repository contains the initial data for the QC Atlas.



## Running the Application

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Build and Start the Containers**

    ```bash 
    docker-compose up db -d
    docker-compose up -d
    ```
    > ⚠️ The database (db) must be started before the other containers to ensure that it was fully initialized. Otherwise the other containers may fail to start.

3. **Access the Services**
   
   The entry point for the app is the [QC Atlas UI](http://localhost:80) where you can find a section called BloQCat.

    | Service              | URL                                |
    |----------------------|------------------------------------|
    | **bloqCat-api**      | [http://localhost:5000](http://localhost:5000) |
    | **winery**           | [http://localhost:8080](http://localhost:8080) |
    | **qc-atlas-ui**      | [http://localhost:80](http://localhost:80)     |
    | **qc-atlas-api**     | [http://localhost:6626](http://localhost:6626) |
    | **pattern-atlas-api**| [http://localhost:1977](http://localhost:1977) |
    | **pattern-atlas-ui** | [http://localhost:1978](http://localhost:1978) |
    | **auth**             | [http://localhost:7080](http://localhost:7080) |
    | **latex-renderer**   | [http://localhost:5030](http://localhost:5030) |
    | **config-server**    | [http://localhost:2379](http://localhost:2379) |

## Stopping the Application

To stop the running containers, use:

```bash
docker-compose down
```

## Customization

- **Database Configuration**: The `db` service is configured with environment variables to set up users and databases. Modify `POSTGRES_USERS` and `POSTGRES_DATABASES` as needed.
- **UI Configuration**: The UI services (`qc-atlas-ui` and `pattern-atlas-ui`) are configured with environment variables pointing to their respective API services. Ensure the hostnames and ports match your setup.

## Troubleshooting

- **Port Conflicts**: Ensure no other applications are running on the same ports.


## Haftungsausschluss
Dies ist ein Forschungsprototyp.Die Haftung für entgangenen Gewinn, Produktionsausfall, Betriebsunterbrechung, entgangene Nutzungen, Verlust von Daten und Informationen, Finanzierungsaufwendungen sowie sonstige Vermögens- und Folgeschäden ist, außer in Fällen von grober Fahrlässigkeit, Vorsatz und Personenschäden, ausgeschlossen.

## Disclaimer of Warranty
Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.