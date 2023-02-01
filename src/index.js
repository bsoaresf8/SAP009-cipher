import cipher from './cipher.js';
const textAreaCifrarDecifrar= document.getElementById("cifrar-decifrar")
const textAreaResultado= document.getElementById("result")
const offset=document.getElementById("offset")
const botaoCifrar= document.getElementById("botao-Cifrar")

botaoCifrar.addEventListener("click", cifrar)
function cifrar(){
  alert("Mensagem Cifrada")
  const string=textAreaCifrarDecifrar.value
 const deslocamento=offset.value
cipher.encode(deslocamento, string)
textAreaResultado.value = textAreaCifrarDecifrar.value
}
const botaoDecifrar= document.getElementById("botao-Decifrar")
botaoDecifrar.addEventListener("click", decifrar)
function decifrar(){
  alert ("Mensagem Decifrada")

}
