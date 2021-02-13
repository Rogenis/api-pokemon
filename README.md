# api-pokemon
Repositório para o teste técnico (api-pokemon)

## Instalação

**Dependências**
- Docker version 20.10.3
- Docker-compose version 1.28.2

**Passos para rodar localmente**
1. Instale as depedências citadas acima. 
2. Execute o comando `make build`, dentro do diretório (Irá subir os containers).
3. Execute o comando `make db-build`, irá construir o banco de dados. 
4. Após isso, acesse através do browser ou por ferramentas de requisições (ex: insomnia) o endpoint `localhost:3000/health`.  
5. Desse modo, é esperado que seja retornado um resultado JSON: 
```
{
  "status": "OK"
}
```
**Rotas**
- As rotas foram documentadas através da ferramenta postman ( plataforma de colaboração para desenvolvimento de API), e pode ser acessada através do link: 
- https://documenter.getpostman.com/view/14541168/TWDRreYH


## Escolha das Tecnologias
- Para esse projeto, foram escolhidas as tecnologias ***Nodejs*** e framework ***Express***. 
1. **Nodejs**: Foi usado o Nodejs pois ele nos trás vantagens como ser possível criar aplicações Javascript para rodar como uma aplicação standalone (os programas completamente auto-suficientes, onde que para seu funcionamento, não necessitam de um software auxiliar) em uma máquina, não dependendo de um browser para a execução. Assim como possui alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless.
2. **Express**: O framework Express foi escolhido pois ele é um framework Web baseado no Node.js cujo objetivo é simplificar sua API e adicionar novos recursos. O Express segue uma filosofia não opinativa e minimalista.

- Não opinativa significa que você precisará tomar muitas decisões sobre como organizar seu código dentro de sua aplicação.
- Minimalista significa que ele te dá total liberdade de escolher outros módulos para completar as necessidades de sua aplicação.

Essas características nos permitem usar o Express para desenvolver qualquer tipo de aplicação. Além de que contém as funções necessárias para eleborar uma API REST sem grandes complicações de estrutura de um projeto.

3. Para o banco de dados, foi escolhido o **PostgreSQL**, um banco de dados relacional onde as suas principais vantagens estão relacionadas à economia e ao alto desempenho oferecido pelo SGBD. O banco de dados suporta um intenso fluxo de dados com garantia de estabilidade e segurança, mas isso não o torna extremamente caro. 

4. Para a comunicação da API com o banco de dados, foi usado o **ORM (Object Relational Mapper)**, uma técnica que permite consultar e manipular dados
de um database usando o paradigma de orientação a objetos, desta forma, o acesso aos dados não é feito através da linguagem SQL, e sim através de objetos. 

5. Foi usado o **Docker**, pois com ele é possível lidar com os containers como se fossem máquinas virtuais modulares e extremamente leves. Além disso, os containers oferecem maior flexibilidade para você criar, implantar, copiar e migrar um container de um ambiente para outro. O dokcer também serve para facilitar a execução de um determinado projeto em diferentes máquinas. 

