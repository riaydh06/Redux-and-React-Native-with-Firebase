import React, { Component }  from 'react';
import { View,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const firebase = require("firebase");
	 	var config = {
		    apiKey: "AIzaSyAtIrCTR4rUo6_Q4xF7thOu1NI_HiklVEM",
		    authDomain: "manager-auth-24419.firebaseapp.com",
		    databaseURL: "https://manager-auth-24419.firebaseio.com",
		    projectId: "manager-auth-24419",
		    storageBucket: "manager-auth-24419.appspot.com",
		    messagingSenderId: "204091366934"
	  	};
	  	firebase.initializeApp(config);

	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={{flex:1}}>
					<LoginForm>
						
					</LoginForm>
				</View>
			</Provider>
		)
	}
}

export default App;