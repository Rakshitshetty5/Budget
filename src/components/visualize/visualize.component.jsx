import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import DoughnutChart from '../doughnut-chart/doughnut-chart.component';
import PieChart from '../pie-chart/pie-chart.component'

import {  selectTotalIncome, selectTotalExpense } from '../../redux/budget/budget.selectors'

import './visualize.styles.scss';

const Visualize = () => {
    return(
        <div className="visualize">
            <div className="chart-styles">
                <DoughnutChart />
            </div>
            <div className="chart-styles">
                <PieChart />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        totalIncome : selectTotalIncome,
        totalExpense : selectTotalExpense
    }
)

export default connect(mapStateToProps)(Visualize)
