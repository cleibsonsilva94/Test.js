Feature: Solicitação de simulação de um plano ideal
  Como um usuário
  Eu quero solicitar um plano no site
  Para que eu possa ter um plano de saúde

  Scenario: Solicitação de plano bem-sucedida com dados válidos
    Given que estou no site da Unimed
    Given aceito todos os cookies
    When clico em "Planos"
    When escolho "Pessoa Física"
    When preencho o formulário com:
      | cpf      | 012.361.971-86                 |
      | nome     | Testador Sikva                 |
      | email    | testadordasilvateste@gmail.com |
      | telefone | 81 91872-4307                  |
      | estado   | Pernambuco                     |
      | cidade   | Abreu e Lima                   |
    When indico que não possuo plano atualmente
    When submeto a solicitação do plano
    Then devo ver uma mensagem de sucesso "Sua solicitação foi enviada com sucesso e uma cópia será encaminhada para o seu e-mail!"
