
*/

function adicionartarefa(){
    let Input = document.querySelector("input").value
  let li = document.createElement("li")
  li.innerHTML = Input + '<span onclick="deletartarefa(this)">❌</span>'
  document.querySelector("ul").appendChild(li)
Input =""
}

function deletartarefa(li) {
   li.parentElement.remove()
}
