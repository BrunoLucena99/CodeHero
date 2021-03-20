import React from 'react'
import { BtnContainer, BtnText } from './styles'

const Button = ({ label, isActive, onPress }) => {
	return (
		<BtnContainer
			isActive={isActive}
			onPress={() => onPress(label)}
		>
			<BtnText isActive={isActive}>{label}</BtnText>
		</BtnContainer>
	)
}

export default Button
