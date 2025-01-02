const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const xpaths = require('../support/xpaths');
//Comando para testar: npx cucumber-js
let driver;
const timeout = 300000;

Before(async function () {
  driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  await driver.quit();
});

Given('que estou no site da Ferreira Costa', async function () {
  await driver.get(xpaths.URL);
});

When('fecho o popup de cookies', async function () {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_CLOSE_COOKIE_POPUP)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_CLOSE_COOKIE_POPUP)).click();
});

When('realizo uma busca por {string}', async function (produto) {
  await driver.wait(until.elementLocated(By.id('searchProduct')), timeout);
  await driver.findElement(By.id('searchProduct')).sendKeys(produto);
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_SEARCH_BUTTON)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_SEARCH_BUTTON)).click();
});

When('seleciono o produto na lista de resultados', async function () {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_PRODUCT_IMAGE)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_PRODUCT_IMAGE)).click();
});

When('adiciono o produto ao carrinho', async function () {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_ADD_TO_CART_BUTTON)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_ADD_TO_CART_BUTTON)).click();
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_PROCEED_TO_CART_BUTTON)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_PROCEED_TO_CART_BUTTON)).click();
});

When('clico no logo para retornar à página inicial', async function () {
  const logoElement = await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_LOGO)), timeout);
  await driver.wait(until.elementIsVisible(logoElement), timeout).click();
});

When('vou para o carrinho novamente', async function () {
  const cartButtonElement = await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_CART_BUTTON)), timeout);
  await driver.wait(until.elementIsVisible(cartButtonElement), timeout);
  await cartButtonElement.click();
  const cartButton = await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_CART)), timeout);
  await driver.wait(until.elementIsVisible(cartButton), timeout);
  await cartButton.click();
});

Then('devo ver o produto no carrinho com o nome {string}', async function (nomeProdutoEsperado) {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_PRODUCT_NAME_IN_CART)), timeout);
  const produtoNoCarrinhoElement = await driver.findElement(By.xpath(xpaths.XPATH_PRODUCT_NAME_IN_CART));
  const produtoNoCarrinhoTexto = await produtoNoCarrinhoElement.getText();

  if (!produtoNoCarrinhoTexto.includes(nomeProdutoEsperado)) {
    throw new Error(`Produto esperado no carrinho: ${nomeProdutoEsperado}, Produto encontrado: ${produtoNoCarrinhoTexto}`);
  }
});

Then('o produto deve conter o seguinte preço {string}', async function (valorProdutoEsperado) {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_PRODUCT_PRICE_IN_CART)), timeout);
  const valorProdutoElement = await driver.findElement(By.xpath(xpaths.XPATH_PRODUCT_PRICE_IN_CART));
  const valorProdutoNaPagText = await valorProdutoElement.getText();
  const formattedValue = valorProdutoNaPagText.replace(/[^\d.,]/g, '');
  const valorProdutoNaPag = parseFloat(formattedValue.replace(',', '.'));

  if (valorProdutoNaPag !== parseFloat(valorProdutoEsperado)) {
    throw new Error(`Preço esperado no carrinho: ${valorProdutoEsperado}, Preço encontrado: ${valorProdutoNaPag}`);
  }
});