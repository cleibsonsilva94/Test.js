Feature: Teste de formulario
    Como póssivel  cliente, preencho formulario para receber newsletter.
    
    Scenario: Buscar e adicionar produto ao carrinho com sucesso
        Given que estou no site da CondoConta
        When  me encaminho até o formulario
        When  preencho 
        When  clico no logo para retornar à página inicial
        When  vou para o carrinho novamente
        Then  devo ver o produto no carrinho com o nome "Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V"
        Then o preço do produto no carrinho deve ser "79.9"