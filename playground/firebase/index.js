import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyCG21e_McZHh9ZWS1keah7bp2vch9GNtA4",
  authDomain: "todoapp-f852a.firebaseapp.com",
  databaseURL: "https://todoapp-f852a.firebaseio.com",
  projectId: "todoapp-f852a",
  storageBucket: "todoapp-f852a.appspot.com",
  messagingSenderId: "125275529015"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App22222',
    version: '1.0.0'
  },
  isRunning: true,
  user : {
    name: 'Yuri',
    age: 26
  }
});
const notesRef = firebaseRef.child('notes');

const newNoteRef = notesRef.push().set({
  text: 'Walk the Dog!!!'
});

const newNoteRef2 = notesRef.push().set({
  text:' New Walk with the doooog!'
});




// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });

// firebaseRef.child('user').update({name: 'Mike'});

// firebaseRef.child('app').update({name: 'Something else!'});

// firebaseRef.update({
//   isRunning: false,
//   'app/name':'Todo Application Full Name',
//   'user/name': 'Clarissa',
// }).then( ()=> {
//   console.log('Update Worked');
// }), (e) => {
//   console.log('Update failed');
// }

// firebaseRef.child('isRunning').remove();
// firebaseRef.child('user/age').remove();