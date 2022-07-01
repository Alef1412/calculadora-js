var tela = "";
var numero;
var total;
var inicio;
function Inserir(valor){
   numero = document.getElementById('tela').value;
   document.getElementById('tela').value = numero + valor;
}
function LimparCampos(){
  document.getElementById('tela').value = "";  
}
function Apagar(){
   numero = document.getElementById('tela').value;
    document.getElementById('tela').value = numero.substring(0, numero.length -1);
}
function Calcular(){
    var resultado = document.getElementById('tela').value;
    if(resultado==""){
        document.getElementById('tela').value = "0"
    }else{
    
    document.getElementById('tela').value = eval(resultado);
}
}