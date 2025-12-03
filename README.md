# Portfólio — Brena Oliveira
<p align="center"> <img src="https://img.shields.io/badge/STATUS-ONLINE-success?style=for-the-badge" /> </p> <p align="center"> <!-- BOTÃO PERSONALIZADO --> <a href="https://BrenaOlive.github.io/portifolio-brena/" target="_blank"> <img src="https://img.shields.io/badge/🌐 Acessar%20Portfólio-181717?style=for-the-badge&logo=angular&logoColor=white" /> </a> </p>

Este é o repositório do meu portfólio profissional, desenvolvido em Angular, apresentando meus projetos, habilidades e trajetória como desenvolvedora Fullstack.
Adicionei a implementação de Cache e Requisições Condicionais com ETag.

No serviço responsável por consumir a API do GitHub, implementei uma camada de otimização que utiliza ETags para fazer requisições condicionais (If-None-Match).

Isso permite que a aplicação:
✔️ Não baixe dados repetidos quando não houve alterações
✔️ Evite bater no rate limit do GitHub
✔️ Aumente a velocidade de carregamento
✔️ Utilize localStorage como cache com TTL de 1 hora

Se a API retorna 304 Not Modified, a aplicação reaproveita os dados do cache. Caso contrário, salva novamente com o novo ETag e timestamp.

Além disso, criei um cache separado por repositório para armazenar dados da rota de linguagens (languages_url) utilizando dinamicamente a URL como chave.

🚀 Tecnologias utilizadas

Angular 17+
TypeScript
HTML5 / CSS3 / SCSS
JavaScript
Responsividade Mobile-First
GitHub Pages
