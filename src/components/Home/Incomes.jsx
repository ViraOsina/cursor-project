import React, { useState } from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';
import ModalForm from './modalComponent_addMore/Modal';
import {openModalAction} from '../../redux/homeReducer';
import { useDispatch, useSelector } from 'react-redux';
import EditModal from './modalComponent_addMore/EditModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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
    margin-top: 10px;
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
    margin: 0 10px;
    border: none;
    outline: none;
    color: #5f5f5f;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const AddMore = styled.button`
    height: 40px;
    padding: 0 20px;
    background: #277297;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
`;

const FilterBtn = styled.button`
    padding: 5px;
    margin: 0 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    color: #5f5f5f;
	text-align: center;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: white;
`;



const Calendars = styled(Calendar)`
    position: absolute;
    display: ${props => props.display ? 'block' : 'none'};
`;

export default function Incomes(props) {
    const dispach = useDispatch();
	const incomesDB = useSelector(state => state.homeReducer.incomesDB);
    const targetItem = useSelector(state => state.homeReducer.targetItem);
    const categories = useSelector(state => state.category.categories);
    const [alphabetSort, setAlphabetSort] = useState('');
    const [moneySort, setMoneySort] = useState('');
    const [selectCategory, setSelectCategory] = useState('');
    const [inputMoney, setInputMoney] = useState('');
    const [inputMonth, setMonth] = useState();
    const [inputRange, setRange] = useState();
    let filteredIncomesArr = [...incomesDB];

// Sort
if (alphabetSort) {
    filteredIncomesArr=filteredIncomesArr.sort((a, b) => {
        return alphabetSort === 'true' ? (a.category > b.category ? 1 : -1) : (a.category < b.category ? 1 : -1)
    });
} else if (moneySort) {
    filteredIncomesArr=filteredIncomesArr.sort((a, b) => {
        return moneySort === 'true' ? a.money - b.money : b.money - a.money;
    })
} else {
    filteredIncomesArr = [...incomesDB];
}


// Filter
    filteredIncomesArr = selectCategory && inputMoney ? incomesDB.filter(item => item.category === selectCategory && item.money <= inputMoney)
        : selectCategory ? incomesDB.filter(item => item.category === selectCategory) 
        : inputMoney ? incomesDB.filter(item => item.money <= inputMoney) : filteredIncomesArr;

        filteredIncomesArr = inputMonth ? filteredIncomesArr.filter(item => inputMonth.getMonth() === new Date(item.milliseconds).getMonth()) : filteredIncomesArr;

        filteredIncomesArr = inputRange ? filteredIncomesArr.filter(item => inputRange[0].getDate() <= new Date(item.milliseconds).getDate() 
         && inputRange[1].getDate() >= new Date(item.milliseconds).getDate()) : filteredIncomesArr;
     

    return(
        <>
            <Filter>
                <InputBlock>
                    <Span>Filter: </Span>
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
                <FilterBtn onClick={() => props.setDisplay(!props.display)}>Select date</FilterBtn>
                    <FilterBtn onClick={() => {setMonth(); setRange()}}>Reset date</FilterBtn>
                    
                      <Calendars
                        display={props.display}
                        returnValue={'range'}
                        selectRange={true}
                        onChange={value => {setRange(value)}}
                        onClickMonth={value => {setRange();setMonth(value)}}
                        maxDate={new Date()}
                        defaultView={'year'}/> 
                </InputBlock>
                <AddMore onClick={() => {dispach(openModalAction())}}>Add more</AddMore>
            </Filter>
            <Filter>
                <InputBlock>
                    <Span>Sort: </Span>
                    <Select onChange={e => {
                        setAlphabetSort(e.target.value)
                    }}>
                        <option value={''}>---</option>
                        <option value={true}>A - Z</option>
                        <option value={false}>Z - A</option>
                    </Select>
                    <Select onChange={e => {
                        setMoneySort(e.target.value)
                    }}>
                        <option value={''}>---</option>
                        <option value={true}>From lower</option>
                        <option value={false}>From higher</option>
                    </Select>
                </InputBlock>
            </Filter>
            <Table>
                <span>Category</span>
                <span>Description</span>
                <span>Date</span>
                <span>Money</span>
                <span>Action</span>
            </Table>
            {filteredIncomesArr.map((item, index, arr) => {
                return <TableRow key={index} removeId={index} data={item} arr={arr} target={'incomes'}/>
        })}
        <ModalForm target='incomes'/>
        {targetItem ? <EditModal target={'incomes'}/> : null}

    </>
    )
}