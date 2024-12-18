Feature: Teste de formulário
  Como um usuário
  Solicito receber newsletter 

  Scenario: Solicitação feita por meio de formulário
    Given que estou no site da Condo
    When eu clico em "Seu nome"
    And preencho o formulário com:
      | nome  | Testador Silva                    |
      | email | testadordasilvateste123@gmail.com |
    And clico em "Assine agora"
    Then devo ver uma mensagem de sucesso "Your submission was successful."