// Criar numero aleatorio
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Nao atualizar pagina

document.addEventListener("submit", event => {
  event.preventDefault()

})
// Variaveis
if(localStorage.getItem('userLogado')){
  window.document.getElementById('loginUser').style.display = 'none'
} 
var text = window.document.getElementById('text')
var list = window.document.getElementById('list').innerHTML
var deletar = window.document.getElementById('deletar')
var li = window.document.getElementById('li')
var lista = ['']
// Tirar user logado
function SairUserLogin(){

  localStorage.removeItem('userLogado')
  location.href =  'login.html'

}
 
function loginUser(){
   if(localStorage.getItem('userLogado')){
      
}else{
  location.href = 'login.html'
}
}



//      Usuarios
function usuarios() {
  var nome1 = window.document.getElementById('nome1')
  var nome = window.document.getElementById('nome')
  var email = window.document.getElementById('email')

  let userLogado = JSON.parse(localStorage.getItem('userLogado'))

  nome1.innerHTML = userLogado.nome
  nome.innerHTML = userLogado.nome
  email.innerHTML = userLogado.email
}

// Funcao adicionar elemento

function adicionar() {

  var numeroAleatorio = getRandomIntInclusive(0, 10000000)
  var textValue = text.value
  if (textValue.trim() == "") {
  }
  else {
    console.log(textValue)
    window.document.getElementById('list').innerHTML += lista.map(() =>
      `<li id="_${textValue}_${numeroAleatorio}"> ${textValue}<button id="deletar" onclick="remove(_${textValue}_${numeroAleatorio})"><img src="/Imagens/lixo.png" alt="">
  </button></li>`).join('')

window.document.getElementById('text').value = null

  }

}
// Funcao remover elemento
function remove(textValue) {

  var node = document.getElementById(textValue.id)

  if (node) {
    node.parentNode.removeChild(node);
  }

}