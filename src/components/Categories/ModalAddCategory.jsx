import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
	Modal,
	ModalClose,
	ModalContent,
	ModalDialog,
	ModalInput,
} from '../Home/modalComponent_addMore/Modal'
import Flex from '../StyledComponents/Flex'
import Button from '../StyledComponents/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { ADD_CATEGORY } from '../../redux/actionTypes'
import { addCategoryAction } from '../../redux/categoryReducer'

export default function ModalAddCategory({ active, setActive, icons }) {
	const dispatch = useDispatch()
	const categories = useSelector(state => state.category.categories)
	const [selectedIcon, setSelectedIcon] = useState('')
	const [categoryName, setCategoryName] = useState('')
	const [categoryDescription, setCategoryDescription] = useState('')

	function selectIconHandler(icon) {
		setSelectedIcon(icon)
	}

	const faTrashAlt = icons.faTrashAlt

	const categoryIcons = []

	function onChangeHandler(e) {
		if (e.target.name === 'name') {
			setCategoryName(e.target.value)
		} else if (e.target.name === 'description') {
			setCategoryDescription(e.target.value)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()
		dispatch(
			addCategoryAction({
				name: categoryName,
				icon: selectedIcon,
				description: categoryDescription,
			})
		)
	}

	for (const [iconName, iconValue] of Object.entries(icons)) {
		if (iconValue !== faTrashAlt) {
			categoryIcons.push(
				<Flex
					width="20%"
					margin="8px"
					justify="center"
					key={Math.trunc(Math.random() * Date.now())}
				>
					<FontAwesomeIcon
						onClick={() => {
							selectIconHandler(iconName)
						}}
						name={iconName}
						icon={iconValue}
					/>
				</Flex>
			)
		}
	}

	return (
		<Modal display={active ? 'block' : 'none'}>
			<ModalDialog>
				<Flex margin="auto 20px">
					<ModalContent>
						<ModalClose onClick={() => setActive(false)}>&times;</ModalClose>
						<form onSubmit={e => handleSubmit(e)}>
							<ModalInput
								onChange={e => onChangeHandler(e)}
								placeholder="Name"
								name="name"
								value={categoryName}
							/>
							<ModalInput
								onChange={e => onChangeHandler(e)}
								placeholder="Description"
								name="description"
								value={categoryDescription}
							/>
							<Flex
								justify={'space-around'}
								width="60%"
								margin="20px auto"
								wrap="wrap"
							>
								{categoryIcons}
							</Flex>
							<Button type="submit">Add new category</Button>
						</form>
					</ModalContent>
				</Flex>
			</ModalDialog>
		</Modal>
	)
}
