const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const xpaths = require('../support/xpaths');

let driver;
const timeout = 500000; 

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
});

After(async function () {
    await driver.quit();
});

Given('que estou no site da Condo', { timeout: 900000 }, async function () {
    await driver.get(xpaths.URL);
});

When('eu clico em {string}', async function (campo) {
    let xpath;
    switch (campo) {
        case "Seu nome":
            xpath = xpaths.XPATH_NOME;
            break;
        default:
            throw new Error(`Campo desconhecido: ${campo}`);
    }
    const elemento = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", elemento);
    await elemento.click();
});

When('preencho o formulário com:', async function (dataTable) {
    const data = dataTable.rowsHash();
    await fillFormField(driver, xpaths.XPATH_NOME, data.nome);
    await fillFormField(driver, xpaths.XPATH_EMAIL, data.email);
});

async function fillFormField(driver, xpath, value) {
    const campo = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", campo);
    await campo.click();
    await campo.sendKeys(value);
}

When('clico em {string}', async function (botao) {
    await driver.findElement(By.xpath(xpaths.XPATH_BOTAO_ASSINAR)).click();
    await driver.sleep(4000);
});

Then('devo ver uma mensagem de sucesso {string}', async function (mensagemEsperada) {
    const elementoMensagemSucesso = await driver.wait(
        until.elementLocated(By.xpath(xpaths.XPATH_MENSAGEM_SUCESSO)),
        timeout,
        'Mensagem de sucesso não apareceu dentro do tempo limite.'
    );

    const textoMensagemSucesso = await elementoMensagemSucesso.getText();

    assert.strictEqual(
        textoMensagemSucesso,
        mensagemEsperada,
        'A mensagem de sucesso não corresponde à esperada.'
    );

    console.log('Mensagem de sucesso validada:', textoMensagemSucesso);
});
