Feature: Realizar busca e adicionar produto ao carrinho
    Como cliente, quero buscar um produto para adicioná-lo ao carrinho.
    
    Scenario: Buscar e adicionar produto ao carrinho com sucesso
        Given que estou no site da Ferreira Costa
        And  fecho o popup de cookies
        And  realizo uma busca por "Máquina de cortar cabelo"
        And  seleciono o produto na lista de resultados
        And  adiciono o produto ao carrinho
        And  clico no logo para retornar à página inicial
        And  vou para o carrinho novamente
        Then devo ver o produto no carrinho com o nome "Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V"
        Then o produto deve conter o seguinte preço "82.9"