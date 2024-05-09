// ABAIXO COMANDOS MAIS USADOS.



// Navega para uma determinada URL
await driver.get('https://www.example.com');

// Localiza um único elemento na página usando um seletor
await driver.findElement(By.id('elementId'));

// Localiza todos os elementos correspondentes ao seletor especificado
await driver.findElements(By.className('className'));

// Clica no elemento
await element.click();

// Envia texto para um campo de entrada
await element.sendKeys('texto');

// Obtém o texto do elemento
await element.getText();



// RELACIONADOS A URL



// Navega para a URL desejada
await driver.get('https://www.example.com');

// Captura o título da página
const pageTitle = await driver.getTitle();
console.log('Título da página:', pageTitle);

// Captura a URL atual
const currentURL = await driver.getCurrentUrl();
console.log('URL atual:', currentURL);

// Captura o HTML da página
const pageSource = await driver.getPageSource();
console.log('Conteúdo da página:', pageSource);

// Você também pode interagir com os elementos na página, clicar em botões, 
//preencher formulários, etc.

finally {
    await driver.quit(); // Garante que o site foi fechado.
}


//LOCALIZADORES


    // Localiza um elemento usando ID
    const elementoID = await driver.findElement(By.id('elementoID'));
    console.log('Elemento encontrado usando ID:', elementoID);

    // Localiza um elemento usando seletor CSS
    const elementoCSS = await driver.findElement(By.css('.classeDoElemento'));
    console.log('Elemento encontrado usando seletor CSS:', elementoCSS);

    // Localiza um elemento usando XPath
    const elementoXPath = await driver.findElement(By.xpath('//div[@class="nomeDaClasse"]'));
    console.log('Elemento encontrado usando XPath:', elementoXPath);

    // Localiza um elemento usando nome do elemento
    const elementoTagName = await driver.findElement(By.tagName('a'));
    console.log('Elemento encontrado usando nome do elemento:', elementoTagName);

    // Localiza um elemento usando nome da classe
    const elementoClassName = await driver.findElement(By.className('nomeDaClasse'));
    console.log('Elemento encontrado usando nome da classe:', elementoClassName);


    //CLIKS

    await driver.findElement(By.seletorDoElemento).click()

    await driver.findElement(By.id('idDoElemento')).click();

    await driver.findElement(By.className('classeDoElemento')).click();

    await driver.findElement(By.css('seletorCSS')).click();

    await driver.findElement(By.xpath('caminhoXPath')).click();


