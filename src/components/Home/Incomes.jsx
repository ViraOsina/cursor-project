import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 10px 20px;
`;

export default function Incomes(props) {
    return(
        <>
            <Table>
                <span>Category</span>
                <span>Description</span>
                <span>Date</span>
                <span>Money</span>
                <span>Action</span>
            </Table>
            {props.data.map((item, index) => {
                return <TableRow key={index} data={item}/>
        })}
        
    </>
    )
}