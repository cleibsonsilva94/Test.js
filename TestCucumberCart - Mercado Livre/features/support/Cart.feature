Feature: Realizar busca e adicionar produto ao carrinho
    Adicionando ao carrinho.
    
    Scenario: Buscar e adicionar produto ao carrinho com sucesso
        Given que estou no site do Mercado Livre 
        And  fecho o popup de cookies
        And  realizo uma busca por "Máquina de cortar cabelo"
        And  seleciono o produto na lista de resultados
        And  adiciono o produto ao carrinho
        Then o sistema deve infomar "Olá! Para adicionar ao carrinho, acesse a sua conta"