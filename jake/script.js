const personagens = [];

function adicionarPersonagem() {
  const input = document.getElementById("nome");
  const nome = input.value.trim();

  if (nome !== "") {
    personagens.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
  }
}

function atualizarLista() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";

  personagens.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}