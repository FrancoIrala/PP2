document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Aquí puedes agregar lógica para manejar los datos del formulario
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Aquí podrías enviar los datos a un servidor usando AJAX, Fetch, etc.
  
    // Muestra la alerta "Formulario enviado"
    document.getElementById('alert').classList.remove('hidden');
  
    // Puedes ajustar el tiempo que la alerta está visible (en milisegundos)
    setTimeout(function () {
      document.getElementById('alert').classList.add('hidden');
    }, 3000); // 3000 milisegundos = 3 segundos

    alert('Formulario enviado con exito')
  });
  
