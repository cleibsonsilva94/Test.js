Feature: Realizar busca e adicionar produto ao carrinho
    Como cliente, quero buscar um produto para adicioná-lo ao carrinho.
    
    Scenario: Buscar e adicionar produto ao carrinho com sucesso
        Given que estou no site da Ferreira Costa
        When  fecho o popup de cookies
        When  realizo uma busca por "Máquina de cortar cabelo"
        When  seleciono o produto na lista de resultados
        When  adiciono o produto ao carrinho
        When  clico no logo para retornar à página inicial
        When  vou para o carrinho novamente
        Then  devo ver o produto no carrinho com o nome "Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V"
        Then o preço do produto no carrinho deve ser "79"