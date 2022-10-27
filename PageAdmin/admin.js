
document.addEventListener('submit', function (event) {
  event.preventDefault()
  criarTable()
})


// Criar tabela

function criarTable() {
  var tbody = window.document.getElementById('tbody')

  userCad = []

  userValid = {
    nomeCad: '',
    emailCad: '',
    passwordCad: ''
  }

  userCad = JSON.parse(localStorage.getItem('userCad'))

  console.log(userCad)
  
  tbody.innerHTML += userCad.map((item) =>
    `
          <tr id='_${item.nomeCad}'>
            <td> ${item.idCad}</td>
            <td> ${item.nomeCad}</td>
            <td> ${item.emailCad}</td>
            <td> ${item.passwordCad}</td>
            </tr>
           `
  ).join('')
}
//   Excluir
function Etd(nomeCad) {
  var ExcluirTr = document.getElementById(nomeCad.id)
  
  if (ExcluirTr) {
    ExcluirTr.parentNode.removeChild(ExcluirTr)
  
 
    console.log()
  }
  userCad.pop()
  console.log(userCad)


}
