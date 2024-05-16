const { Builder, By, until } = require('selenium-webdriver'); // Importação dos recursos necessários do selenium-webdriver

// PREPARAÇÃO DO ANBIENTE PARA TESTE DE FORMULARIO. 
async function example() {
  let driver = await new Builder().forBrowser('chrome').build(); // Inicia uma instância do navegador Chrome
  try {
    await driver.get('https://www.unimed.coop.br/site/'); // Abre o site com a URL indicada
    await driver.sleep(20000);
    await driver.findElement(By.xpath("//div[@class='cf1lHZ cf2MAH cf3l36']//*[@aria-label='Aceitar todos']")).click(); // Fecha o pop-up de cookies abaixo da tela

    //VAI ATÉ PÉ DA PÁG 

    // Encontra o elemento e rola até ele. 
    let elemento = await driver.findElement(By.xpath("//p[contains(@class, 'menuAcessoRapid') and contains(text(), 'Serviços')]")); // Segue até elemento
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", elemento); // block: 'center' centraliza o elemento na janela do navegador.
    // Aguarde um breve momento para garantir que o elemento esteja visível após a rolagem
    await driver.sleep(5000); 
    await driver.findElement(By.xpath("//a[contains(@class, 'menuAcessoRapido') and contains(text(), 'Planos')]")).click(); //Clica no "Plano" usando um xpath usando o texto.

    //JÁ NA PÁG DO FORMULARIO

    await driver.findElement(By.xpath("//button[contains(@class, 'm-2 m-s') and contains(text(), 'PESSOA FÍSICA')]")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("(//div[@class='form-group'])[1]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//input[@name='cpf'])[1]")).sendKeys('702.141.454-41');
    await driver.findElement(By.xpath("(//div[@class='form-group'])[2]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//input[@name='nome'])[1]")).sendKeys('Cleibson Silva');
    





































    /*
        // Escolhendo um produto depois do search 
        await driver.findElement(By.xpath("//img[contains(@alt, 'Máquina Elétrica de Cortar Cabelo Cadence CAB181 220V')]")).click();
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
        */
    // Fechando o navegador
  } finally {
    await driver.quit();
  }
}
example();
