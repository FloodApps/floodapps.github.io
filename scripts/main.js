const app = new Vue({
  el: ".cuerpo",
  data: {
    errorNombre: "",
    nombre: "",
    email: "",
    nameValid: false,
    errorEmail: "",
    emailValid: false,
    mensaje: "",
    errorMensaje: "",
    mensajeValid: false,
  },
  methods:{

    verifyName(){
      if(this.nombre === ""){
        this.errorNombre = "El nombre es necesario";
      }
      else if(this.nombre.length < 3){
        this.errorNombre = "Nombre muy corto";
      } else {
        this.errorNombre = "";
      }
      this.nameValid = !this.errorNombre;
    },
    resetErrorName(){
      this.nameValid = false;
      this.errorNombre = "";
    },

    verifyEmail(){
      if(this.email === ""){
        this.errorEmail = "El email es necesario";
      } else if (!this.validEmail(this.email)){
        this.errorEmail = "El email es incorrecto";
      } else {
        this.errorEmail = "";
      }
      this.emailValid = !this.errorEmail;
    },
    validEmail: function (email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    resetErrorEmail(){
      this.emailValid = false;
      this.errorEmail = "";
    },

    verifyMensaje(){
      if(this.mensaje === ""){
        this.errorMensaje = "Debe escribir un mensaje"
      } else if (this.mensaje.length < 20) {
        this.errorMensaje = "El mensaje debe contener un mínimo de 20 carácteres"
      } else {
        this.errorMensaje = ""
      }
      this.mensajeValid = !this.errorMensaje;
    },

    resetErrorMensaje(){
      this.mensajeValid = false;
      this.errorMensaje = "";
    },

    enviarFormulario(){
      this.verifyEmail();
      this.verifyName();
      this.verifyMensaje();
      if(!this.nameError && !this.emailError && !this.mensajeError){
        this.email = "";
        this.nombre = "";
        this.mensaje = "";
        this.emailValid = false;
        this.nameValid = false;
        this.mensajeValid = false;
        alert("Formulario Enviado");
      }
    },

  },
  computed: {
    nameError: function(){
      return this.errorNombre !== "";
    },
    emailError: function(){
      return this.errorEmail !== "";
    },
    mensajeError: function(){
      return this.errorMensaje !== "";
    },
  }
}
)