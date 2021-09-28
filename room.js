// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvMCoqFkrCJGNVFLFqBazpMnJ-UQBLS90",
  authDomain: "database-for-st-fairy-school.firebaseapp.com",
  projectId: "database-for-st-fairy-school",
  storageBucket: "database-for-st-fairy-school.appspot.com",
  messagingSenderId: "328418130374",
  appId: "1:328418130374:web:bcaed57e4261eb785fdac7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }

user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome "+user_name+"!!!";

  function getData(){
    firebase.database().ref("/").on("value",function(snapshot){
      document.getElementById("output").innerHTML = row;
      Room_name = childKey;
      console.log("Room Name" + Room_name);
      row = "<div class = 'room_name' id='+room_name+'onclick = 'redirectToRoomName'>+room_name</div><hr>"; 
    });
  }

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_name.html";
}