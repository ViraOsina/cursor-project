import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../Icons';

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    padding: 10px 20px;
`;

export default function TableRow({data, removeId, removeItem, target}) {
    return(
    <Row>
        <span><FontAwesomeIcon icon={Icons[data.category]} /> {data.category}</span>
        <span>{data.description}</span>
        <span>{data.date}</span>
        <span>$ { (parseFloat(data.money)).toFixed(2) }</span>
        <span style={{cursor: 'pointer'}}><FontAwesomeIcon onClick={() => {
            removeItem(removeId, target)
        }} icon={Icons.faTrashAlt} /> <FontAwesomeIcon icon={Icons.faPen} /></span>
    </Row>
    )
}

