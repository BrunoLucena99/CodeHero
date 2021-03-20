import React from 'react'
import { Avatar, Container, AvatarBox, NameBox, NameText } from './styles'
import { useNavigation } from '@react-navigation/native'

const CharacterItem = ({ item }) => {
	const itemImage = `${item.thumbnail.path}.${item.thumbnail.extension}`.replace('http', 'https')
	const navigation = useNavigation()

	return (
		<Container
			onPress={() => navigation.navigate('CharacterDetails', {
				character: item
			})}
		>
			<AvatarBox>
				<Avatar source={{uri: itemImage }} />
			</AvatarBox>
			<NameBox>
				<NameText>{item.name}</NameText>
			</NameBox>
		</Container>
	)
}

export default CharacterItem
