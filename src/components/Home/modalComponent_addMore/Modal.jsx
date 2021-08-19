import React, {useState} from 'react';
import styled from 'styled-components';


const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: ${props => props.display};
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .5)
`;

const ModalDialog = styled.div`
    max-width: 500px;
    margin: 40px auto
`;

const ModalContent = styled.div`
    position: relative;
    width: 100%;
    padding: 40px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 4px;
    max-height: 80vh;
    overflow-y: auto
`;


const ModalClose = styled.div`
    position: absolute;
    top: 8px;
    right: 14px;
    font-size: 30px;
    color: #000;
    opacity: .5;
    font-weight: 700;
    border: none;
    background-color: transparent;
    cursor: pointer
`;

const ModalTitle = styled.div`
    text-align: center;
    font-size: 22px;
    text-transform: uppercase
`;

const ModalInput = styled.input`
    display: block;
    margin: 20px auto 20px auto;
    width: 280px;
    height: 50px;
    background: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
    border: none;
    font-size: 18px;
    text-align: center;
    outline: 0
`;

const ModalSelect = styled.select`
    display: block;
    margin: 20px auto 20px auto;
    width: 280px;
    height: 50px;
    background: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
    border: none;
    font-size: 18px;
    text-align: center;
    outline: 0;
`;

const ModalBtn = styled.button`
    display: block;
    width: 280px;
    margin: 0 auto;
    padding: 5px 20px;
    height: 40px;
    background: #26b8ff;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
`;


export default function ModalForm (props) {
    const [category, setCategory] = useState('Food');
    const [description, setDesc] = useState('');
    const [date] = useState(new Date().toString().slice(4, 10));
    const [money, setMoney] = useState('');


    return (
        <Modal display={props.display}>
            <ModalDialog>
                <ModalContent>
                    <form action="#" >
                        <ModalClose onClick={props.closeModal} data-close>&times;</ModalClose>
                        <ModalTitle>Add Charge</ModalTitle>
                        <ModalSelect onChange={e => {setCategory(e.target.value)}} value={category} required name="category">
                            <option>Food</option>
                            <option>Restaurants</option>
                            <option>Travel</option>
                            <option>Health</option>
                            <option>Car</option>
                            <option>Home</option>
                            <option>Fun</option>
                        </ModalSelect>
                        <ModalInput onChange={e => {setDesc(e.target.value)}} value={description} required placeholder="Description" name="description" type="text" />
                        <ModalInput  readOnly value={date} name="date" type="text" />
                        <ModalInput onChange={e => {setMoney(e.target.value)}} value={money} required placeholder="Money" name="money" type="number" />
                        <ModalBtn onClick={(e) => {
                            localStorage.setItem('DataBase', JSON.stringify([...props.dataArr, {category, description, date, money}]));
                            props.setData([...props.dataArr, {category, description, date, money}]);
                            
                    }}>Add</ModalBtn>
                    </form>
                </ModalContent>
            </ModalDialog>
        </Modal>
    );
}
