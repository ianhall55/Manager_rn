import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDjIq8LthTgWVPlG-Jmb8UyG83a1U5uQTM",
      authDomain: "manager-28278.firebaseapp.com",
      databaseURL: "https://manager-28278.firebaseio.com",
      storageBucket: "manager-28278.appspot.com",
      messagingSenderId: "723050442765"
    };

    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
