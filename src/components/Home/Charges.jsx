import React, { useState } from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';
import ModalForm from './modalComponent_addMore/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {openModalAction} from '../../redux/homeReducer';
import EditModal from './modalComponent_addMore/EditModal';



const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    border-top: 1px solid #cacaca;
    border-bottom: 1px solid #cacaca;
    padding: 10px 20px;
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

export const Input = styled.input`
	width: 100px;
    padding: 5px;
    margin: 0 10px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	border: none;
	font-size: 18px;
	text-align: center;
	outline: 0;
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
    padding: 5px;
    border: none;
    outline: none;
    color: #5f5f5f;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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

export default function Charges() {
    const dispach = useDispatch();
    const chargesDB =  useSelector(state => state.homeReducer.chargesDB);
    const targetItem = useSelector(state => state.homeReducer.targetItem);
    const categories = useSelector(state => state.category.categories);

    const [selectCategory, setSelectCategory] = useState('');
    const [inputMoney, setInputMoney] = useState('');
    const filteredChargesArr = selectCategory && inputMoney ? chargesDB.filter(item => item.category === selectCategory && item.money <= inputMoney)
     : selectCategory ? chargesDB.filter(item => item.category === selectCategory) 
     : inputMoney ? chargesDB.filter(item => item.money <= inputMoney) : chargesDB;

    return(
    <>
        <Filter>
            <InputBlock>
                <Span>My Charges</Span>
                <Select value={selectCategory} onChange={(e) => {
                    setSelectCategory(e.target.value);
                }}> <option value={''}>Select category</option>
                    {categories.map(category => {
                        return(
                            <option key={category.id}>{category.name}</option>
                        )
					})}
                </Select>
                <Input
                    onChange={e => {
                        setInputMoney(e.target.value)
                    }}
                    value={inputMoney}
                    required
                    placeholder="Money"
                    name="money"
                    type="number"
                />
            </InputBlock>
            <AddMore onClick={() => {dispach(openModalAction())}}>Add more</AddMore>
        </Filter>
        <Table>
            <span>Category</span>
            <span>Description</span>
            <span>Date</span>
            <span>Money</span>
            <span>Action</span>
        </Table>
        {filteredChargesArr.map((item, index, arr) => {
            return <TableRow key={index} removeId={index} data={item} arr={arr} target={'charges'}/>
        })}
        <ModalForm target='charges'/>
        {targetItem ? <EditModal target={'charges'}/> : null}
    </>
    )
}