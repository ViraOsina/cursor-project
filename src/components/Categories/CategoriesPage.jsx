import Flex from '../StyledComponents/Flex'
import Title from '../StyledComponents/Title'
import Button from '../StyledComponents/Button'
import { useSelector } from 'react-redux'
import Category from './Category'
import TableRow from '../StyledComponents/TableRow'
import TableRowItem from '../StyledComponents/TableRowItem'
import ModalAddCategory from './ModalAddCategory'
import { useEffect, useState } from 'react'
import Icons from '../Icons'

export default function CategoriesPage() {
	const state = useSelector(state => state)

	const stateCategories = useSelector(state => state.category.categories)

	const [categories, setCategories] = useState(stateCategories)
	const [modalActive, setModalActive] = useState(false)

	const addCategoryHandler = e => {
		setModalActive(true)
	}

	useEffect(() => {
		const data = localStorage.getItem('reduxState')
		const localCategories = JSON.parse(data).category.categories
		if (localCategories) {
			setCategories(localCategories)
		}
	}, [])

	useEffect(() => {
		const data = localStorage.getItem('reduxState')
		const localCategories = JSON.parse(data).category.categories
		if (localCategories) {
			setCategories(localCategories)
		}
	}, [state])

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
