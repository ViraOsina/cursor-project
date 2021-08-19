import React from 'react';
import MainChart from './main-chart';
import IncomeChart from './income-chart';
import ChargesChart from './charges-chart';
import Flex from '../StyledComponents/Flex'
import styled from 'styled-components';

const ColumFlex = styled(Flex)`
  flex-direction:column
`;

const rawData = localStorage.getItem('DataBase');
//there is no definition which localStorage entry is "income" and which is "charge". For now assume all are charges
let chargesData = [];
let chargesCategories = [];
let chargesDates = [];

for (let i = 0; i < rawData.length; i++) {

    chargesData = [...chargesData, rawData[i].money];
    chargesCategories = [...chargesCategories, rawData[i].category];
    chargesDates = [...chargesDates, rawData[i].date];
  
}


const Chart = () => {
    return (
      <div>
        <ColumFlex>
          <MainChart {...chargesDates} {...chargesData} />
          <Flex>
            <IncomeChart />
            <ChargesChart {...chargesCategories} />
          </Flex>
        </ColumFlex>
      </div>
    );
}

export default Chart;

