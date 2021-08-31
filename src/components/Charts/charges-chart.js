import React from 'react';
//npm install --save react-chartjs-2 chart.js
import { Pie } from 'react-chartjs-2';
import Flex from '../StyledComponents/Flex';
import styled from 'styled-components';

const DesignedFlex = styled(Flex)`
  &:hover {
    background-color: rgba(132,125,115,0.1)
  }
`;

const ChargesChart = ({chargesLabels, chargesData}) => {
    
    function randomColor() {
        const h = Math.random() * 360;
        const s = Math.random() * (100 - 60) + 60;
        const l = Math.random() * (80 - 40) + 40;
        
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

       
    function backgroundColor() {
        let backgroundColors = [];
        for(let i = 0; i < chargesLabels.length; i++) {
            backgroundColors = [...backgroundColors, randomColor()];
        }
        return backgroundColors;
    }

    const data = {
        labels: chargesLabels,
        datasets: [{
        label: 'Charges by category',
        data: chargesData,
        backgroundColor: backgroundColor(),
        }]
    };


    return (
        <DesignedFlex>
        <Pie
          data={data}
          height={300}
          options={{
              plugins: {
                title:{
                    display:true,
                    text:'Charges by category',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'bottom'
                },
              },
              maintainAspectRatio: false,
          }}
        />
        </DesignedFlex>
    )
}

export default ChargesChart;