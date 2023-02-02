const cipher = {
encode: function (offset,string){//Esse parametro está trazendo o valor do meu text area (string) e do offset (deslocamento)

 let TextoCriptografado=""
  for (let i=0; i< string.length; i++){//O for está iterando(percorrendo) cada caractere da minha text area
  console.log(string[i] ,"Esta na posição:",i) //Quando i for 0 ele vai verificar a letra que ta na posição 0, assim por diante
  let codigoAsciiLetra=string.charCodeAt(i)
  if (codigoAsciiLetra >=65 && codigoAsciiLetra <=90){
    const CodigoDaLetraConvertida=(codigoAsciiLetra-65+offset)%26+65 //está guardando o código da letra convertida
    const LetraConvertida=String.fromCharCode(CodigoDaLetraConvertida)
    console.log(LetraConvertida)
    console.log(codigoAsciiLetra+"-"+"65"+"+"+offset)
    TextoCriptografado=TextoCriptografado+LetraConvertida
    console.log(TextoCriptografado)
  }
  else{
    console.log("Não é uma letra")
  }
}
return TextoCriptografado
},
 decode: function(offset,string){
  let TextoDescriptografado=""
  for (let i=0; i< string.length; i++){
    let codigoAsciiLetra=string.charCodeAt(i)
    if (codigoAsciiLetra>=65 && codigoAsciiLetra<=90){
      const CodigoDaLetraConvertida=(codigoAsciiLetra+65-offset)%26+65
      const LetraConvertida=String.fromCharCode(CodigoDaLetraConvertida)
      TextoDescriptografado=TextoDescriptografado+LetraConvertida
    }
  }
  return TextoDescriptografado
}


}
export default cipher;
