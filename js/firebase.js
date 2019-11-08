
 function registrar(){
  console.log("se dio click");
var email=document.getElementById('email').value;
var password=document.getElementById('pass').value;
var password2=document.getElementById('pass2').value;

if (password==password2) {

//alert("email: "+email+"  password: "+password);
	firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    verificar();
    firebase.auth().signOut();
  })
	.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
 	console.log(errorMessage);
  console.log(errorCode);
});
}


	
}


	function listener(){
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    alert("hay alguien dentro");
    aparece(user);
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
   // console.log(emailVerified);
  } else {
    alert("no hay alguien dentro");
  }
});
}




function iniciarSesion(){
	var mail=document.getElementById('emailR').value;
	var pass=document.getElementById('passR').value;
	alert("email: "+mail+ "password :"+ pass);
	firebase.auth().signInWithEmailAndPassword(mail, pass).catch(function(error) {
  
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
});
}

function cerrarSesion(){
  firebase.auth().signOut()
  .then(function(){
console.log("saliendo");
  })
  .catch(function(error){
    console.log(error);
  })

}
 
 function aparece(user){
  var user=user;
  if (user.emailVerified) {
     var contenido=document.getElementById('contenido');
  contenido.innerHTML=`
<button onclick="cerrarSesion()" style='width:100px; height:25px' value="cerrar sesion" >Cerrar sesion</button>

  `
  }
 
 }



 function verificar(){
  console.log("si esta entrando a la funcion");
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("enviando correo");
  }).catch(function(error) {
  // An error happened.
  console.log(error);
  });

  }




function entrarFacebook(){

     alert("esta entrando a la funcion");
  
  
    const provider= new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result){
      alert("exito");
      console.log(result);
    })
    .catch(function(error){
      alert("error");
      console.log(error);
    })
    }



 /* function autenticarFacebook(){
    alert("esta entrando a la funcion");
    var pafb=document.getElementById("autenticarFacebook");
    pafb.addEventlistener("click", function(){
    const provider= new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopUp(provider).then(function(result){
      alert("exito");
      console.log(result);
    })
    .catch(function(error){
      alert("error");
      console.log(error);
    })
    });
   
  }*/
 
listener();
        


      
        
     
        
        
        
        
          
    
        
      
        
        

     
        
        
        
        