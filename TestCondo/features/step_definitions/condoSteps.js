const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const xpaths = require('../support/xpaths');

let driver;
const timeout = 10000; // Timeout padrão de 10 segundos

// Hooks: Inicialização e encerramento do WebDriver
Before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
});

After(async function() {
    await driver.quit();
});

// Passos do teste
Given('que estou no site da Condo', { timeout: 60000 }, async function () {
    await driver.get(xpaths.URL); // URL a ser definida
});

When('me direciono até {string}', async function (section) {
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_FORM)), timeout);
    await driver.findElement(By.xpath(xpaths.XPATH_FORM)).click();
});

When('clico em {string}', async function (campo) {
    if (campo === "Seu nome") {
        await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_NOME)), timeout);
        await driver.findElement(By.xpath(xpaths.XPATH_NOME)).click();
    }
});

When('preencho o formulário com:', async function (dataTable) {
    const data = dataTable.rowsHash();

    // Preenche os campos do formulário com os valores fornecidos
    await fillFormField(driver, xpaths.XPATH_NOME, data.nome);
    await fillFormField(driver, xpaths.XPATH_EMAIL, data.email);
});

When('clico em {string}', async function (botao) {
    if (botao === "Assine agota") {
        await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_BOTAO_ASSINAR)), timeout);
        await driver.findElement(By.xpath(xpaths.XPATH_BOTAO_ASSINAR)).click();
    }
});

Then('devo ver uma mensagem de sucesso {string}', async function (mensagemEsperada) {
    const elementoMensagemSucesso = await driver.findElement(By.xpath(xpaths.XPATH_MENSAGEM_SUCESSO));
    const textoMensagemSucesso = await elementoMensagemSucesso.getText();

    assert.strictEqual(
        textoMensagemSucesso,
        mensagemEsperada,
        'A mensagem de sucesso não corresponde ao esperado!'
    );
    console.log('Mensagem de sucesso validada:', textoMensagemSucesso);
});

// Funções auxiliares
async function fillFormField(driver, xpath, value) {
    const element = await driver.findElement(By.xpath(xpath));
    await element.click();
    await element.clear();
    await element.sendKeys(value);
}
