import { Actions } from 'react-native-router-flux';
import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGIN_USER
} from './types';
// import firebase from 'firebase';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (text) => {
	return {
		type :  PASSWORD_CHANGED,
		payload: text
	}
}

export const loginUser = ({email, password}) => {
	const firebase = require("firebase");
	return (dispatch) => {
		dispatch({
			type: LOGIN_USER
		});

	    firebase.auth().signInWithEmailAndPassword(email,password)
	    .then(user => {
	    	loginUserSuccess(dispatch, user)
	    }).catch(error=>{
	    	firebase.auth().createUserWithEmailAndPassword(email, password)
	    	.then(user => {
	    		loginUserSuccess(dispatch, user)
	    	})
	    	.catch(() => {
	    			loginUserFail(dispatch);
	    	})
	    })
	}

}
const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAILED
	})
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	})

	Actions.main();
}