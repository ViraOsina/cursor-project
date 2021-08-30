import React from 'react';
import MainChart from './main-chart';
import IncomeChart from './income-chart';
import ChargesChart from './charges-chart';
import Flex from '../StyledComponents/Flex'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
//import TableItems from '../dataBase';
//import TableItemsIncomes from '../dataBaseIncomes'

const ColumnFlex = styled(Flex)`
  flex-direction:column;
  background-color: rgba(41,126,166, 0.3)
`;

const Chart = () => {
  const chargesDB = useSelector(state => state.homeReducer.chargesDB);
  const incomesDB = useSelector(state => state.homeReducer.incomesDB);

  //console.log(TableItems, TableItemsIncomes)

  let chargesSum = [];
  let chargesCategories = [];
  let chargesDates = [];

  for (let i = 0; i < chargesDB.length; i++) {

      chargesSum = [...chargesSum, +chargesDB[i].money];
      chargesCategories = [...chargesCategories, chargesDB[i].category];
      chargesDates = [...chargesDates, chargesDB[i].date];
    
  }

  let incomeSum = [];
  let incomeCategories = [];
  let incomeDates = [];

  for (let i = 0; i < incomesDB.length; i++) {

      incomeSum = [...incomeSum, +incomesDB[i].money];
      incomeCategories = [...incomeCategories, incomesDB[i].category];
      incomeDates = [...incomeDates, incomesDB[i].date];
    
  }

  //dates in order  
  let dates = [];
  dates = chargesDates.concat(incomeDates);
  dates = dates.map(x => new Date(x).getTime()).sort((a,b) => a-b);
  const sortedDates = [...new Set(dates)].map(x => new Date(x).toLocaleDateString())

  //income and charges in chronological order
  let incomes = [];
  let charges = [];

  for (let i = 0; i < sortedDates.length; i++) {
    for (let j = 0; j < incomeDates.length; j++) {
      let nullIncome = 0;
      if (incomesDB[j].date === sortedDates[i]) {
        nullIncome = incomesDB[j].money + nullIncome;
        incomes[i] = nullIncome;
      }
    }
    for (let j = 0; j < chargesDates.length; j++) {
      let nullCharges = 0;
      if (chargesDB[j].date === sortedDates[i]) {
        nullCharges = chargesDB[j].money + nullCharges;
        charges[i] = nullCharges;
      }
    }
  }

  //sorted data for incomes and charges
  const uniqueIncomeCategories = [...new Set(incomeCategories)];
  const uniqueChargesCategories = [...new Set(chargesCategories)];
  let groupedIncomes = [];
  let groupedCharges = [];

  for (let i = 0; i < incomeCategories.length; i++) {
    for (let j = 0; j < incomeSum.length; j++) {
      
      if (incomesDB[j].category === uniqueIncomeCategories[i]) {
        let nullIncome = 0;
        nullIncome = +incomesDB[j].money + nullIncome;
        groupedIncomes[i] = nullIncome;
        console.log(groupedIncomes)
      }
    }
  }

  for(let i = 0; i < uniqueChargesCategories.length; i++){
    for (let j = 0; j < chargesSum.length; j++) {
      let nullCharges = 0;
      if (chargesDB[j].category === uniqueChargesCategories[i]) {
        nullCharges = +chargesDB[j].money + nullCharges;
        groupedCharges[i] = nullCharges;
      }
    }
  }

    return (
      <div>
        <ColumnFlex>
          <MainChart 
            chargesData = {charges} 
            incomeData = {incomes} 
            dates = {sortedDates}/>

          <Flex>
            <IncomeChart incomeLabels = {uniqueIncomeCategories} incomeData = {groupedIncomes}/>
            <ChargesChart chargesLabels = {uniqueChargesCategories} chargesData = {groupedCharges}/>
          </Flex>
        </ColumnFlex>
      </div>
    );
}

export default Chart;

