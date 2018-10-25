import React, { Component }  from 'react';
import { View,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import Router from './Router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
		return (
			<Provider store={store}>
				<View style={{flex:1}}>
					<Router/>
				</View>
			</Provider>
		)
	}
}

export default App;