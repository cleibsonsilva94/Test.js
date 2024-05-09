// Abaixo maneiras de encontar elementos especifficos no html afim de interagir com ele:

button[@id='submit']: //Localiza um botão com o atributo id igual a 'submit'.
input[@class='username']: // Localiza um campo de entrada com o atributo class igual a 'username'.
a[@href='https://example.com']: // Localiza um link (<a>) com o atributo href igual a 'https://example.com'.
*[contains(text(), 'Enviar')]: // Localiza qualquer elemento que contenha o texto 'Enviar'. 
// O asterisco (*) representa qualquer tag HTML. O método contains(text(), 'Enviar') verifica se o texto 'Enviar' está contido em qualquer parte do conteúdo do elemento.
elemento[contains(@class, 'Parte do produto')] //Lembrar de colocar o // no inicio. 