import React, { useState } from 'react';
//npm install --save react-chartjs-2 chart.js
import {Line} from 'react-chartjs-2';
import Flex from '../StyledComponents/Flex';
import styled from 'styled-components';

const ChartFlex = styled(Flex)`
  margin-bottom: 15px;
  background-color: rgba(41,126,166,0.2);
  height: 45vh;
  color: black;
`;

const FilterFlex = styled(Flex)`
  margin-top: 8px;
  
  background-color: rgb(41,126,166,0.2);
  justify-content: flex-end;
  
`;

const FilterInput = styled.div`
	margin-right: 5px;
  color: rgba(132,125,115,1);
  
`


const MainChart = ({chargesData, incomeData, dates}) => {
  const [inputDateStart, setDateStart] = useState();
  const [inputDateEnd, setDateEnd] = useState();

  let datesEnd = inputDateEnd ? new Date(inputDateEnd.target.value).getTime() : Date.now();
  let datesStart = inputDateStart ? new Date(inputDateStart.target.value).getTime() : new Date(dates[0]).getTime();
  
  let arrayOfDates = [...dates];
  arrayOfDates = arrayOfDates.filter(item => new Date(item).getTime() <= datesEnd && new Date(item).getTime() >= datesStart);

const state = {
  labels: arrayOfDates, 
  datasets: [
    {
      label: 'Income',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(252, 255, 0,1)',
      borderColor: 'rgba(252, 255, 0,1)',
      borderWidth: 2,
      data: incomeData
    },
    {
        label: 'Expenses',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(0,16,28,1)',
        borderColor: 'rgba(0,16,28,1)',
        borderWidth: 2,
        data: chargesData,
        
      }
  ]
}

    return (
    <div>
      <FilterFlex>
          <FilterInput> filter from date:
              <input type="date" id="start-filter-interval" onChange={value => {setDateStart(value)}}></input>
          </FilterInput>
          <FilterInput> filter to date:
              <input type="date" id="end-filter-interval"  onChange={value => {setDateEnd(value)}}></input>
          </FilterInput>        
          
      </FilterFlex>
      <ChartFlex>
        <Line
          data={state}
          
          options={{
            plugins:{
              title:{
              display:true,
              text:'click to disable category',
            },
            legend:{
              display:true,
              position:'top'
            },

            
          },
          maintainAspectRatio: false,
          }}
        />
    
      </ChartFlex>
      
      </div> 
    );
}

export default MainChart;