// Importe as bibliotecas necessárias para simular o teste
const { Builder, By, until } = require('selenium-webdriver');

async function TransferenciaValorDoAcimaLimite() {
  // Configuração do WebDriver (neste caso, Chrome)
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navega até a URL do banco
    await driver.get('URL_DO_BANCO');

    // Login
    await driver.findElement(By.id('id_do_campo_usuario')).sendKeys('usuario');
    await driver.findElement(By.id('id_do_campo_senha')).sendKeys('senha');
    await driver.findElement(By.id('id_do_botao_login')).click();
    
    // Saldo da conta do cliente antes da transferência
    const saldoAntes = await driver.findElement(By.id('id_do_campo_saldo')).getText();

    // tentando fazer uma transferência 
    await driver.findElement(By.id('id_do_link_transferencia')).click();
    await driver.findElement(By.id('id_do_campo_destinatario')).sendKeys('Chico Barbeiro');
    await driver.findElement(By.id('id_do_campo_valor')).sendKeys('5001');//poderia ser cinco mil e 1 centavo. 
    await driver.findElement(By.id('id_do_botao_confirmar_transferencia')).click();
    const saldoDepois = await driver.findElement(By.id('id_do_campo_saldo')).getText();

    // Aguarda a mensagem de erro ou sucesso ser exibida
    await driver.wait(until.elementLocated(By.id('id_da_mensagem_de_erro')), 5000);

    // Verifica se a mensagem de erro está presente na página
    const mensagemErroPresente = await driver.findElement(By.id('id_da_mensagem_de_erro')).isDisplayed();

    // Se a mensagem de erro estiver presente, verifica se o saldo não foi alterado
    if (mensagemErroPresente) {
      // Verifica se o saldo antes da transferência é igual ao saldo depois da transferência
      if (saldoAntes === saldoDepois) {
        console.log('Teste passou: mensagem de erro exibida corretamente e saldo não foi alterado.');
      } else {
        console.log('Teste falhou: mensagem de erro exibida, mas saldo foi alterado.');
      }
    } else {
      console.log('Teste falhou: mensagem de erro não encontrada.');
    }
  } finally {
    // Fecha o navegador após o teste ser concluído
    await driver.quit();
  }
}
