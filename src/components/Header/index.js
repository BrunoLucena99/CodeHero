import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Container, SecondaryText, MainText, TopWrapper, HeaderInput } from './styles'

const Header = ({ onFilterSubmit }) => {
	const [inputValue, setInputValue] = useState('')
	return (
		<Container>
			<TopWrapper>
				<MainText>BUSCA MARVEL</MainText>
				<SecondaryText>{' TESTE FRONTEND'}</SecondaryText>
			</TopWrapper>

			<View>
				<SecondaryText>Nome do Personagem</SecondaryText>
				<HeaderInput
					onSubmitEditing={() => onFilterSubmit(inputValue)}
					value={inputValue}
					onChangeText={val => setInputValue(val)}
				/>
			</View>
		</Container>
	)
}

export default Header
