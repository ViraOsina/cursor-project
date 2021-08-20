import React from 'react'
import Flex from '../StyledComponents/Flex'
import Title from '../StyledComponents/Title'
import Button from '../StyledComponents/Button'

export default function Categories() {
	return (
		<Flex width="90%" margin="auto">
			<Flex height="3em" justify="space-between">
				<Title>Categories</Title>
				<Button bColor="rgb(90,	141,	238	)" width="10em">
					Add more
				</Button>
			</Flex>
		</Flex>
	)
}
