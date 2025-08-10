// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("⚠️ Error: No ingresaste ningún nombre... Intenta nuevamente.");
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert("⚠️ Error: Este nombre ya fue añadido.");
    return;
  }

  listaAmigos.push(nombre);
  mostrarLista();
  input.value = "";
  console.log("Lista actual:", listaAmigos);
}

function mostrarLista() {
  const ul = document.querySelector("ul");
  ul.innerHTML = ""; // Limpiar lista anterior

  listaAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("⚠️ Debes ingresar al menos dos amigos para sortear.");
    return;
  }

  let asignaciones = generarAsignaciones(listaAmigos);
  console.log("Asignaciones:", asignaciones);
  mostrarAsignaciones(asignaciones);
}

function generarAsignaciones(lista) {
  let asignado = [...lista];
  let valido = false;

  while (!valido) {
    asignado = desordenarLista([...lista]);
    valido = lista.every((amigo, i) => amigo !== asignado[i]);
  }

  let resultado = {};
  lista.forEach((amigo, i) => {
    resultado[amigo] = asignado[i];
  });

  return resultado;
}

function desordenarLista(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

function mostrarAsignaciones(asignaciones) {
  const ul = document.querySelector("ul");
  ul.innerHTML = ""; // Limpiar lista anterior

  for (let [amigo, asignado] of Object.entries(asignaciones)) {
    const li = document.createElement("li");
    li.textContent = `${amigo} → ${asignado}`;
    ul.appendChild(li);
  }
}
