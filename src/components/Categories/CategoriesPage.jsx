import React from 'react'
import Flex from '../StyledComponents/Flex'
import Title from '../StyledComponents/Title'
import Button from '../StyledComponents/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryAction } from '../../redux/categoryReducer'
import Category from './Category'
import TableRow from '../StyledComponents/TableRow'
import TableRowItem from '../StyledComponents/TableRowItem'
import ModalAddCategory from './ModalAddCategory'
import { useState } from 'react'
import Icons from '../Icons'

export default function CategoriesPage() {
	const dispatch = useDispatch()
	const categories = useSelector(state => state.category.categories)
	const [modalActive, setModalActive] = useState(true)

	const addCategoryHandler = e => {
		setModalActive(true)
		dispatch(addCategoryAction())
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
			<ModalAddCategory
				active={modalActive}
				setActive={setModalActive}
				icons={Icons}
			/>
		</Flex>
	)
}
