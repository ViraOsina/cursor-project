import React from 'react';
import MainChart from './main-chart';
import IncomeChart from './income-chart';
import ChargesChart from './charges-chart';
import Flex from '../StyledComponents/Flex'
import styled from 'styled-components';

const ColumFlex = styled(Flex)`
  flex-direction:column
`;


const Chart = () => {
    return (
      <div>
        <ColumFlex>
          <MainChart />
          <Flex>
            <IncomeChart />
            <ChargesChart />
          </Flex>
        </ColumFlex>
      </div>
    );
}

export default Chart;

