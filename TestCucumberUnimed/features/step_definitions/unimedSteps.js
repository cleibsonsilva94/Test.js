const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const xpaths = require('../support/xpaths');

let driver;
const timeout = 800000; // Timeout padrão de 10 segundos

Before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
});

After(async function() {
    await driver.quit();
});

Given('que estou no site da Unimed', { timeout: 60000 }, async function () {
    await driver.get(xpaths.URL);
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_ACEITAR_TODOS)), timeout);
});

Given('aceito todos os cookies', async function () {
    await driver.findElement(By.xpath(xpaths.XPATH_ACEITAR_TODOS)).click();
});

When('clico em {string}', function (menu, callback) {
    driver.findElement(By.xpath(xpaths.XPATH_PLANOS)).click()
        .then(() => driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_PESSOA_FISICA)), timeout))
        .then(() => callback())
        .catch(callback);
});


When('escolho {string}', async function (tipoPessoa) {
    await driver.findElement(By.xpath(xpaths.XPATH_PESSOA_FISICA)).click();
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_CPF)), timeout);
});

When('preencho o formulário com:', async function (dataTable) {
    const data = dataTable.rowsHash();
    await selectDropdown(driver, xpaths.XPATH_ESTADO, data.estado);
    await fillFormField(driver, xpaths.XPATH_CPF, data.cpf);
    await fillFormField(driver, xpaths.XPATH_NOME, data.nome);
    await fillFormField(driver, xpaths.XPATH_EMAIL, data.email);
    await fillFormField(driver, xpaths.XPATH_TELEFONE, data.telefone);
    await selectDropdown(driver, xpaths.XPATH_CIDADE, data.cidade);
});

When('indico que não possuo plano atualmente', async function () {
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_NAO)), timeout);
    await driver.findElement(By.xpath(xpaths.XPATH_NAO)).click();
});

When('submeto a solicitação do plano', async function () {
    await driver.findElement(By.xpath(xpaths.XPATH_SOLICITAR_PLANO)).click();
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_CONFIRMAR)), timeout);
    await driver.findElement(By.xpath(xpaths.XPATH_CONFIRMAR)).click();
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_MENSAGEM_SUCESSO)), timeout);
});

Then('devo ver uma mensagem de sucesso {string}', async function (mensagemEsperada) {
    const elementoMensagemSucesso = await driver.findElement(By.xpath(xpaths.XPATH_MENSAGEM_SUCESSO));
    const textoMensagemSucesso = await elementoMensagemSucesso.getText();

    if (textoMensagemSucesso === mensagemEsperada) {
        console.log('A mensagem de sucesso esperada foi encontrada na página:', textoMensagemSucesso);
    } else {
        console.log('AVISO: A mensagem de sucesso esperada não foi encontrada na página.');
        throw new Error('Mensagem de sucesso não encontrada');
    }
});

async function fillFormField(driver, xpath, value) {
    const element = await driver.findElement(By.xpath(xpath));
    await element.click();
    await element.sendKeys(value);
}

async function selectDropdown(driver, arrowXpath, itemText) {
    await driver.findElement(By.xpath(arrowXpath)).click();
    await driver.wait(until.elementLocated(By.xpath(`//div[contains(text(),'${itemText}')]`)), timeout);
    await driver.findElement(By.xpath(`//div[contains(text(),'${itemText}')]`)).click();
}
