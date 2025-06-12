(function(){
  emailjs.init("galena89"); // Reemplaza con tu User ID de EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm('tu_service_id', 'tu_template_id', this)
    .then(() => {
      document.getElementById("form-message").innerHTML = "<div class='alert alert-success'>Mensaje enviado correctamente.</div>";
      this.reset();
    }, () => {
      document.getElementById("form-message").innerHTML = "<div class='alert alert-danger'>Error al enviar el mensaje.</div>";
    });
});
