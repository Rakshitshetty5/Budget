import React from 'react'

import CanvasJSReact from '../../assets/canvasjs.react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {  selectTotalExpense , selectMonthlyBudgetExpense } from '../../redux/budget/budget.selectors'


var CanvasJSChart = CanvasJSReact.CanvasJSChart


const PieChart = ({ totalExpense, expenseList }) => {
    
    let expenseListArray;

    if(expenseList){
        expenseListArray = Object.entries(expenseList)
    }else{
        expenseListArray = []
    }

    const options = {
        theme: "bright",
        animationEnabled: true,
        exportFileName: "Expenses Overview",
        exportEnabled: true,
        title:{
            text: "Expenses Overview"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: expenseListArray.map(transaction => ({ y : ((transaction[1]/totalExpense)*100).toFixed(2), label : transaction[0]  }))
        }]
    }

    return(
        <CanvasJSChart options = {options} />
    )
}

const mapStateToProps = createStructuredSelector(
    {
        totalExpense : selectTotalExpense,
        expenseList : selectMonthlyBudgetExpense
    }
)

export default connect(mapStateToProps)(PieChart);
