
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const xpaths = require('../support/xpaths');

let driver;

Given('que estou no site da Ferreira Costa', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get(xpaths.URL);
});

When('eu fecho o popup de cookies', async function () {
  await driver.findElement(By.xpath(xpaths.XPATH_CLOSE_COOKIE_POPUP)).click();
});

When('eu realizo uma busca por {string}', async function (produto) {
  await driver.findElement(By.id('searchProduct')).sendKeys(produto);
  await driver.findElement(By.xpath(xpaths.XPATH_SEARCH_BUTTON)).click();
});

When('eu seleciono o produto na lista de resultados', async function () {
  await driver.findElement(By.xpath(xpaths.XPATH_PRODUCT_IMAGE)).click();
});

When('eu adiciono o produto ao carrinho', async function () {
  await driver.findElement(By.xpath(xpaths.XPATH_ADD_TO_CART_BUTTON)).click();
  await driver.findElement(By.xpath(xpaths.XPATH_PROCEED_TO_CART_BUTTON)).click();
});

Then('eu devo ver o produto no carrinho com o nome {string}', async function (nomeProdutoEsperado) {
  const produtoNoCarrinhoElement = await driver.findElement(By.xpath(xpaths.XPATH_PRODUCT_NAME_IN_CART));
  const produtoNoCarrinhoTexto = await produtoNoCarrinhoElement.getText();
  if (!produtoNoCarrinhoTexto.includes(nomeProdutoEsperado)) {
    throw new Error(`Produto esperado no carrinho: ${nomeProdutoEsperado}, Produto encontrado: ${produtoNoCarrinhoTexto}`);
  }
});

Then('o preço do produto no carrinho deve ser {string}', async function (valorProdutoEsperado) {
  const valorProdutoElement = await driver.findElement(By.xpath(xpaths.XPATH_PRODUCT_PRICE_IN_CART));
  const valorProdutoNaPagText = await valorProdutoElement.getText();
  const valorProdutoNaPag = parseFloat(valorProdutoNaPagText.replace(/[^\d.,]/g, '').replace(',', '.'));
  if (valorProdutoNaPag !== parseFloat(valorProdutoEsperado)) {
    throw new Error(`Preço esperado no carrinho: ${valorProdutoEsperado}, Preço encontrado: ${valorProdutoNaPag}`);
  }
});

After(async function () {
  await driver.quit();
});