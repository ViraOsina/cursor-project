import './App.css'
import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Home from './components/Home'
import Chart from './components/charts'
import Categories from './components/Categories/Categories'
import PageNotFound from './components/StyledComponents/PageNotFound'

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
`

const Navigator = styled.div`
	padding: 50px;
	height: 100vh;
	background: #efefef;
`

const Content = styled.div`
	width: 100%;
`

export default function App() {
	return (
		<Wrapper>
			<Navigator>
				<NavLink exact to="/cursor-project">
					Home
				</NavLink>
				<NavLink exact to="/cursor-project/charts">
					Charts
				</NavLink>
				<NavLink exact to="/cursor-project/categories">
					Categories
				</NavLink>
			</Navigator>
			<Content>
				<div style={{ height: '100px', textAlign: 'right' }}>
					Balance: $2500
				</div>
				<Switch>
					<Route exact path="/cursor-project" component={Home} />
					<Route exact path="/cursor-project/charts" component={Chart} />
					<Route
						exact
						path="/cursor-project/categories"
						component={Categories}
					/>
					<Route exact path="*" component={PageNotFound} />
				</Switch>
			</Content>
		</Wrapper>
	)
}
