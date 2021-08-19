import './App.css';
import React, {useState} from 'react';
import {NavLink, Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import styled from 'styled-components';
import logo from './mywallet.png';
import Home from './components/Home/Home';
import Chart from './components/charts';
import Categories from './components/Categories/Categories';
import PageNotFound from './components/StyledComponents/PageNotFound';
import TableItems from './components/dataBase';


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
`;

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
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
	width: 100%;
`;



const Balance = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const BalanceHeader = styled.h3`
  margin: 10px 20px;
  color: #5f5f5f;
`;
const MoneyHeader = styled.h2`
  margin: 0 20px;
  
`;

export default function App() {
  const match = useRouteMatch();

  const [dataArr, setData] = useState(localStorage.DataBase ? JSON.parse(localStorage.DataBase) : TableItems);
  const removeItem = (id) => {
    const filteredArr = dataArr.filter((item, index) => index !== id);
    setData(filteredArr);
    localStorage.setItem('DataBase', JSON.stringify(filteredArr));
};

  return (
    <Wrapper>
      <Navigator>
        <Logo src={logo} alt='logo'/>
        <MainLink to='/cursor-project'>Home</MainLink>
        <MainLink exact to="/categories">Categories</MainLink>
        <MainLink to='/charts'>Charts</MainLink>
      </Navigator>
      <Content>
        <Balance>
          <BalanceHeader>Balance</BalanceHeader>
          <MoneyHeader>$ {dataArr.reduce((acc, cur) => {
            let bal = acc + parseFloat(cur.money);
            return +bal.toFixed(2)
          }, 0)}</MoneyHeader>
        </Balance>
        <Switch>
          <Route path='/cursor-project'>
            <Home removeItem={removeItem} dataArr={dataArr} setData={setData}/>
            <Redirect to={`${match.url}/charges`}/>
          </Route>
          <Route exact path='/categories' component={Categories}/>
          <Route path='/charts' component={Chart}/>
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Content>
    </Wrapper>
  );
}
