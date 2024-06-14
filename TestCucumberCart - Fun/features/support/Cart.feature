Feature: Realizar busca e adicionar produto ao carrinho
    Como um cliente
    Eu quero realizar uma busca por um produto
    Para que eu possa adicioná-lo ao carrinho de compras

Scenario: Buscar e adicionar produto ao carrinho com sucesso
    Given que estou no site da Ferreira Costa
    When eu fecho o popup de cookies
    When eu realizo uma busca por "Máquina de cortar cabelo"
    When eu seleciono o produto na lista de resultados
    When eu adiciono o produto ao carrinho
    When eu clico no logo para retornar à página inicial
    When eu vou para o carrinho novamente
    Then eu devo ver o produto no carrinho com o nome "Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V"
    Then o preço do produto no carrinho deve ser "R$69.90"