import React from 'react';
import {StyleSheet,Text,View,Button,Image} from 'react-native';

class HomePage extends React.Component {
   render() {

      return (
        <View style={styles.container}>
          <Image source={require('../img/CAREONLINE_black.png')} style={styles.logo} />
          <Text style={styles.welcome}>
            Welcome to CareOnline!
          </Text>
          <Button title="Click Me!" onPress={this.props.handleClick}> </Button>
        </View>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo:{
    height: 70,
    width: 150
  }
});


export default HomePage;
