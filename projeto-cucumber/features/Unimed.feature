Feature: Solicitação de Plano pelo Usuário
  Como um usuário
  Eu quero solicitar um plano no site
  Para que eu possa ter um plano de saúde

  Scenario: Solicitação de plano bem-sucedida com dados válidos
    Given que estou no site da Unimed
    And aceito todos os cookies
    When navego para "Serviços" e seleciono "Planos"
    And escolho "Pessoa Física"
    And preencho o formulário com:
      | cpf      | 702.141.454-41   |
      | nome     | Cleibson Silva   |
      | email    | Test01@gmail.com |
      | telefone | 8199318-7771     |
      | estado   | Pernambuco       |
      | cidade   | Abreu e Lima     |
    And indico que não possuo plano atualmente
    And submeto a solicitação do plano
    Then devo ver uma mensagem de sucesso "Sua solicitação foi enviada com sucesso e uma cópia será encaminhada para o seu e-mail!"
