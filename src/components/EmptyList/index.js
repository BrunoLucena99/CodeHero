import React from 'react'
import { EmptyListContainer, EmptyListText } from './styles'

const EmptyList = () => {
	return (
		<EmptyListContainer>
			<EmptyListText>Sua busca não retornou resultados</EmptyListText>
		</EmptyListContainer>
	)
}

export default EmptyList
