import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CharacterDetails from '../pages/CharacterDetails'
import Home from '../pages/Home'

const Routes = () => {
	const Stack = createStackNavigator()
	
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='CharacterDetails'
					component={CharacterDetails}
					options={({ route }) => ({
						title: route.params.character.name,
						headerTintColor: '#D42026'
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
