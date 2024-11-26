/* Proz JS I - D_extra 5_3_116257

Instruções do projeto
Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.*/

/* --------     metodo simples    ---------- */

let elementCreateH1 = document.createElement("h1");

elementCreateH1.innerText = "Metodo simples - Venda de produto";

elementCreateH1.id = "titulo";

console.log(elementCreateH1);

let elementDiv = document.createElement("div");

console.log(elementDiv);

let elementP1 = document.createElement("p");
let elementP2 = document.createElement("p");
let elementP3 = document.createElement("p");

elementP1.innerText = "Bola de futebol";
elementP2.innerText = "Material em que a bola foi confeccionada - couro";
elementP3.innerText = "R$ 59.90";

let elementoBody = document.querySelector("body");
elementoBody.appendChild(elementCreateH1);
elementoBody.appendChild(elementDiv);

let elementProduto = document.querySelector("div");

elementProduto.appendChild(elementP1);
elementProduto.appendChild(elementP2);
elementProduto.appendChild(elementP3);

/* --------     final do metodo simples    ---------- */

/* --------     metodo complexo    ---------- */

const elementDiv2 = document.createElement("div");

elementDiv2.innerText = "testando criação da tag"

console.log(elementDiv2);

elementDiv2.innerHTML = 
`<h1>Metodo complexo - Venda de produto</h1>
<p>Coleira para pet</p>
<p>Coleira feita de material resistente e anti-pulga</p>
<p>R$ 49.90</p>`

elementProduto.appendChild(elementDiv2);

/* --------     Final do metodo complexo    ---------- */


