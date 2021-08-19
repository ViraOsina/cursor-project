import './App.css';
import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import logo from './mywallet.png';
import Home from './components/Home/Home'
import Chart from './components/Charts/charts'
import Categories from './components/Categories/Categories'
import PageNotFound from './components/StyledComponents/PageNotFound'

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
`

const Navigator = styled.div`
  width: 20%;
  height: 100vh;
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLink = styled(NavLink)`
  text-decoration: none;
  color: ##5f5f5f;
`;

const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

const Content = styled.div`
	width: 100%;
`;



const Balance = styled.div`
  height: 100px;
  text-align: right;
`;

export default function App() {
  return (
    <Wrapper>
      <Navigator>
        <Logo src={logo} alt='logo'/>
        <MainLink to='/cursor-project'>Home</MainLink>
        <MainLink exact to="/categories">Categories</MainLink>
        <MainLink to='/charts'>Charts</MainLink>
      </Navigator>
      <Content>
        <Balance>Balance: $2500</Balance>
        <Switch>
          <Route path='/cursor-project' component={Home}/>
          <Route exact path='/categories' component={Categories}/>
          <Route path='/charts' component={Chart}/>
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Content>
    </Wrapper>
  );
}
