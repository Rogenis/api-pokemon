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
5. Desse modo, é esperado que seja retornado um resultado JSON  { "status": "OK" }
```
{
  "status": "OK"
}
```


