const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const xpaths = require('../support/xpaths');

let driver;
const timeout = 400000; // Timeout padrão de 10 segundos

// Hooks: Inicialização e encerramento do WebDriver
Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
    await driver.quit();
});

// Passos do teste
Given('que estou no site da Condo', { timeout: 900000 }, async function () {
    await driver.get(xpaths.URL); // URL a ser definida
});

When('me direciono até {string}', async function (section) {
    let xpath;

    // Escolhe o XPath do elemento baseado no texto
    switch (section) {
        case "Receba nossa newsletter no seu e-mail":
            xpath = xpaths.XPATH_FORM; // Substitua com o XPath correto
            break;
        default:
            throw new Error(`Seção desconhecida: ${section}`);
    }

    // Localiza o elemento e realiza o scroll até ele
    const elemento = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", elemento);

    console.log(`Elemento "${section}" foi centralizado na tela.`);
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
