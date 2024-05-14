### Verificação da Versão do Navegador

1. **Passo 1:** Verifique a versão do seu navegador acessando o link: [chrome://settings/help](chrome://settings/help).
2. A versão do navegador fica na parte destacada do ambiente.

![Captura de tela 2024-05-09 114249](https://github.com/cleibsonsilva94/Test.js/assets/156372072/2afae646-ded9-4f9f-b66a-6e08c488dbc7)

### Baixando o ChromeDriver

1. **Passo 1:** Acesse o [site de downloads do ChromeDriver](https://chromedriver.chromium.org/downloads).
2. Baixe a versão compatível com seu navegador.
3. Se a versão do seu Chrome começar com 114, instale a versão 114.
4. Baixe a versão compatível com o seu sistema operacional.
5. Extraia os arquivos para uma pasta específica.

### Instalação e Teste

1. **Passo 1:** Abra o VS Code ou sua ferramenta de edição de código preferida.
2. Clique em File -> Open Folder e selecione a pasta onde você extraiu o ChromeDriver.
3. Arraste o ChromeDriver para dentro do VS Code.

- Abrindo o arquivo:

![Captura de tela 2024-05-09 122750](https://github.com/cleibsonsilva94/Test.js/assets/156372072/e0af4235-1161-4080-bc5e-c6924b78c889)

- Selecionando a pasta:

![Captura de tela 2024-05-09 122941](https://github.com/cleibsonsilva94/Test.js/assets/156372072/50dd67e6-8b4b-4cd9-bc3c-549aab6c6a9f)

- Arrastando o ChromeDriver:

![Captura de tela 2024-05-09 124401](https://github.com/cleibsonsilva94/Test.js/assets/156372072/9426a441-cd73-4bb7-9fad-3b27c281d7a9)

2. **Passo 2:** Instale o Selenium via terminal usando o comando: `pip install selenium`.

![Captura de tela 2024-05-09 124401](https://github.com/cleibsonsilva94/Test.js/assets/156372072/5ba4bf70-99e7-4486-90bc-1eca900c4191)

- Feito isso, abra um arquivo em JavaScript e adicione o seguinte código:

```javascript
async function OpenURL() {
  let driver = await new Builder().forBrowser('chrome').build(); // Inicia uma instância do navegador Chrome
  try {
    await driver.get('https://www.ferreiracosta.com'); // Abre o site com a URL indicada
  } finally {
    await driver.quit(); // Fecha o navegador depois de abrir a URL
  }
}
```
Observe abaixo o teste que fiz:

![Captura de tela 2024-05-09 124401](https://github.com/cleibsonsilva94/Test.js/assets/156372072/e34e4964-f719-430c-9f62-820fb29753a4)

E pronto, a magia acontece! A partir daí, você consegue criar automações diversas usando o Selenium WebDriver.

Se tiver dúvidas em relação ao terminal, veja esse [repositório](https://github.com/cleibsonsilva94/DiaryOfAnApprentice01/blob/main/O%20que%20%C3%A9%20o%20terminal%3F.md).
