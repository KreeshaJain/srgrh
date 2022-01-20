//YOUR FIREBASE LINKS
room_name=localStorage.getItem("room_name")
user_name=localStorage.getItem("user_name")
var firebaseConfig = {
      apiKey: "AIzaSyDohcFXINMV1MVkHmquInggsw5cNJWhCQ8",
      authDomain: "lets-chat-44adf.firebaseapp.com",
      databaseURL: "https://lets-chat-44adf-default-rtdb.firebaseio.com",
      projectId: "lets-chat-44adf",
      storageBucket: "lets-chat-44adf.appspot.com",
      messagingSenderId: "451915302385",
      appId: "1:451915302385:web:7f39a921d7eaddbca6f050",
      measurementId: "G-88873PJ97C"
    };
    firebase. initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0    
      });
      document.getElementById("msg").value ="";
}
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0

});