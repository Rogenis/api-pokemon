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

5. Foi usado o **Docker**, pois com ele é possível lidar com os containers como se fossem máquinas virtuais modulares e extremamente leves. Além disso, os containers oferecem maior flexibilidade para você criar, implantar, copiar e migrar um container de um ambiente para outro. O docker também serve para facilitar a execução de um determinado projeto em diferentes máquinas. 

## Estrutura do Projeto

- Para a estrutura do projeto, foi usado o padrão de arquitetura de software **MVC (Model - Views - Controller)**. Onde cada uma destas camadas serve para proporcionar uma manutenção mais fácil e o possível reaproveitamento de classes e partes do projeto em projetos futuros.

- **Model**: Camada usada para a manipulação de dados, sendo ela responsável pela leitura e escrita de dados, e também de suas validações provenientes do SGBD utilizado pela aplicação.
- **Cotroller**: Responsavél pelas requisições dos usuários, fazendo uso dos modelos e apresentando os resultados através das views. 
- **Views**: A camada responsavél pela interação com o usuário.

Desse modo, o projeto foi dividido pelas camadas de model e controller.
Diretórios do projeto: 
- Routes: Responsavél pelas rotas. 
- Config: Responsavél pela requisição com o banco de dados. (Dados de acesso ao banco) 
- Database: Responsavél pelos modelos, migrações, associações e seeders.

1. Migrations: As migrações são arquivos que guardam as mudanças que o banco de dados da aplicação sofre ao longo do tempo. Elas funcionam como um sistema de controle de versão do esquema do banco, e são usadas para fazer edições no esquema (criar/editar tabelas) ou para reverter edições anteriores.
2. Models: Geração dos modelos das tabelas do banco.
3. Seeders: A inserção de dados inicias no banco, pela qual algumas tabelas podem precisar de dados iniciais padrão para que a aplicação funcione adequadamente. 
4. Responsavél pelos filtros e busca. 

**Validações**

- Para as validações, foram usadas as regras de validações, onde os validadores são regras usadas nos modelos (não nas
migrações) para garantir a consistência dos dados durante a inserção e atualização dos registros. 
Regras:
1. Um time tem no máximo 6 Pokémons;
2. O nome do time deve ter pelo menos 5 caracteres.
3. Não é permitido cadastro com mesmo email. 
4. Tratamento de erros. 
