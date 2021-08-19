import React from 'react';
//npm install --save react-chartjs-2 chart.js
import {Doughnut} from 'react-chartjs-2';
import Flex from '../StyledComponents/Flex'


function randomColor() {
    const h = Math.random() * 360;
    const s = Math.random() * (100 - 60) + 60;
    const l = Math.random() * (80 - 40) + 40;
    
    return `hsl(${h}, ${s}%, ${l}%)`;
}

const labels = ['category1', 'category2', 'category3', 'category4', 'category5', 'category6', 'category7'];

function backgroundColor() {
    let backgroundColors = [];
    for(let i = 0; i < labels.length; i++) {
        backgroundColors = [...backgroundColors, randomColor()];
    }
    return backgroundColors;
}

const data = {
    labels: labels,
    datasets: [{
      label: 'Charges by category',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: backgroundColor(),
    }]
  };

const ChargesChart = () => {
    return (
        <Flex>
        <Doughnut
          data={data}
         
          options={{
            title:{
              display:true,
              text:'Charges by category',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            maintainAspectRatio: false,
          }}
        />
        </Flex>
    )
}

export default ChargesChart;