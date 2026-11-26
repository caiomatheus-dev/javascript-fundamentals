
function calcularImc(peso,altura) {

    return peso / (altura) ** 2;

}



const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita recarregar a página

  const usuarioPeso = Number(document.getElementById('peso').value);
  const usuarioAltura = Number(document.getElementById('altura').value);

  console.log(usuarioPeso, usuarioAltura);
});