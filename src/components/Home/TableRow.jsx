import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    padding: 10px 20px;
`;

export default function TableRow({data}) {
    return(
    <Row>
        <span>{data.category}</span>
        <span>{data.description}</span>
        <span>{data.date}</span>
        <span>{data.money}</span>
        <span>...</span>
    </Row>

    )
}

