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
const app = initializeApp(firebaseConfig);


  function addUser(){
    user_name = document.getElementById("user_name").value;
    window.location = "room.html"
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}