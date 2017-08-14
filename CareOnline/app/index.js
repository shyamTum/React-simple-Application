import React from 'react';
import Home from './components/Home';
// import * as Firebase from "firebase";

var firebase = require('firebase');

const fireBaseConfig = {
     apiKey:  "AAAA3Lg7Xt0:APA91bGPgPmD07OFs8SEWAPEN1Sf-PEU_CAwFty0DmuW5SedKKDW-hPu0xitpKMBFXyCzp8546kx0quoJ4-GopjINWLfC1Ao0Ko_nBRW6m7kbtwGy3Lj0puu-D5ElxUsTLM5F5teJk1E",
     authDomain: "hodinn-46978.firebaseapp.com",
     databaseURL: "https://hodinn-46978.firebaseio.com",
     projectId: "hodinn-46978",
     storageBucket: "hodinn-46978.appspot.com"
};

firebase.initializeApp(fireBaseConfig);

// var database = firebase.database();

export default class CareOnline extends React.Component {

  constructor (props){
  	super(props);
  	// var fireBaseConnection = new Firebase ('https://hodinn-46978.firebaseio.com/');

  //  fireBaseConnection.set ({
  //  	Name:'Shyam',
  //  	Address: 'Munich'
  //  });

  // }


  firebase.database().ref('users/' + shyam.debsarkar).set({
    username: "name",
    email: "email"
  });

}

  render() {
    return (
      <Home />
    );
  }
}
