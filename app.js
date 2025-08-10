// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos =[];
let resultadoLista = [];
let lista = [];
let amigoSecreto = "";
let i =0;

function agregarAmigo(){
listaAmigos.push(document.getElementById("amigo").value);
if(listaAmigos[i] === ''|| listaAmigos[i] === ' '){
alert("Error!!, No ingresó nombre. Favor intente nuevamente");
listaAmigos.pop();
} else{
  let nombre = document.querySelector('ul');
  nombre.innerHTML = listaAmigos[i];
  //amigoSecreto = listaAmigos[i];
  //console.log(amigoSecreto);
  console.log(i);
  console.log(listaAmigos.length);
  i++;
if (i>1){
  amigoSecreto = listaAmigos[i];
  for (let i=1; i <= listaAmigos.length; i++ ){
     if (amigoSecreto === listaAmigos[i-1]) {
      console.log(amigoSecreto);
      console.log(listaAmigos[i]);
      alert('ERROR, El nombre ya esta en la lista');
    listaAmigos.pop();
  }
}
}
}
console.log(listaAmigos);
clearBox();
return;
}

function clearBox(){
    let valorBox = document.getElementById("amigo");
        valorBox.value = '';
    return;
}

function sortearAmigo(){    
    console.log("Juego Interrumpido");
    //console.log(listaAmigos);
    let x = desordenarLista(listaAmigos);
    console.log(x);
    return;
}

function verificacionNoTocarteATiMismo(amigoIngresado, amigoSorteado){
  let resultado = document.getElementById("amigo");
  for (i = 0; i <= listaAmigos.length  ; i++ ){
      desordenarLista(listaAmigos);
      console.log(resultado);
      console.log(listaAmigos)
      resultadoLista.innerHTML = listaAmigos[i];
    }
}

function desordenarLista(listaAmigos) {
  // Crear una copia de la lista para no modificar la original
  let lista = listaAmigos;
  let currentIndex = lista.length;
  let randomIndex;

  // Mientras queden elementos por desordenar
  while (currentIndex != 0) {
    // Escoger un elemento restante aleatorio
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Intercambiar el elemento actual con el elemento aleatorio
    [lista[currentIndex], lista[randomIndex]] = [
      lista[randomIndex],
      lista[currentIndex],
    ];
  }
  return;
}
