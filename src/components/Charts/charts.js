import React from 'react';
import MainChart from './main-chart';
import IncomeChart from './income-chart';
import ChargesChart from './charges-chart';
import Flex from '../StyledComponents/Flex'
import styled from 'styled-components';

const ColumFlex = styled(Flex)`
  flex-direction:column
`;

const rawData = JSON.parse(localStorage.getItem('DataBase'));
//there is no definition which localStorage entry is "income" and which is "charge". For now assume all are charges
let chargesData = [];
let chargesCategories = [];
let chargesDates = [];

for (let i = 0; i < rawData.length; i++) {

    chargesData = [...chargesData, rawData[i].money];
    chargesCategories = [...chargesCategories, rawData[i].category];
    chargesDates = [...chargesDates, rawData[i].date];
  
}

console.log('data', rawData, chargesCategories)


const Chart = () => {
    return (
      <div>
        <ColumFlex>
          <MainChart chargesData = {chargesData} chargesDates ={chargesDates} />
          <Flex>
            <IncomeChart />
            <ChargesChart {...chargesCategories} />
          </Flex>
        </ColumFlex>
      </div>
    );
}

export default Chart;

