import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../Icons';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ITEM } from '../../redux/actionTypes';
import { openEditModalAction } from '../../redux/homeReducer';
import EditModal from '../Home/modalComponent_addMore/EditModal';

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    padding: 10px 20px;
`;

export default function TableRow({data, removeId, arr, target}) {
    const dispatch = useDispatch();
    const targetItem = useSelector(state => state.homeReducer.targetItem);

    if(targetItem) {
        return (
            <>
                <Row>
                    <span><FontAwesomeIcon icon={Icons[data.category]} /> {data.category}</span>
                    <span>{data.description}</span>
                    <span>{data.date}</span>
                    <span>$ { (parseFloat(data.money)).toFixed(2) }</span>
                    <span style={{cursor: 'pointer'}}>
                        <FontAwesomeIcon onClick={() => {
                            const filteredArr = arr.filter((item, index) => index !== removeId)
                            dispatch({
                                type: REMOVE_ITEM,
                                filteredArr,
                                target: target,
                            });
                            }} 
                            icon={Icons.faTrashAlt} /> 
                        <FontAwesomeIcon 
                            icon={Icons.faPen}
                            onClick={() => dispatch(openEditModalAction(removeId, data))}
                    /></span>        
                </Row>
                <EditModal target={target} data={data}/>
            </>
        )
    } else {
        return(
            <>
                <Row>
                    <span><FontAwesomeIcon icon={Icons[data.category]} /> {data.category}</span>
                    <span>{data.description}</span>
                    <span>{data.date}</span>
                    <span>$ { (parseFloat(data.money)).toFixed(2) }</span>
                    <span style={{cursor: 'pointer'}}>
                        <FontAwesomeIcon onClick={() => {
                            const filteredArr = arr.filter((item, index) => index !== removeId)
                            dispatch({
                                type: REMOVE_ITEM,
                                filteredArr,
                                target: target,
                            });
                            }} 
                            icon={Icons.faTrashAlt}
                        /> <FontAwesomeIcon 
                            icon={Icons.faPen}
                            onClick={() => dispatch(openEditModalAction(removeId, data))}
                    /></span>        
                </Row>
            </>
        )
    }
    
}

