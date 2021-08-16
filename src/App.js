import './App.css';
import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import styled from 'styled-components';
import logo from './mywallet.png';

import Home from './components/Home';
import Chart from './components/charts';



const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

`;

const Navigator = styled.div`
  width: 20%;
  height: 100vh;
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  textAlign: right;
`;

export default function App() {
  return (
    <Wrapper>
      <Navigator>
        <Logo src={logo} alt='logo'/>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/charts'>Charts</NavLink>
      </Navigator>
      <Content>
        <Balance>Balance: $2500</Balance>
        <Route path='/home' component={Home}/>
        <Route path='/charts' component={Chart}/>
      </Content>
    </Wrapper>
  );
}
