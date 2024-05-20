const { Builder, By, until } = require('selenium-webdriver');

// Funções alxiliadoras. 
async function fillFormField(driver, xpath, value) {
  const element = await driver.findElement(By.xpath(xpath));
  await element.click();
  await driver.sleep(2000); 
  await element.sendKeys(value);
}

// Funções alxiliadoras. 
async function selectDropdown(driver, arrowXpath, itemText) {
  await driver.findElement(By.xpath(arrowXpath)).click();
  await driver.wait(until.elementLocated(By.xpath(`//div[contains(text(),'${itemText}')]`)), 10000);
  await driver.findElement(By.xpath(`//div[contains(text(),'${itemText}')]`)).click();
}
//Juntando todos os Xpath
async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  const URL = 'https://www.unimed.coop.br/site/';
  const XPATH_ACEITAR_TODOS = "//div[@class='cf1lHZ cf2MAH cf3l36']//*[@aria-label='Aceitar todos']";
  const XPATH_SERVICOS = "//p[contains(@class, 'menuAcessoRapid') and contains(text(), 'Serviços')]";
  const XPATH_PLANOS = "//a[contains(@class, 'menuAcessoRapido') and contains(text(), 'Planos')]";
  const XPATH_PESSOA_FISICA = "//button[contains(@class, 'm-2 m-s') and contains(text(), 'PESSOA FÍSICA')]";
  const XPATH_CPF = "(//input[@name='cpf'])[1]";
  const XPATH_NOME = "(//input[@name='nome'])[1]";
  const XPATH_EMAIL = "(//input[@name='email'])";
  const XPATH_TELEFONE = "(//input[@name='telefone'])";
  const XPATH_ESTADO = "(//span[@class='Select-arrow-zone'])[1]";
  const XPATH_CIDADE = "(//span[@class='Select-arrow-zone'])[2]";
  const XPATH_NAO = "//div[@class='col-12 col-sm-6 text-center']//*[contains(text(),'Não')]";
  const XPATH_SOLICITAR_PLANO = "//a[@id='solicita_plano_pf']";
  const XPATH_CONFIRMAR = "(//button[@type='button'])[3]";
  const XPATH_MENSAGEM_SUCESSO = "//div//*[contains(text(), 'Sua solicitação foi enviada com sucesso e uma cópia será encaminhada para o seu e-mail!')]";
  // Ações na pág 
  try {
    await driver.get(URL);
    await driver.sleep(20000);
    await driver.findElement(By.xpath(XPATH_ACEITAR_TODOS)).click();

    let elemento = await driver.findElement(By.xpath(XPATH_SERVICOS));
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", elemento);
    await driver.sleep(5000);
    await driver.findElement(By.xpath(XPATH_PLANOS)).click();

    await driver.findElement(By.xpath(XPATH_PESSOA_FISICA)).click();
    await driver.sleep(5000);

    await fillFormField(driver, XPATH_CPF, '012.361.971-86');
    await fillFormField(driver, XPATH_NOME, 'Testador da Silva Teste');
    await fillFormField(driver, XPATH_EMAIL, 'testadordasilvateste@gmail.com');
    await fillFormField(driver, XPATH_TELEFONE, '8100000001');

    await selectDropdown(driver, XPATH_ESTADO, 'Pernambuco');
    await driver.sleep(5000);
    await selectDropdown(driver, XPATH_CIDADE, 'Abreu e Lima');
    await driver.sleep(5000);
    await driver.findElement(By.xpath(XPATH_NAO)).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath(XPATH_SOLICITAR_PLANO)).click();
    await driver.wait(until.elementLocated(By.xpath(XPATH_CONFIRMAR)), 10000);
    await driver.findElement(By.xpath(XPATH_CONFIRMAR)).click();
    await driver.sleep(5000);

    const elementoMensagemSucesso = await driver.wait(until.elementLocated(By.xpath(XPATH_MENSAGEM_SUCESSO)), 10000); // Guardando a mensagem de sucesso para veriicação no if
    // Verificação final por meio do IF 
    if (elementoMensagemSucesso) {
      const textoMensagemSucesso = await elementoMensagemSucesso.getText();
      const mensagemEsperada = 'Sua solicitação foi enviada com  e uma cópia será encaminhada para o seu e-mail!';

      if (textoMensagemSucesso === mensagemEsperada) {
        console.log('A mensagem de sucesso esperada foi encontrada na página:', textoMensagemSucesso);
      } else {
        console.log('AVISO: A mensagem de sucesso encontrada na página não corresponde à mensagem esperada:', textoMensagemSucesso);
      }
    } else {
      console.log('AVISO: A mensagem de sucesso esperada não foi encontrada na página.');
    }
  //Finalizando o navegador
  } finally {
    await driver.quit();
  }
}

example();
