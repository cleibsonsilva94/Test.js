const { Builder, By, until } = require('selenium-webdriver'); // Importação dos recursos necessários do selenium-webdriver

// Preparação do ambiente
async function example() {
  let driver = await new Builder().forBrowser('chrome').build(); // Inicia uma instância do navegador Chrome
  try {
    await driver.get('https://www.ferreiracosta.com'); // Abre o site com a URL indicada
    await driver.findElement(By.xpath("//button[@data-cy='button-close-modal-cookie']")).click(); // Fecha o pop-up de cookies abaixo da tela

// Interagindo com o search
    await driver.findElement(By.id('searchProduct')).click(); 
    await driver.sleep(5000); // Espera por 5 segundos (Pausa necessária para garantir carregamento total dos elementos)
    await driver.findElement(By.id('searchProduct')).sendKeys('Máquina de cortar cabelo');
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//span[contains(@class, 'SearchProdu')]")).click();
    await driver.sleep(5000);

// Escolhendo um produto depois do search 
    await driver.findElement(By.xpath("//img[contains(@alt, 'Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V')]")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//div[@class='styles__BoxButtons-sc-f087e8f-2 bZyBkQ']//button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//button[@class='styles__ButtonSuccess-sc-ae78ac84-4 bXzTub']")).click(); 
    await driver.sleep(5000);

// Retornando à página inicial
    await driver.findElement(By.xpath('//div[@id="logo-wapper"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//*[contains(@class, 'styles__BaseHyperLink-sc-7fed0')]")).click(); 
    await driver.sleep(5000);

// Verificando o carrinho
    await driver.findElement(By.xpath("//div[@data-cy='button-cart-modal-cart']")).click();
      await driver.sleep(5000);
    let produtoNoCarrinho = await driver.findElements(By.xpath("//img[contains(@alt, 'Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V')]"));
    if (produtoNoCarrinho.length > 0) {
      console.log("O produto está no carrinho.");
    } else {
      console.log("O produto não está no carrinho.");
    }

// Fechando o navegador
  } finally {
    await driver.quit(); // Fecha o navegador
  }
}
example();