import React, { useState } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import logo from './mywallet.png'
import Home from './components/Home/Home'
import Chart from './components/Charts/charts'
import CategoriesPage from './components/Categories/CategoriesPage'
import PageNotFound from './components/StyledComponents/PageNotFound'
import TableItems from './components/dataBase'
import TableItemsIncomes from './components/dataBaseIncomes'


const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
`

const Navigator = styled.div`
	width: 8%;
	height: 100vh;
	background: #efefef;
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const MainLink = styled(NavLink)`
	text-decoration: none;
	color: #5f5f5f;
	margin: 5px;
	:hover {
		color: #26b8ff;
	}
	&.active {
		color: #26b8ff;
	}
`

const Logo = styled.img`
	width: 100%;
	height: auto;
`

const Content = styled.div`
	width: 100%;
`

const Balance = styled.div`
	height: 160px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
`

const BalanceHeader = styled.h3`
	margin: 10px 20px;
	color: #5f5f5f;
`
const MoneyHeader = styled.h2`
	margin: 0 20px;
`

export default function App() {
	const [dataArr, setData] = useState(
		localStorage.DataBase ? JSON.parse(localStorage.DataBase) : TableItems
	)
	const [dataArrIncomes, setIncomes] = useState(
		localStorage.DataBaseIncomes
			? JSON.parse(localStorage.DataBaseIncomes)
			: TableItemsIncomes
	)

	const removeItem = (id, target) => {
		const filteredArr = target.filter((item, index) => index !== id)
		console.log(target === dataArr)

		if (target === dataArr) {
			setData(filteredArr)
			localStorage.setItem('DataBase', JSON.stringify(filteredArr))
		} else {
			setIncomes(filteredArr)
			localStorage.setItem('DataBaseIncomes', JSON.stringify(filteredArr))
		}
	}

	const countBalance = () => {
		const inc = dataArrIncomes.reduce((acc, cur) => {
			let bal = acc + parseFloat(cur.money)
			return +bal.toFixed(2)
		}, 0)
		const char = dataArr.reduce((acc, cur) => {
			let bal = acc + parseFloat(cur.money)
			return +bal.toFixed(2)
		}, 0)
		return inc - char
	}

	return (
		<Wrapper>
			<Navigator>
				<Logo src={logo} alt="logo" />
				<MainLink to="/cursor-project">Home</MainLink>
				<MainLink exact to="/categories">
					Categories
				</MainLink>
				<MainLink to="/charts">Charts</MainLink>
			</Navigator>
			<Content>
				<Balance>
					<BalanceHeader>Balance</BalanceHeader>
					<MoneyHeader>$ {countBalance()} </MoneyHeader>
				</Balance>
				<Switch>
					<Route path="/cursor-project">
						<Home
							removeItem={removeItem}
							dataArr={dataArr}
							dataArrIncomes={dataArrIncomes}
							setData={setData}
							setIncomes={setIncomes}
						/>
						<Redirect to="/cursor-project/charges" />
					</Route>
					<Route exact path="/categories" component={CategoriesPage} />
					<Route path="/charts" component={Chart} />
					<Route exact path="*" component={PageNotFound} />
				</Switch>
			</Content>
		</Wrapper>
	)
}
