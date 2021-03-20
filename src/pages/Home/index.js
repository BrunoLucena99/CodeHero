import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Footer, ButtonsContainer, NumericButtonsContainer } from './styles';
import md5 from 'js-md5'
import { View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import CharacterItem from '../../components/CharacterItem';
import FlatListHeader from '../../components/FlatListHeader';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import EmptyList from '../../components/EmptyList';

export default function Home () {
	const [results, setResults] = useState([])
	const [page, setPage] = useState(1)
	const [firstBtn, setFirstBtn] = useState(1)
	const [secondBtn, setSecondBtn] = useState(2)
	const [thirdBtn, setThirdBtn] = useState(3)
	const [total, setTotal] = useState(10)
	const [isFilter, setIsFilter] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	const filterCharacterSubmit = (value) => {
		setIsLoading(true)
		setPage(1)
		if (value.length === 0) {
			requestData(1)
			setFirstBtn(1)
			setSecondBtn(2)
			setThirdBtn(3)
			setIsFilter(false)
		} else {
			setIsFilter(true)
			requestData(1, value)
		}
	} 

	const requestData = async (currentPage, characterName = null) => {
		const ts = Number(new Date())
		const hash = md5.create()
		hash.update(ts + 'b402c78600e254a1bfb1df9c390b61042c6ed0f3' + 'd32ba5b3400d6de7e38a590346e18901')
		const offset = 4 * (currentPage - 1)
		const req = characterName
		? `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=${ts}&offset=${offset}&limit=4&orderBy=name&apikey=${'d32ba5b3400d6de7e38a590346e18901'}&hash=${hash.hex()}`
		: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&offset=${offset}&limit=4&orderBy=name&apikey=${'d32ba5b3400d6de7e38a590346e18901'}&hash=${hash.hex()}`
		
		const response = await fetch(req)
		const parsedResponse = await response.json()
		setResults(parsedResponse.data.results)
		setTotal(parsedResponse.data.total)
		setIsLoading(false)
	}

	const onBtnClick = (val) => {
		if (val !== page) {
			if (val === 1) {
				setPage(val)
				requestData(val)
			} else if (4 * val > total) {
				setPage(val)
				requestData(val)
			} else {
				setFirstBtn(val - 1)
				setSecondBtn(val)
				setThirdBtn(val + 1)
				setPage(val)
				requestData(val)
			}
		}
	}

	useEffect(() => {
		requestData(page)
	}, [])

  return (
		<Container>
			{
				isLoading ? (
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<ActivityIndicator size='large' color='#D42026' />
					</View>
				)
				: (
					<ScrollView>
					<Header onFilterSubmit={filterCharacterSubmit} />
					<View>
						<FlatList
							ListHeaderComponent={() => <FlatListHeader />}
							data={results}
							ListEmptyComponent={EmptyList}
							renderItem={({item}) => <CharacterItem item={item} />}
							keyExtractor={item => item.id}
						/>
					</View>
					<Footer>
						<ButtonsContainer>
							{
								isFilter
								? (
									<NumericButtonsContainer>
										<Button label={1} isActive={true} onPress={() => {}} />
									</NumericButtonsContainer>
								)
								: (
									<>
										<TouchableOpacity onPress={() => onBtnClick(page - 1)}>
											<Icon name='caret-back' color='#D42026' size={40} />
										</TouchableOpacity>
		
											<NumericButtonsContainer>
												<Button label={firstBtn} isActive={firstBtn === page} onPress={onBtnClick} />
												<Button label={secondBtn} isActive={secondBtn === page} onPress={onBtnClick} />
												<Button label={thirdBtn} isActive={thirdBtn === page} onPress={onBtnClick} />
											</NumericButtonsContainer>
		
										<TouchableOpacity onPress={() => onBtnClick(page + 1)}>
											<Icon name='caret-forward' color='#D42026' size={40} />
										</TouchableOpacity>
									</>
								)
							}
		
						</ButtonsContainer>
					</Footer>
					</ScrollView>
				)
			}

		</Container>
  )
}