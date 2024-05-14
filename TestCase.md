## Testando permissões e limites do sistema.

### Casos de Teste - O que o cliente pode fazer:

1. Verificar se é possível o cliente fazer transferências dentro dos parâmetros estabelecidos, seguindo o caminho feliz.

2. **Cenários de Teste:**
   - Transferência para um destinatário não cadastrado de 2.000 reais nos seguintes horários: 8:00 da manhã e 19:59 da noite.
   - Transferência para um destinatário cadastrado no valor de 5.000 nos mesmos horários citados acima.

### Testes na Gherkin Language:

### Scenario: Transferência dentro do horário para destinatário não cadastrado.
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 8:00
  * When ele clica na página de transferência
  * And seleciona um destinatário não cadastrado
  * And digita o valor de 2000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência foi realizada com sucesso.

### Scenario: Transferência dentro do horário noturno para destinatário não cadastrado
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 19:59
  * When ele clica na página de transferência
  * And seleciona um destinatário não cadastrado
  * And digita o valor de 2000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência foi realizada com sucesso.

### Scenario: Transferência dentro do horário para destinatário cadastrado.
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 8:00
  * When ele clica na página de transferência
  * And seleciona um destinatário cadastrado
  * And digita o valor de 5000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência foi realizada com sucesso.

### Scenario: Transferência dentro do horário noturno para destinatário cadastrado.
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 19:59
  * When ele clica na página de transferência
  * And seleciona um destinatário cadastrado
  * And digita o valor de 5000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência foi realizada com sucesso.


---


<font color="blue">### Casos de Teste - O que o cliente não pode fazer:</font>


Levando em conta as restrições, testar os seguintes cenários:

1. **Antes ou depois do horaio permitido:**
   - Transferência de 2.000 às 7:59 e outra de 20:01 para um receptor não cadastrado.
   - Transferência nos mesmos horários, mas dessa vez para um destinatário cadastrado e com o valor de 5.000.

2. **Limite do Valor da Transferência:**
   - Transferência de 2.001 reais para um usuário não cadastrado.
   - Transferência no valor de 5.001 reais para um cliente cadastrado.

### Testes na Gherkin Language:

1. *Antes ou depois do horaio permitido:*

### Scenario: Transferência antes do horário permitido para destinatário não cadastrado.
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 7:59
  * When ele clica na página de transferência
  * And seleciona um destinatário não cadastrado
  * And digita o valor de 2000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência não foi possível. 

### Scenario: Transferência depois do horário permitido para destinatário não cadastrado. 
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 20:01
  * When ele clica na página de transferência
  * And seleciona um destinatário não cadastrado
  * And digita o valor de 2000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência não foi possível.

### Scenario: Transferência antes do horário permitido para destinatário cadastrado.
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 7:59
  * When ele clica na página de transferência
  * And seleciona um destinatário cadastrado
  * And digita o valor de 5000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência não foi possível.

### Scenario: Transferência depois do horário permitido para destinatário cadastrado. 
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 20:01
  * When ele clica na página de transferência
  * And seleciona um destinatário cadastrado
  * And digita o valor de 5000 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência não foi possível.

2. *Limite do Valor da Transferência:*

### Scenario: Transferência dentro do horário permitido mas com valor acima do permitido para destinatário cadastrado.
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 8:00
  * When ele clica na página de transferência
  * And seleciona um destinatário cadastrado
  * And digita o valor de 5001 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência não foi possível.

### Scenario: Transferência dentro do horário permitido mas com valor acima do permitido para destinatário não cadastrado. 
  * Given que o usuário está logado no sistema do banco devidamente autenticado e são 8:00
  * When ele clica na página de transferência
  * And seleciona um destinatário não cadastrado
  * And digita o valor de 2001 reais
  * And confirma com sua senha
  * Then o sistema exibe uma mensagem de que a transferência não foi possível. 

