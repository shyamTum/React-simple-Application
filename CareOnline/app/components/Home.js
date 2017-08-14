import React from 'react';
import {Container,StyleSheet,Text,View, Platform} from 'react-native';
import {BrowserRouter} from 'react-router-dom';
import Navigations from './Navigations';
import Routes from './Routes';
import ReactDom from 'react-dom';

class Home extends React.Component {
   render() {
      if(Platform.OS == 'web'){
        return (
          <View style={styles.container}>
            <BrowserRouter>
              <View>
                <Navigations />
                <Routes />
              </View>
            </BrowserRouter>
          </View>
        );
      }else {
        alert(Platform.OS);
        return(
              <View>
                <Text>This is my new Application</Text>
              </View>
        );
      }
      
   }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
