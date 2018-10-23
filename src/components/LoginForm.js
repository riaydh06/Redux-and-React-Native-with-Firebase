import React,{ Component} from 'react';
import { View,Text } from 'react-native';
import { Card,CardSection,Input,Button } from './common';
import { connect } from 'react-redux';
import { emailChanged,passwordChanged } from '../actions' 

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswardChange() {
		this.props.passwordChanged(text);
	}

	render() {
		return (
            <Card> 
            	<CardSection>
            		<Input
            		 	label="Email"
            		 	placeholder="user@gmail.com"
            		 	onChangeText={this.onEmailChange.bind(this)}
            		 	value={this.props.email}
            		/>
            	</CardSection>
            	<CardSection>
            		<Input 
            			secureTextEntry
            			label="Password"
            			placeholder="password"
            			onChangeText={this.onPasswardChange.bind(this)}
            			value={this.props.password}
            		/>
            	</CardSection>
            	<CardSection></CardSection>
            	<CardSection>
            		<Button>Login</Button>
            	</CardSection>
            </Card>
		)
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.passaword
	}
};

export default connect(mapStateToProps,{ emailChanged, passwordChanged })(LoginForm);











