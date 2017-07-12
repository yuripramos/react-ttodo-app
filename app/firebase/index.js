import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCG21e_McZHh9ZWS1keah7bp2vch9GNtA4",
    authDomain: "todoapp-f852a.firebaseapp.com",
    databaseURL: "https://todoapp-f852a.firebaseio.com",
    projectId: "todoapp-f852a",
    storageBucket: "todoapp-f852a.appspot.com",
    messagingSenderId: "125275529015"
  };
  firebase.initializeApp(config);


} catch (e) {
  
}

export var firebaseRef = firebase.database().ref();
export default firebase; 