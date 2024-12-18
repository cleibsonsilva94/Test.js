Feature: Teste de formulario
  Como um usuário
  solicito receber newsletter 
  
  Scenario: Solicitação feita por meio de formulario
    Given que estou no site da Condo
    When me direciono até "Receba nossa newsletter no seu e-mail"
    When e clico em "Seu nome"
    When preencho o formulário com:
      | nome     | Testador Sikva                 |
      | email    | testadordasilvateste@gmail.com |
    When clico em "Assine agota"
    Then devo ver uma mensagem de sucesso "Sua solicitação foi enviada com sucesso e uma cópia será encaminhada para o seu e-mail!"
