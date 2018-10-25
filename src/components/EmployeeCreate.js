import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Name"
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Phone"
						placeholder="01700000000" 
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default EmployeeCreate;