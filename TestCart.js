const { Builder, By, until } = require('selenium-webdriver');

// Função auxiliar para clicar em um elemento e aguardar um curto período
async function clickElement(driver, xpath, sleepTime = 2000) {
  await driver.findElement(By.xpath(xpath)).click();
  await driver.sleep(sleepTime);
}

// Função auxiliar para enviar texto para um campo e aguardar um curto período
async function sendKeysToElement(driver, id, text, sleepTime = 2000) {
  const element = await driver.findElement(By.id(id));
  await element.click();
  await driver.sleep(sleepTime);
  await element.sendKeys(text);
  await driver.sleep(sleepTime);
}

// Função principal
async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  // Definição dos XPaths usados
  const URL = 'https://www.ferreiracosta.com';
  const XPATH_CLOSE_COOKIE_POPUP = "//button[@data-cy='button-close-modal-cookie']";
  const XPATH_SEARCH_BUTTON = "//span[contains(@class, 'SearchProdu')]";
  const XPATH_PRODUCT_IMAGE = "//img[contains(@alt, 'Máquina de Cortar Cabelo Mondial Hair Stylo 220V CR-02')]";
  const XPATH_ADD_TO_CART_BUTTON = "//div[@class='styles__BoxButtons-sc-f087e8f-2 bZyBkQ']//button";
  const XPATH_PROCEED_TO_CART_BUTTON = "//button[@class='styles__ButtonSuccess-sc-ae78ac84-4 bXzTub']";
  const XPATH_PRODUCT_NAME_IN_CART = "//h3[@class='styles__TitleProduct-sc-432ccc7e-5 dXlifT']";
  const XPATH_PRODUCT_PRICE_IN_CART = "//h3[@class='styles__TextPrice-sc-432ccc7e-11 gDOEip']";
  const XPATH_LOGO = '//div[@id="logo-wapper"]';
  const XPATH_MENU_ITEM = "//*[contains(@class, 'styles__BaseHyperLink-sc-7fed0')]";
  const XPATH_CART_BUTTON = "//div[@data-cy='button-cart-modal-cart']";

  // TESTE
  try {
    await driver.get(URL);
    await clickElement(driver, XPATH_CLOSE_COOKIE_POPUP);

    // Interagindo com a barra de pesquisa
    await sendKeysToElement(driver, 'searchProduct', 'Máquina de cortar cabelo', 5000);
    await clickElement(driver, XPATH_SEARCH_BUTTON, 5000);

    // Escolhendo um produto depois da busca
    await clickElement(driver, XPATH_PRODUCT_IMAGE, 5000);
    await clickElement(driver, XPATH_ADD_TO_CART_BUTTON, 5000);
    await clickElement(driver, XPATH_PROCEED_TO_CART_BUTTON, 5000);

    // Guarda o nome do produto e seu valor
    const produtoNoCarrinhoElement = await driver.findElement(By.xpath(XPATH_PRODUCT_NAME_IN_CART));
    const produtoNoCarrinhoTexto = await produtoNoCarrinhoElement.getText();
    const valorProdutoElement = await driver.findElement(By.xpath(XPATH_PRODUCT_PRICE_IN_CART));
    const valorProdutoNaPag = await valorProdutoElement.getText();
    const valorProdutoNaPag = parseFloat(valorProdutoNaPag.replace(/[^\d.,]/g, '').replace(',', '.'));

    // Retornando à página inicial
    await clickElement(driver, XPATH_LOGO, 5000);
    await clickElement(driver, XPATH_MENU_ITEM, 5000);

    // Verificando o carrinho
    await clickElement(driver, XPATH_CART_BUTTON, 5000);
    const nomeProdutoEsperado = "Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V";
    const valorProdutoEsperado = 89.90;

    // VERIFICAÇÃO FINAL
    if (produtoNoCarrinhoTexto.includes(nomeProdutoEsperado) && valorProdutoNaPag === valorProdutoEsperado) {
      console.log(`O produto, ${nomeProdutoEsperado}, está no carrinho e o valor está correto: R$${valorProdutoEsperado.toFixed(2)}.`);
    } else if (produtoNoCarrinhoTexto.includes(nomeProdutoEsperado)) {
      console.log(`O produto, ${nomeProdutoEsperado}, está no carrinho mas o valor não está correto! O valor presente é R$${valorProdutoNaPag.toFixed(2)} e não R$${valorProdutoEsperado.toFixed(2)}.`);
    } else {
      console.log(`O produto, ${nomeProdutoEsperado}, não está no carrinho. O produto presente é: ${produtoNoCarrinhoTexto}. Verifique por favor.`);
    }

  } finally {
    await driver.quit();
  }
}

example();
