**Bugs Encontrados:**

---

**Bug 04**

**Descrição:**
Impossibilidade de digitar o 5º dígito do código do produto. Também é possível inserir valores negativos.

**Passos para reprodução:**
1. Dentro da área logada, clique em "Logística" e depois "Controle de estoque".
2. No campo "Código do produto" do formulário, tente digitar 5 caracteres numéricos ou um valor negativo.

**Resultado esperado:**
O sistema deve impedir a inserção de códigos com menos de 5 caracteres numéricos e valores negativos.

**Resultado obtido:**
É possível salvar produtos com códigos contendo menos de 5 caracteres numéricos ou com valores negativos.

**Severidade:** Alta

---

**Bug 05**

**Descrição:**
Não é possível digitar mais de 4 caracteres no nome do produto, o que dificulta uma descrição clara.

**Passos para reprodução:**
1. Dentro da área logada, clique em "Logística" e depois "Controle de estoque".
2. Tente digitar um nome de produto com mais de 4 caracteres, como "Sabão".

**Resultado esperado:**
O sistema deve permitir a digitação de nomes de produtos com mais de 4 caracteres.

**Resultado obtido:**
O sistema permite apenas a digitação de 4 caracteres.

**Severidade:** Média

---

**Bug 06**

**Descrição:**
No campo "Quantidade em estoque", o sistema permite a digitação de valores fracionados, o que fere a regra de negócio. Além disso, a digitação é instável.

**Passos para reprodução:**
1. Dentro da área logada, clique em "Logística" e depois "Controle de estoque".
2. Clique no campo "Quantidade em estoque" e tente digitar um valor inteiro com até 5 caracteres.

**Resultado esperado:**
O sistema deve permitir a digitação de até 5 caracteres numéricos inteiros.

**Resultado obtido:**
O campo permite a digitação de valores fracionados, tornando a entrada instável e difícil. Não é possível digitar um valor inteiro corretamente.

**Severidade:** Alta

---

**Bug 07**

**Descrição:**
No campo "Preço", a digitação é instável e permite apenas uma casa decimal, impossibilitando a inserção de valores maiores que 9,99.

**Passos para reprodução:**
1. Dentro da área logada, clique em "Logística" e depois "Controle de estoque".
2. Clique no campo "Preço" e tente digitar um valor com até 2 casas decimais.

**Resultado esperado:**
O sistema deve permitir a digitação de preços com até 5 caracteres numéricos, incluindo até 2 casas decimais.

**Resultado obtido:**
A digitação é instável, e só é possível inserir um valor com uma casa decimal. Não é possível inserir valores superiores a 9,99.

**Severidade:** Alta

---

**Outros Problemas Encontrados:**

- **Campo "Descrição"**: Não é possível digitar mais de 4 caracteres, dificultando a descrição clara do produto.
- **Problema de Responsividade**: O container da seção "Controle de Estoque" está visivelmente descentralizado na página.
