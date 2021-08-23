import React, { useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, Route, useRouteMatch } from 'react-router-dom'
import Charges from './Charges'
import Incomes from './Incomes'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Links = styled.div`
	display: flex;
`

const AdditionalLink = styled(NavLink)`
	display: inline-block;
	width: 200px;
	text-decoration: none;
	color: '#000000';
	text-align: center;
	padding: 5px;
	:hover {
		color: #26b8ff;
	}
	&.active {
		color: #26b8ff;
	}
`

function Home({ dataArr, dataArrIncomes, setData, setIncomes, removeItem }) {
	const match = useRouteMatch()
	const [display, setDisplay] = useState('none')

	const openModal = () => {
		setDisplay('block')
	}

	const closeModal = () => {
		setDisplay('none')
	}

	return (
		<>
			<Links>
				<AdditionalLink to={`${match.url}/charges`}>Charges</AdditionalLink>
				<AdditionalLink to={`${match.url}/incomes`}>Incomes</AdditionalLink>
			</Links>

			<Route path={`${match.path}/charges`}>
				<Charges
					dataArr={dataArr}
					setData={setData}
					removeItem={removeItem}
					openModal={openModal}
					closeModal={closeModal}
					display={display}
				/>
			</Route>
			<Route path={`${match.path}/incomes`}>
				<Incomes
					dataArrIncomes={dataArrIncomes}
					setIncomes={setIncomes}
					removeItem={removeItem}
					openModal={openModal}
					closeModal={closeModal}
					display={display}
				/>
			</Route>
		</>
	)
}

export default Home
