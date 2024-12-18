Feature: Teste de formulario
  Como um usuário
  solicito receber newsletter 
  
  Scenario: Solicitação feita por meio de formulario
    Given que estou no site da Condo
    When e clico em "Seu nome"
    When preencho o formulário com:
      | nome     | Testador Sikva                 |
      | email    | testadordasilvateste123@gmail.com |
    When clico em "Assine agora"
    Then devo ver uma mensagem de sucesso "Your submission was successful."
