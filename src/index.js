import cipher from './cipher.js';
const textAreaCifrarDecifrar= document.getElementById("cifrar-decifrar")
const textAreaResultado= document.getElementById("result")
const offset=document.getElementById("offset")
const botaoCifrar= document.getElementById("botao-Cifrar")

botaoCifrar.addEventListener("click", cifrar)
function cifrar(){
  const string=textAreaCifrarDecifrar.value.toUpperCase()
 const deslocamento= Number(offset.value)

textAreaResultado.value = cipher.encode(deslocamento, string)
}
const botaoDecifrar= document.getElementById("botao-Decifrar")
botaoDecifrar.addEventListener("click", decifrar)
function decifrar(){
  const string=textAreaCifrarDecifrar.value.toUpperCase()
  const deslocamento= Number(offset.value)
  textAreaResultado.value = cipher.decode(deslocamento, string)

}
