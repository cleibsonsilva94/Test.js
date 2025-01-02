## RELATÓRIO DE TESTES MANUAIS

**TIPO DE TESTE:** Verificar funcionalidade  
**DIA EM QUE FOI TESTADO:** 01/01/2024  
**NAVEGADORES USADOS:** Google Chrome Versão 125.0.6422.77 e Microsoft Edge Versão 131.0.2903.112  
**HARDWARE UTILIZADO:**  
Samsung Book  
Processador: 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz, 3.00 GHz  
RAM instalada: 4,00 GB (utilizável: 3,73 GB)  
Sistema operacional: Windows 11  
**ANALISTA:** Cleibson Silva  

---

### OBJETIVOS DO TESTE:  
Verificar funcionalidade. 
Especificamente do carrinho do e-commerce. Para tal, dividi os testes em dois campos:  

#### **O QUE O USUÁRIO PODE FAZER:**  
Antes de realizar qualquer compra na plataforma de e-commerce, o usuário precisa adicionar os itens ao carrinho. Caso mude de ideia, ele também pode remover produtos que não deseja comprar mais. 
Por isso, foram criados dois cenários:  

- Adicionar produtos ao carrinho  
- Excluir produtos do carrinho  

#### **O QUE O USUÁRIO DEVE SER IMPEDIDO DE FAZER:**  
O sistema possui algumas restrições relacionadas ao carrinho, que impedem o usuário de realizar certas ações. Testei pelo menos duas dessas restrições:  
1. Adicionar um produto ao carrinho sem estar devidamente logado.  
2. Tentar adicionar ao carrinho uma quantidade maior do que a disponível em estoque.  

Também incluí um teste onde, dentro do carrinho, tento adicionar um cupom de desconto inexistente. Nessa situação, o sistema deve impedir a ação.  

---

### PASSO A PASSO DOS TESTES:  
Para demonstrar como os testes foram realizados e o passo a passo que segui, utilizarei, neste relatório, a linguagem Gherkin, que basicamente simula a interação de um usuário com uma funcionalidade.

#### **CASOS DE TESTE - O QUE O CLIENTE PODE FAZER:**  

**Scenario: Adicionando um produto ao carrinho**  
Prioridade: Alta  

- **Given** que o usuário está devidamente logado no e-commerce do Mercado Livre  
- **When** ele pesquisa por um produto de seu interesse  
- **And** escolhe um dos produtos listados  
- **And** tem acesso a informações mais detalhadas sobre ele  
- **And** clica para adicionar o produto ao carrinho  
- **And** o sistema exibe uma mensagem de sucesso: "Adicionado ao carrinho." 
- **Then** ao clicar para ir ao carrinho, ele deve visualizar o produto recentemente adicionado.  

**Scenario: Excluindo um produto do carrinho**  
Prioridade: Alta  

- **Given** que o usuário está devidamente logado no e-commerce do Mercado Livre  
- **When** ele pesquisa por um produto de seu interesse  
- **And** escolhe um dos produtos listados  
- **And** clica para adicionar o produto ao carrinho  
- **And** o sistema exibe uma mensagem de sucesso: "Adicionado ao carrinho."  
- **And** ao clicar no carrinho, ele vê o produto recentemente adicionado  
- **Then** ao clicar em "Excluir", o produto some do carrinho, e deve ser exibida a mensagem: "Pronto! você excluiu o produto."  

#### **MÉTRICAS:**  
- Fpi testado cada um dos cenários 5 vezes em cada navegador. 
- Taxa de aprovação: 100%.  
- Em todos os testes, o sistema se comportou como esperado.  

---

#### **CASOS DE TESTE - O QUE O CLIENTE NÃO PODE FAZER:**  

**Scenario: Adicionar um produto sem estar logado**  
Prioridade: Média  

- **Given** que o usuário não está logado no e-commerce do Mercado Livre  
- **When** ele pesquisa por um produto de seu interesse  
- **And** escolhe um dos produtos listados  
- **And** tenta adicionar o produto ao carrinho  
- **Then** o sistema redireciona o usuário para uma página solicitando login ou cadastro.  

**Scenario: Adicionar quantidade maior que a disponível em estoque**  
Prioridade: Alta  

- **Given** que o usuário está logado no e-commerce do Mercado Livre  
- **When** ele pesquisa por um produto de seu interesse  
- **And** escolhe um dos produtos listados  
- **And** tenta adicionar ao carrinho uma quantidade maior que a disponível em estoque  
- **Then** o sistema exibe um alerta: "Sem estoque."

**Scenario: Adicionar um cupom de desconto inexistente**  
Prioridade: Alta  

- **Given** que o usuário está logado no e-commerce do Mercado Livre  
- **When** ele pesquisa por um produto de seu interesse  
- **And** escolhe um dos produtos listados  
- **And** adiciona o produto ao carrinho  
- **And** tenta aplicar um cupom de desconto inexistente  
- **Then** o sistema exibe um alerta: "Confira se o cupom está correto."

#### **MÉTRICAS:**  
- Foi testado cada um dos cenários 5 vezes em cada navegador. 
- Taxa de aprovação: 100%.  
- Em todos os casos, o sistema se comportou corretamente, impedindo ações não permitidas.  

#### **Conslusão:** 
O carrinho funciona muito bem. É absolutamente possível e rápido adicionar e excluir produtos. 
Além disso, as barreiras/proibições do sistema funcionam corretamente, impedindo que o cliente 
realize ações que não são permitidas. O sistema também é bastante rápido ao carregar as páginas e recursos.
