**Bugs Encontrados:**

---

**Bug 01**

**Descrição:**
No campo CPF, não é possível digitar todos os 11 dígitos necessários. O sistema permite apenas a inserção de 10 números, tornando impossível cadastrar um funcionário, visto que o CPF é um campo obrigatório.

**Passos para reprodução:**
1. Preencher corretamente o nome do novo funcionário.
2. Tentar digitar os 11 números do CPF.

**Resultado esperado:**
O sistema deve permitir a digitação de todos os 11 números do CPF.

**Resultado obtido:**
O sistema impede a digitação do 11º dígito, travando no 10º.

**Severidade:** Alta

---

**Bug 02**

**Descrição:**
No campo telefone, o usuário não consegue inserir todos os 10 dígitos do número. Exemplo: ao tentar digitar "93187771", o sistema permite apenas 7 dígitos, resultando em "(93) 18777".

**Passos para reprodução:**
1. Dentro da área logada, acessar o formulário de cadastro de funcionário.
2. Tentar digitar um número de telefone com 10 dígitos (sem o nove na frente).

**Resultado esperado:**
O sistema deve permitir a digitação de todos os 10 dígitos, ficando no formato (99) 9999-9999.

**Resultado obtido:**
O sistema impede a digitação após o 7º dígito, exibindo "(99) 99999".

**Severidade:** Alta

---

**Bug 03**

**Descrição:**
No campo e-mail, não é possível inserir o endereço completo. Exemplo: ao tentar digitar "cleibsonslima@gmail.com", o campo só permite "cleibsonsl".

**Passos para reprodução:**
1. Dentro da área logada, acessar o campo de e-mail do funcionário.
2. Tentar digitar "cleibsonslima@gmail.com".

**Resultado esperado:**
O sistema deve permitir a digitação de todos os caracteres do e-mail.

**Resultado obtido:**
O sistema impede a digitação após o 10º caractere.

**Severidade:** Média

---

**Outros Problemas Encontrados:**

- **Campo "Data de Nascimento" e "Data de Admissão"**: O usuário consegue inserir uma data futura, o que não deveria ser permitido.
- **Campo "Salário"**: Não é possível inserir pontos ou vírgulas, impedindo a digitação de valores decimais.
- **Campos Obrigatórios**:
  - O único campo obrigatório com um asterisco vermelho (indicação comum para campos obrigatórios) é "Cargo".
  - Campos essenciais como "Estado" e "Departamento" não são obrigatórios no formulário.
- **Mensagens de Erro**:
  - Ao tentar salvar um funcionário sem preencher campos obrigatórios (CPF, Nome e Rua), a mensagem exibida é "ERROR: value too long for type character varying(10)", o que não é claro para o usuário.
  - A mensagem de erro ao tentar inserir um CPF inválido é muito mais explicativa: "O campo \"CPF\" deve conter um CPF válido!". Seria ideal padronizar todas as mensagens de erro para maior clareza ao usuário.
