import React from 'react'

import CanvasJSReact from '../../assets/canvasjs.react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {  selectTotalIncome, selectTotalExpense } from '../../redux/budget/budget.selectors'

import { FormatMoney } from '../money-format.utils'

var CanvasJSChart = CanvasJSReact.CanvasJSChart


const DoughnutChart = ( { totalIncome, totalExpense}) => {
    const savings_percentage = ((totalIncome - totalExpense)/totalIncome) * 100;
    const expense_percentage = (totalExpense/totalIncome)*100;



    const options = {
        theme: "dark1",
        animationEnabled: true,
        exportFileName: "Budget Overview",
        exportEnabled: true,
        title: {
            text: "Budget Overview"
        },
        subtitles: [{
            text: `Total Income: ${totalIncome ? FormatMoney(totalIncome) : 0}`,
            verticalAlign: "center",
            fontSize: 15,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Expenses", y: expense_percentage ? expense_percentage : 0 },
                { name: "Savings", y: savings_percentage ? savings_percentage : 0},
            ]
        }]
    }

    return(
        <CanvasJSChart options = {options} />
    )
}

const mapStateToProps = createStructuredSelector(
    {
        totalIncome : selectTotalIncome,
        totalExpense : selectTotalExpense
    }
)

export default connect(mapStateToProps)(DoughnutChart);
