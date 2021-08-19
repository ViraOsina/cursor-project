import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUtensils,
    faPen,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    padding: 10px 20px;
`;

export default function TableRow({data, removeId, removeItem}) {
    return(
    <Row>
        
        <span><FontAwesomeIcon icon={faUtensils} /> {data.category}</span>
        <span>{data.description}</span>
        <span>{data.date}</span>
        <span>$ { (parseFloat(data.money)).toFixed(2) }</span>
        <span><FontAwesomeIcon onClick={() => {
            removeItem(removeId)
        }} icon={faTrashAlt} /> <FontAwesomeIcon icon={faPen} /></span>
    </Row>

    )
}

