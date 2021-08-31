import React from 'react';
//npm install --save react-chartjs-2 chart.js
import { Bar } from 'react-chartjs-2';
import Flex from '../StyledComponents/Flex';
import styled from 'styled-components';

const DesignedFlex = styled(Flex)`
  &:hover {
    background-color: rgba(132,125,115,0.1)
  }
`;


function randomColor() {
    const h = Math.random() * 360;
    const s = Math.random() * (100 - 60) + 60;
    const l = Math.random() * (80 - 40) + 40;
    
    return `hsl(${h}, ${s}%, ${l}%)`;
}

const IncomeChart = ({incomeLabels, incomeData}) => {

function backgroundColor() {
    let backgroundColors = [];
    for(let i = 0; i < incomeLabels.length; i++) {
        backgroundColors = [...backgroundColors, randomColor()];
    }
    return backgroundColors;
}

const data = {
    labels: incomeLabels,
    datasets: [{
      label: 'Income by category',
      data: incomeData,
      backgroundColor: backgroundColor(),
    }]
  };


    return (
      <DesignedFlex>
        <Bar
          data={data}
          height={300}
          options={{
            plugins: {
                legend: {
                    display: false,
                    position:'bottom',
                    
                  },

                  title:{
                      display:true,
                      text:'Income by category',
                      fontSize:20
                  },
                   responsive: true  
              },
                      
              maintainAspectRatio: false,
          }}
        />
      </DesignedFlex>
    );
}

export default IncomeChart;