import React from 'react';
import MainChart from './main-chart';
import IncomeChart from './income-chart';
import ChargesChart from './charges-chart';
import Flex from '../StyledComponents/Flex'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TableItems from '../dataBase';
import TableItemsIncomes from '../dataBaseIncomes'
import moment from 'moment';

const ColumnFlex = styled(Flex)`
  flex-direction:column;
  background-color: rgba(41,126,166, 0.3)
`;

const Chart = () => {
  const rawChargesData = useSelector(state => state.homeReducer.chargesDB);
  const rawIncomeData = useSelector(state => state.homeReducer.incomesDB);
  
  const chargesDB = rawChargesData ? rawChargesData : TableItems;
  const incomesDB = rawIncomeData ? rawIncomeData : TableItemsIncomes;

  let chargesSum = [];
  let chargesCategories = [];
  let chargesDates = [];
  let chargesDateNum = [];

  for (let i = 0; i < chargesDB.length; i++) {

      chargesSum = [...chargesSum, +chargesDB[i].money];
      chargesCategories = [...chargesCategories, chargesDB[i].category];
      chargesDates = [...chargesDates, chargesDB[i].date];
      chargesDateNum = [...chargesDateNum, chargesDB[i].milliseconds]
    
  }

  let incomeSum = [];
  let incomeCategories = [];
  let incomeDates = [];
  let incomeDateNum = [];

  for (let i = 0; i < incomesDB.length; i++) {

      incomeSum = [...incomeSum, +incomesDB[i].money];
      incomeCategories = [...incomeCategories, incomesDB[i].category];
      incomeDates = [...incomeDates, incomesDB[i].date];
      incomeDateNum = [...incomeDateNum, incomesDB[i].milliseconds];
      
  }

  //dates in order  
  let dates = [];
  let datesNum = [];
  datesNum = chargesDateNum.concat(incomeDateNum);
  datesNum = datesNum.sort((a,b) => a-b);
  datesNum = [...new Set(datesNum)];
  console.log(datesNum);
  
  dates = [...new Set(datesNum.map(x => moment(x).format('l')))]
  
  console.log(dates)
  //income and charges in chronological order
  let incomesByDate = [];
  let chargesByDate = [];

  const reducer = (a, b) => a + b;

 for (let i = 0; i < dates.length; i++) {
    const incomeData = [...incomesDB];
    
    const elementIncome = incomeData.filter(income => moment(income.milliseconds).format('l') === dates[i])
                    .map(income => +income.money);
    
    incomesByDate.push(elementIncome);
    
    incomesByDate[i] = incomesByDate[i]  &&  incomesByDate[i].length > 1 ? 
                        incomesByDate[i].reduce(reducer): incomesByDate[i]      
  }

  for (let i = 0; i < dates.length; i++) {
    const chargesData = [...chargesDB];
    
    const elementCharges = chargesData.filter(charge => moment(charge.milliseconds).format('l') === dates[i])
                          .map(charge => +charge.money);
                          
    chargesByDate.push(elementCharges);
    
    chargesByDate[i] = chargesByDate[i] && chargesByDate[i].length > 1 ? 
                        chargesByDate[i].reduce(reducer): chargesByDate[i]
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
            dates = {dates}/>

          <Flex>
            <IncomeChart incomeLabels = {uniqueIncomeCategories} incomeData = {groupedIncomes.flat()}/>
            <ChargesChart chargesLabels = {uniqueChargesCategories} chargesData = {groupedCharges.flat()}/>
          </Flex>
        </ColumnFlex>
      </div>
    );
}

export default Chart;

