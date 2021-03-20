import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	border-bottom-width: 1px;
	border-bottom-color: #D42026;
	padding: 10px 15px;
`

export const AvatarBox = styled.View`
	flex: 1;
	padding: 18px 0px;
`

export const NameBox = styled.View`
	flex: 4;
	justify-content: center;
`

export const NameText = styled.Text`
	font-size: 20px;
	font-family: 'Roboto-Light';
`

export const Avatar = styled.Image`
	height: 50px;
	width: 50px;
	border-radius: 40px;
`
