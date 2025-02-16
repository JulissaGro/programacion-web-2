const $username = $("#username");
const $formulario = $("#formulario");

$formulario.on("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  
  $(this).addClass("was-validated");

  if (!this.checkValidity()){
    return;
  }

  this.submit();
});


