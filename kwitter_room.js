
//ADD YOUR FIREBASE LINKS HERE
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
  
    // Initialize Firebase
    firebase. initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";



}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.Storage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
