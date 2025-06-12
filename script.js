(function(){
  emailjs.init("p5Mkqygwl5CP-0O_J"); // Reemplaza con tu User ID de EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm('service_jikp6w4', 'template_bvrl5oh', this)
    .then(() => {
      document.getElementById("form-message").innerHTML = "<div class='alert alert-success'>Mensaje enviado correctamente.</div>";
      this.reset();
    }, () => {
      document.getElementById("form-message").innerHTML = "<div class='alert alert-danger'>Error al enviar el mensaje.</div>";
    });
});

