import React from 'react';
import styled from 'styled-components';
import {NavLink, Route, useRouteMatch} from 'react-router-dom';
import Charges from './Charges';
import Incomes from './Incomes';
import ModalForm from './modalComponent_addMore/Modal';
import { useState } from 'react';

const Links = styled.div`
    display: flex;

`;

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
`;

const Filter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

`;

const InputBlock = styled.div`

`;

const Span = styled.span`
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    margin: 25px 10px 25px 0;  
    color: #5f5f5f;
`;

const Select = styled.select`
    font-size: 18px;
    border: none;
    outline: none;
    color: #5f5f5f;
`;

const AddMore = styled.button`
    height: 40px;
    padding: 0 20px;
    background: #26b8ff;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
`;

const tableItem = [
    {
        category: 'Food',
        description: "All my food",
        date: '22 Aug',
        money: '$25',
    },
    {
        category: 'Travel',
        description: "buy a tent",
        date: '15 May',
        money: '$180',
    },
    {
        category: 'Health',
        description: "Medicine",
        date: '27 Mar',
        money: '$13',
    },
];


function Home() {
    const match = useRouteMatch();
    const [dataArr, setData] = useState(localStorage.DataBase ? JSON.parse(localStorage.DataBase) : tableItem);
    const [display, setDisplay] = useState('none');

    const removeItem = (id) => {
        const filteredArr = dataArr.filter((item, index) => index !== id);
        setData(filteredArr);
        localStorage.setItem('DataBase', JSON.stringify(filteredArr));
    };

    const openModal = () => {
        setDisplay('block');
    };

    const closeModal = () => {
        setDisplay('none')
    };

    return(
        <>
            <Links>
                <AdditionalLink to={`${match.url}/charges`}>Charges</AdditionalLink>
                <AdditionalLink to={`${match.url}/incomes`}>Incomes</AdditionalLink>
                
            </Links>
            <Filter>
                <InputBlock>
                    <Span>My Charges</Span>
                    <Select >
                        <option>this week</option>
                        <option>this month</option>
                    </Select>
                </InputBlock>
                <AddMore onClick={openModal}>Add more</AddMore>
            </Filter>

            <Route path={`${match.url}/charges`}>
                <Charges data={dataArr} removeItem={removeItem}/>
            </Route>
            <Route path={`${match.url}/incomes`}>
                <Incomes data={dataArr}/>
            </Route>
            <ModalForm display={display} closeModal={closeModal} setData={setData} dataArr={dataArr} />
        </>
    )
}

export default Home;