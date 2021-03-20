import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Avatar, ContainerDetails, Content, FilmTitle, ImageBox, NameText, TopicText } from './styles'

export default function CharacterDetails ({ navigation, route }) {
	const { character } = route.params
	console.log(character.comics.items)

	return (
		<ContainerDetails>
			<ImageBox>
				<Avatar
					resizeMode='cover'
					source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}`.replace('http', 'https')}}
				/>
			</ImageBox>
	
			<Content>
			<ScrollView>
				<NameText>
					{character.name}
				</NameText>
					<Text style={{ fontFamily: 'Roboto-Light' }}>
						{character.description || 'Description not avaiable'}
					</Text>
					<TopicText style={{ fontFamily: 'Roboto-Black' }}>Filmes</TopicText>
					<FlatList
						data={character.comics.items}
						renderItem={({item}) => <FilmTitle>{item.name}</FilmTitle>}
						keyExtractor={item => item.id}
						scrollEnabled={false}
					/>
			</ScrollView>
			</Content>
		</ContainerDetails>
	)
}
