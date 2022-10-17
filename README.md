 # Para executar a API:
 
 1: Tenha o Node.js e o npm instalados: https://nodejs.org/en/download/
 
 2: Baixe o insomnia para testar as rotas: https://insomnia.rest/download

 3: Clone o repositório
 
 4: Execute os seguintes comandos dentro da pasta da API para instalar o express, sequelize, sqlite 3 e o nodemon:
 
    npm init -y
    npm i express sequelize sqlite3
    npm i nodemon -D
    
 E finalmente para servir:
 
    npm start
 
 5: Utilize o insomnia para testar as rotas (lembre de modificar os verbos HTTP):
 
  Para retornar todas as instâncias do banco de dados:
  
    get: localhost:3000/products
 
 Para retornar uma instâncias do banco de dados pelo seu id:
  
    ex:
    get: localhost:3000/products/1
    get: localhost:3000/products/2
 
 Para criar uma instância do banco de dados:
  
    post: localhost:3000/products/
    
    Abaixo do verbo HTTP selecione "JSON" e utilize a seguinte estrutura:
    
    {
      "name": "nome do produto",
      "price": 1000.00,
      "description": "descricao do produto",
      "category": "categoria do produto"
    }
   
  Para atualizar uma instância do banco de dados pelo seu id:
      
      ex:
      put: localhost:3000/products/1
      put: localhost:3000/products/2
      
      Utilize a mesma estrutura de criação para modificar a instância dependendo do seu id
 
  Para deletar uma instância do banco de dados pelo seu id:
      
      ex:
      delete: localhost:3000/products/1
      delete: localhost:3000/products/2
