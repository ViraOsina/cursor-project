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
  let incomesByDate = [];
  let chargesByDate = [];

  for (let i = 0; i < sortedDates.length; i++) {
    const incomeData = [...incomesDB];
    const reducer = (a, b) => a + b;
    const elementIncome = incomeData.filter(income => income.date === sortedDates[i])
                    .map(income => +income.money)
                    .reduce(reducer);
    incomesByDate.push(elementIncome);

    const chargesData = [...chargesDB];
    const elementCharges = chargesData.filter(charge => charge.date === sortedDates[i])
                    .map(charge => +charge.money)
                    .reduce(reducer);
    chargesByDate.push(elementCharges);
  }
  
  //sorted data by categories for incomes and charges
  const uniqueIncomeCategories = [...new Set(incomeCategories)];
  const uniqueChargesCategories = [...new Set(chargesCategories)];
  let groupedIncomes = [];
  let groupedCharges = [];

  for (let i = 0; i < uniqueIncomeCategories.length; i++) {
    const incomeData = [...incomesDB];
    const reducer = (a, b) => a + b;
    const elementIncome = incomeData.filter(income => income.category === uniqueIncomeCategories[i])
                    .map(income => +income.money)
                    .reduce(reducer);
    groupedIncomes.push(elementIncome);
  }
  
  for (let i = 0; i < uniqueChargesCategories.length; i++) {
    const chargesData = [...chargesDB];
    const reducer = (a, b) => a + b;
    const elementCharges = chargesData.filter(charge => charge.category === uniqueChargesCategories[i])
                    .map(charge => +charge.money)
                    .reduce(reducer);
    groupedCharges.push(elementCharges);
  }
      
  return (
      <div>
        <ColumnFlex>
          <MainChart 
            chargesData = {chargesByDate.flat()} 
            incomeData = {incomesByDate.flat()} 
            dates = {sortedDates}/>

          <Flex>
            <IncomeChart incomeLabels = {uniqueIncomeCategories} incomeData = {groupedIncomes.flat()}/>
            <ChargesChart chargesLabels = {uniqueChargesCategories} chargesData = {groupedCharges.flat()}/>
          </Flex>
        </ColumnFlex>
      </div>
    );
}

export default Chart;

