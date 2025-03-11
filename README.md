# Microfrontends com Vite e Vue 3

Este projeto é uma **POC (Proof of Concept)** utilizando **Vite** e **Vue 3** para desenhar **microfrontends** que se integram via **Module Federation**.

A ideia é ter projetos separados que são executados juntos no mesmo ambiente, mas com arquiteturas isoladas para garantir **fácil manutenção** e **escalabilidade**.

## Estrutura do Projeto

O projeto é composto pelas seguintes pastas:

- **`orchestrator`**: O projeto host, responsável por conter e gerenciar todos os projetos filhos e o roteamento entre eles.
- **`project-1`**: Um dos projetos remotos.
- **`project-2`**: O outro projeto remoto.
- **`shared-components`**: Um projeto para criar e servir componentes reutilizáveis entre os outros microfrontends.

Cada um dos microfrontends é servido em uma porta diferente, definida nos seus respectivos arquivos `vite.config.js`.

## Tecnologias Utilizadas

- **[Vue 3](https://github.com/vuejs/vue)**
- **[Vite](https://github.com/vitejs/vite)**
- **[vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)**

## Como Executar o Projeto

### Executar Todos os Microfrontends Juntos
Na pasta raiz, execute:
```sh
npm run dev
```
Isso irá iniciar todos os microfrontends e o `orchestrator` simultaneamente.

### Executar um Microfrontend Individualmente
Se precisar rodar apenas um microfrontend específico, use:

- **Para o `orchestrator`**:
  ```sh
  npm run dev
  ```
- **Para `project-1`, `project-2` ou `shared-components`**:
  - Para **build e preview**:
    ```sh
    npm run build && npm run preview
    ```
  - Para **desenvolvimento em tempo real**:
    ```sh
    npm run dev
    ```

Dessa forma, você pode testar e desenvolver cada microfrontend separadamente ou em conjunto. 🚀

