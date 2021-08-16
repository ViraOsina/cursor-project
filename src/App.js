import './App.css';
import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';


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
        <Link exact to='/cursor-project'>Home</Link>
      </Navigator>
      <Content>
        <div style={{height: '100px', textAlign: 'right'}}>Balance: $2500</div>
        <Route path='/cursor-project' component={Home}/>
      </Content>
    </Wrapper>
  );
}
