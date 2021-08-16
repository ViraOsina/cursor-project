import './App.css';
import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';
import Chart from './components/charts';



const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

`;

const Navigator = styled.div`
  padding: 50px;
  height: 100vh;
  background: #efefef;
`;

const Content = styled.div`
  width: 100%;
`;

export default function App() {
  return (
    <Wrapper>
      <Navigator>
        <NavLink exact to='/cursor-project'>Home</NavLink>
        <NavLink exact to='/charts'>Charts</NavLink>
      </Navigator>
      <Content>
        <div style={{height: '100px', textAlign: 'right'}}>Balance: $2500</div>
        <Route path='/cursor-project' component={Home}/>
        <Route path='/charts' component={Chart}/>
      </Content>
    </Wrapper>
  );
}
