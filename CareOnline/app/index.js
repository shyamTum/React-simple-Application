// import React from 'react';
// import Home from './components/Home';
// // import * as Firebase from "firebase";

// var firebase = require('firebase');

// // const fireBaseConfig = {
// //      apiKey:  "AAAA3Lg7Xt0:APA91bGPgPmD07OFs8SEWAPEN1Sf-PEU_CAwFty0DmuW5SedKKDW-hPu0xitpKMBFXyCzp8546kx0quoJ4-GopjINWLfC1Ao0Ko_nBRW6m7kbtwGy3Lj0puu-D5ElxUsTLM5F5teJk1E",
// //      authDomain: "hodinn-46978.firebaseapp.com",
// //      databaseURL: "https://hodinn-46978.firebaseio.com",
// //      secret: 

// // firebase.initializeApp(fireBaseConfig);

// // var database = firebase.database();

// // export default class CareOnline extends React.Component {

// //   constructor (props){
// //   	super(props);
// //   	// var fireBaseConnection = new Firebase ('https://hodinn-46978.firebaseio.com/');

// //   //  fireBaseConnection.set ({
// //   //  	Name:'Shyam',
// //   //  	Address: 'Munich'
// //   //  });

// //   // }


// //   firebase.database().ref('users/' + shyam.debsarkar).set({
// //     username: "name",
// //     email: "email"
// //   });

// // }

// //   render() {
// //     return (
// //       <Home />
// //     );
// //   }
// // }

// export default class mainComponent extends React.Component{
// 	render () {
// 		return (
//           <View>
//               <Text>This is first application</Text>
//           </View>
//          );
// 	}
// }

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Firebase = require ('firebase');


 var firebaseReference = "https://hodinn-46978.firebaseio.com/";
  var ref = new Firebase(firebaseReference);
  var connectedRef = new Firebase(firebaseReference + '/.info/connected');
  var firebaseToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjA4MzgwNzMsInYiOjAsImQiOnsidWlkIjoiZDRiM2RjYzNmZCJ9LCJpYXQiOjE1MDMwNzE2NzN9.cj06m3d7jEn4fWDqnb49OafqCPzVbQ8A5L2f1G7KDGE';
  var authError;
  var authData = 0;
  var mUserId;

//   FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
//   if (user != null) {
//     // Using getToken as recommended in the firebase docs.
//     mUserId = user.getToken(true).toString();
//     console.log("mUserId");
// }

  ref.authWithCustomToken(firebaseToken, function(error, authData) {

        if (error) {
          console.error('Login Failed!', error);
          authError = error.message;
          // $rootScope.$broadcast('authenticationUpdated', {errorMessage: error.message});
        } else {
          console.log('Login Succeeded!');
          authError = null;
          // $rootScope.$broadcast('authenticationUpdated');
        }
      });

export default class mainComponent extends React.Component{

 
  	render () {
		return (
          <View>
              <Text>This is first application</Text>
          </View>
         );
	}
}

