const { Builder, By, until } = require('selenium-webdriver');

// PREPARAÇÃO DO ANBIENTE PARA TESTE DE FORMULARIO. 
async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.unimed.coop.br/site/'); 
    await driver.sleep(20000);
    await driver.findElement(By.xpath("//div[@class='cf1lHZ cf2MAH cf3l36']//*[@aria-label='Aceitar todos']")).click();

    //VAI ATÉ PÉ DA PÁG 

    // Encontra o elemento e rola até ele. 
    let elemento = await driver.findElement(By.xpath("//p[contains(@class, 'menuAcessoRapid') and contains(text(), 'Serviços')]"));
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", elemento); 
    await driver.sleep(5000); 
    await driver.findElement(By.xpath("//a[contains(@class, 'menuAcessoRapido') and contains(text(), 'Planos')]")).click();

    //JÁ NA PÁG DO FORMULARIO

    await driver.findElement(By.xpath("//button[contains(@class, 'm-2 m-s') and contains(text(), 'PESSOA FÍSICA')]")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("(//div[@class='form-group'])[1]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//input[@name='cpf'])[1]")).sendKeys('702.141.454-41');
    await driver.findElement(By.xpath("(//div[@class='form-group'])[2]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//input[@name='nome'])[1]")).sendKeys('Cleibson Silva');
    await driver.findElement(By.xpath("(//div[@class='form-group'])[3]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//input[@name='email'])")).sendKeys('Test01@gmail.com');
    await driver.findElement(By.xpath("(//div[@class='form-group'])[4]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//input[@name='telefone'])")).sendKeys('8199318-7771');
    await driver.findElement(By.xpath("(//span[@class='Select-arrow-zone'])[1]")).click();
    await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Pernambuco')]")), 10000);
    await driver.findElement(By.xpath("//div[contains(text(),'Pernambuco')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//span[@class='Select-arrow-zone'])[2]")).click();
    await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Abreu e Lima')]")), 10000);
    await driver.findElement(By.xpath("//div[contains(text(),'Abreu e Lima')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//div[@class='Select-value'])[3]")).click();
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath("(//div[@class='Select-value'])[3]//*[contains(text(),'0 a 18')]")), 10000);
    await driver.findElement(By.xpath("(//div[@class='Select-value'])[3]//*[contains(text(),'0 a 18')]")).click(); 
    await driver.sleep(2000);

    
  } finally {
    await driver.quit();
  }
}
example();
