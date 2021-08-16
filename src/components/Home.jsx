import React from 'react';
import styled from 'styled-components';
import {Link, Route, useRouteMatch} from 'react-router-dom';


const Links = styled.div`
    display: flex;

`;


const Filter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

`;

const Span = styled.span`

`;

const InputSelect = styled.input`

`;

const AddMore = styled.button`

`;

const Table = styled.div`
    
`;

function Home() {
    const match = useRouteMatch();
    return(
        <>
            <Links>
                <Link exact to={`${match.url}/charges`}>Charges</Link>
                <Link exact to={`${match.url}/incomes`}>Incomes</Link>
                <Route exact path='/charges' />
                <Route exact path='/incomes' />
            </Links>
            <Filter>
                <Span>My Charges</Span>
                <InputSelect />
                <AddMore>Add more</AddMore>
            </Filter>
            <Table>
                <table>
                    <tr>
                        <td>Category</td><td>Description</td><td>Date</td><td>Money</td><td>Action</td>
                    </tr>
                    <tr>
                        <td>Food</td><td>meals</td><td>{new Date().toString().slice(4, 15)}</td><td>25$</td><td>...</td>
                    </tr>
                </table>
            </Table>
        </>
    )
}

export default Home;