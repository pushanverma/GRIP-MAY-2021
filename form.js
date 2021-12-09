
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
var  firebaseConfig =
{
 apiKey: "AIzaSyC0Xe-1PUomJpHa0mY6gyj1sOQROJHAY9E",
 authDomain: "loginsystem-6f84f.firebaseapp.com",
 projectId: "loginsystem-6f84f",
 storageBucket: "loginsystem-6f84f.appspot.com",
 messagingSenderId: "473854107238",
 appId: "1:473854107238:web:cc4297d8d04724af5457a7",
 measurementId: "${config.measurementId}"
};

  // var firebaseConfig = {
  //   apiKey: "AIzaSyBkcLrQaixp8dhiMrNfrWdJ52nyadLS4cU",
  //   authDomain: "login-demo-254f7.firebaseapp.com",
  //   projectId: "login-demo-254f7",
  //   storageBucket: "login-demo-254f7.appspot.com",
  //   messagingSenderId: "228883805517",
  //   appId: "1:228883805517:web:db9063121d6bf3a79ab304",
  //   measurementId: "G-C8Q2HYKHY1"
  // };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    var crn =confirm("SignUp Successfully");
    var url="index1.html";
    if(crn)
    {
      document.write("<a href='"+url+"'>GO TO BANK</a>");
    }
    else
    {
      document.write("Cannot go in the bank");
    }
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    var url="index1.html";
    document.write("<a href='"+url+"'>GO TO BANK</a>");
        
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })