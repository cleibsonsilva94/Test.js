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
    await driver.findElement(By.xpath("//img[contains(@alt, 'Máquina de Cortar Cabelo Mondial Hair Stylo 220V CR-02')]")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//div[@class='styles__BoxButtons-sc-f087e8f-2 bZyBkQ']//button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//button[@class='styles__ButtonSuccess-sc-ae78ac84-4 bXzTub']")).click();
    await driver.sleep(5000);

    // Guarda o nome do produto
    let produtoNoCarrinhoElement = await driver.findElement(By.xpath("//h3[@class='styles__TitleProduct-sc-432ccc7e-5 dXlifT']"));
    let produtoNoCarrinhoTexto = await produtoNoCarrinhoElement.getText();

    // Guarda o valor do produto
    let valorProdutoElement = await driver.findElement(By.xpath("//h3[@class='styles__TextPrice-sc-432ccc7e-11 gDOEip']"));
    let valorProdutoNaPagTexto = await valorProdutoElement.getText();
    let valorProdutoNaPag = parseFloat(valorProdutoNaPagTexto.replace(/[^\d.,]/g, '').replace(',', '.'));

    // Retornando à página inicial
    await driver.findElement(By.xpath('//div[@id="logo-wapper"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//*[contains(@class, 'styles__BaseHyperLink-sc-7fed0')]")).click();
    await driver.sleep(5000);

    // Verificando o carrinho
    await driver.findElement(By.xpath("//div[@data-cy='button-cart-modal-cart']")).click();
    await driver.sleep(5000);

    // Nome e Valor do produto
    let nomeProduto = "Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V";
    let valorProduto = 89.90;

    //Verificação Final por meio do condicional
    if (produtoNoCarrinhoTexto.includes(nomeProduto) && valorProdutoNaPag === valorProduto) {
      console.log(`O produto, ${nomeProduto}, está no carrinho e o valor está correto: R$${valorProduto.toFixed(2)} centavos.`);
    } else if (produtoNoCarrinhoTexto.includes(nomeProduto)) {
      console.log(`O produto, ${nomeProduto}, está no carrinho mas o valor não está correto! O valor presente é R$${valorProdutoNaPag.toFixed(2)} centavos e não R$${valorProduto.toFixed(2)} centavos.`);
    } else {
      console.log(`O produto, ${nomeProduto}, não está no carrinho. O produto presente é: ${produtoNoCarrinhoTexto}. Verifique por favor.`);
    }

    // Fechando o navegador
  } finally {
    await driver.quit();
  }
}
example();
