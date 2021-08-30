import React from 'react';
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
  padding: 5px;
  background-color: rgb(41,126,166,0.2);
  justify-content: flex-end;
`;

const FilterInput = styled.div`
	padding: 5px;
  color: rgba(132,125,115,1);
`


const MainChart = ({chargesData, incomeData, dates}) => {
  const arrayOfDates = [...dates]
  let filteredDatesStart = arrayOfDates;
  
  function filterDataStart(e) {
      const startDate = e.target.value;
      const startDateValue = new Date(startDate).getTime()
      
      const arrayOfDatesNumbers = arrayOfDates.map(x => new Date(x).getTime());
      const filteredDatesValues = arrayOfDatesNumbers.filter(date => date > startDateValue);
      const startDateIndex = arrayOfDatesNumbers.indexOf(filteredDatesValues[0]);
      
      if (startDateIndex !== -1) {
        filteredDatesStart = arrayOfDates.slice(startDateIndex);
        console.log(filteredDatesStart)
      } 

  }

  function filterDataEnd(e) {
    const endDate = e.target.value;
    const endDateValue = new Date(endDate).getTime()
    const arrayOfDates = [...dates]
    const arrayOfDatesNumbers = arrayOfDates.map(x => new Date(x).getTime());
    const filteredDatesValues = arrayOfDatesNumbers.filter(date => date < endDateValue).reverse();
    const endDateIndex = arrayOfDatesNumbers.indexOf(filteredDatesValues[0]);
    console.log(endDateIndex);
}

const state = {
  labels: filteredDatesStart, 
  datasets: [
    {
      label: 'Income',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(253,178,1,1)',
      borderColor: 'rgba(253,178,1,1)',
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

console.log(filteredDatesStart)
    return (
    <div>
      <FilterFlex>
          <FilterInput> filter from date:
              <input type="date" id="start-filter-interval" onChange={value => {filterDataStart(value)}}></input>
          </FilterInput>
          <FilterInput> filter to date:
              <input type="date" id="end-filter-interval" onChange={value => {filterDataEnd(value)}}></input>
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