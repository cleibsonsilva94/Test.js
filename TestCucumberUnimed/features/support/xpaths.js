module.exports = {
    URL: 'https://www.unimed.coop.br/site',
    XPATH_ACEITAR_TODOS: '//div[@class="cf1lHZ cf2L3T"]//button[@title="Aceitar todos cookie"]',
    XPATH_PLANOS: '(//div[contains(@class, "menu")]//span[@class="text-nowrap"])[1]', 
    XPATH_PESSOA_FISICA: "//button[contains(@class, 'm-2 m-s') and contains(text(), 'PESSOA FÍSICA')]",
    XPATH_CPF: "(//input[@name='cpf'])[1]",
    XPATH_NOME: "(//input[@name='nome'])[1]",  
    XPATH_EMAIL: "(//input[@name='email'])",
    XPATH_TELEFONE: "(//input[@name='telefone'])",
    XPATH_ESTADO:  "(//span[@class='Select-arrow-zone'])[1]",
    XPATH_CIDADE: "(//span[@class='Select-arrow-zone'])[2]",
    XPATH_NAO: "//div[@class='col-12 col-sm-6 text-center']//*[contains(text(),'Não')]",
    XPATH_SOLICITAR_PLANO: "//a[@id='solicita_plano_pf']",
    XPATH_CONFIRMAR: "(//button[@type='button'])[3]",
    XPATH_MENSAGEM_SUCESSO: "//div//*[contains(text(), 'Sua solicitação foi enviada com sucesso e uma cópia será encaminhada para o seu e-mail!')]"
};

/* 
 npx cucumber-js 
*/