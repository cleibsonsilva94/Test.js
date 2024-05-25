const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const xpaths = require('../support/xpaths');

let driver;

Given('que estou no site da Unimed', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(xpaths.URL);
    await driver.sleep(20000);
});

Given('aceito todos os cookies', async function () {
    await driver.findElement(By.xpath(xpaths.XPATH_ACEITAR_TODOS)).click();
});

When('navego para {string} e seleciono {string}', async function (menu, submenu) {
    let elemento = await driver.findElement(By.xpath(xpaths.XPATH_SERVICOS));
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", elemento);
    await driver.sleep(5000);
    await driver.findElement(By.xpath(xpaths.XPATH_PLANOS)).click();
});

When('escolho {string}', async function (tipoPessoa) {
    await driver.findElement(By.xpath(xpaths.XPATH_PESSOA_FISICA)).click();
    await driver.sleep(5000);
});

When('preencho o formulário com:', async function (dataTable) {
    const data = dataTable.rowsHash();
    await fillFormField(driver, xpaths.XPATH_CPF, data.cpf);
    await fillFormField(driver, xpaths.XPATH_NOME, data.nome);
    await fillFormField(driver, xpaths.XPATH_EMAIL, data.email);
    await fillFormField(driver, xpaths.XPATH_TELEFONE, data.telefone);
    await selectDropdown(driver, xpaths.XPATH_ESTADO, data.estado);
    await selectDropdown(driver, xpaths.XPATH_CIDADE, data.cidade);
});

When('indico que não possuo plano atualmente', async function () {
    await driver.findElement(By.xpath(xpaths.XPATH_NAO)).click();
    await driver.sleep(5000);
});

When('submeto a solicitação do plano', async function () {
    await driver.findElement(By.xpath(xpaths.XPATH_SOLICITAR_PLANO)).click();
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_CONFIRMAR)), 10000);
    await driver.findElement(By.xpath(xpaths.XPATH_CONFIRMAR)).click();
    await driver.sleep(5000);
});

Then('devo ver uma mensagem de sucesso {string}', async function (mensagemEsperada) {
    const elementoMensagemSucesso = await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_MENSAGEM_SUCESSO)), 10000);
    const textoMensagemSucesso = await elementoMensagemSucesso.getText();

    if (textoMensagemSucesso === mensagemEsperada) {
        console.log('A mensagem de sucesso esperada foi encontrada na página:', textoMensagemSucesso);
    } else {
        console.log('AVISO: A mensagem de sucesso esperada não foi encontrada na página.');
        throw new Error('Mensagem de sucesso não encontrada');
    }

    await driver.quit();
});

async function fillFormField(driver, xpath, value) {
    const element = await driver.findElement(By.xpath(xpath));
    await element.click();
    await driver.sleep(2000);
    await element.sendKeys(value);
}

async function selectDropdown(driver, arrowXpath, itemText) {
    await driver.findElement(By.xpath(arrowXpath)).click();
    await driver.wait(until.elementLocated(By.xpath(`//div[contains(text(),'${itemText}')]`)), 10000);
    await driver.findElement(By.xpath(`//div[contains(text(),'${itemText}')]`)).click();
}