// Importe as bibliotecas necessárias para simular o teste
const { Builder, By, until } = require('selenium-webdriver');

async function TransferenciaValorDoAcimaLimite() {
  // Configuração do WebDriver (neste caso, Chrome)
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navega até a URL do banco
    await driver.get('https://www.bnb.gov.br/');

    // Login
    await driver.findElement(By.id('id_do_campo_usuario')).sendKeys('Cleibson Lima');
    await driver.findElement(By.id('id_do_campo_senha')).sendKeys('1234');
    await driver.findElement(By.id('id_do_botao_login')).click();

    // Saldo da conta do cliente antes da transferência
    const saldoAntes = await driver.findElement(By.id('id_do_campo_saldo')).getText();

    // tentando fazer uma transferência 
    await driver.findElement(By.id('id_do_link_transferencia')).click();
    await driver.findElement(By.id('id_do_campo_destinatario')).sendKeys('Severino Marcos');
    await driver.findElement(By.id('id_do_campo_valor')).sendKeys('5001');//poderia ser cinco mil e 1 centavo. 
    await driver.findElement(By.id('id_do_botao_confirmar_transferencia')).click();
    const saldoDepois = await driver.findElement(By.id('id_do_campo_saldo')).getText();

    // Aguarda a mensagem de erro ou sucesso ser exibida
    await driver.wait(until.elementLocated(By.id('id_da_mensagem_de_erro')), 5000);
    const mensagemErroPresente = await driver.findElement(By.id('id_da_mensagem_de_erro')).isDisplayed(); //verifica se o elemento da interface do usuário está visível na página web atual

    //Verificação final por meio do if
    if (mensagemErroPresente && saldoAntes === saldoDepois) {
      console.log('Teste passou: mensagem de erro exibida corretamente e saldo não foi alterado.');
    } else if (mensagemErroPresente && saldoAntes !== saldoDepois) {
      console.log('Teste falhou: mensagem de erro exibida, mas saldo não foi alterado.');
    } else if (saldoAntes !== saldoDepois) {
      console.log('Teste falhou: mensagem de erro não encontrada, mas saldo foi alterado.');
    } else {
      console.log('Teste passou: mensagem de erro não encontrada e saldo não foi alterado.');
    }
  } finally {
    await driver.quit();
  }
}
