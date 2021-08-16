import React from 'react';
import styled from 'styled-components';
import {NavLink, Route, useRouteMatch} from 'react-router-dom';
import Charges from './Charges';
import Incomes from './Incomes';

const Links = styled.div`
    display: flex;

`;

const LinkSpan = styled.span`
    display: inline-block;
    width: 200px;
    text-decoration: none;
    color: #000000;
    text-align: center;
    padding: 5px;
`;


const Filter = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

`;

const Span = styled.span`

`;

const InputSelect = styled.select`

`;

const AddMore = styled.button`

`;


function Home() {
    const match = useRouteMatch();
    return(
        <>
            <Links>
                <NavLink to={`${match.url}/charges`}><LinkSpan>Charges</LinkSpan></NavLink>
                <NavLink to={`${match.url}/incomes`}><LinkSpan>Incomes</LinkSpan></NavLink>
                
            </Links>
            <Filter>
                <Span>My Charges</Span>
                <InputSelect >
                    <option>Food</option>
                    <option>Health</option>
                    <option>Travel</option>
                </InputSelect>
                <AddMore>Add more</AddMore>
            </Filter>

            <Route path={`${match.url}/charges`} component={Charges} />
            <Route path={`${match.url}/incomes`} component={Incomes} />
        </>
    )
}

export default Home;