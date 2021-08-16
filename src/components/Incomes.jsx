import React from 'react';
import styled from 'styled-components';

const Table = styled.div`

`;

export default function Incomes() {
    return(
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
    )
}