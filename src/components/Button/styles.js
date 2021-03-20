import styled from 'styled-components/native'

export const BtnContainer = styled.TouchableOpacity`
	background-color: ${props => props.isActive ? '#D42026' : '#FFF'};
	border-width: 1px;
	border-color: #D42026;
	width: 40px;
	height: 40px;
	border-radius: 25px;
	justify-content: center;
	align-items: center;
`

export const BtnText = styled.Text`
	color: ${props => props.isActive ? '#FFF' : '#000'};
	font-family: 'Roboto-Light';
`
