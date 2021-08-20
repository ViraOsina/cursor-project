import React from 'react'
import Flex from '../StyledComponents/Flex'
import Title from '../StyledComponents/Title'
import Button from '../StyledComponents/Button'
import TextContent from '../StyledComponents/TextContent'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryAction } from '../../redux/categoryReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Category from './Category'
import TableRow from '../StyledComponents/TableRow'
import TableRowItem from '../StyledComponents/TableRowItem'

export default function CategoriesPage() {
	const dispatch = useDispatch()
	const categories = useSelector(state => state.category.categories)

	const addCategoryHandler = e => {
		dispatch(addCategoryAction(prompt()))
	}

	return (
		<Flex width="90%" margin="auto" direction="column">
			<Flex height="3em" justify="space-between">
				<Title>Categories</Title>
				<Button onClick={() => addCategoryHandler()} width="10em">
					Add more
				</Button>
			</Flex>
			<TableRow border={true} margin="20px 0">
				<TableRowItem>Category</TableRowItem>
				<TableRowItem>Description</TableRowItem>
				<TableRowItem>Date</TableRowItem>
				<TableRowItem>Action</TableRowItem>
			</TableRow>
			<Flex direction="column">
				{categories.map(category => (
					<Category {...category} key={category.id} />
				))}
			</Flex>
		</Flex>
	)
}
