import React from 'react'

import CanvasJSReact from '../../assets/canvasjs.react';

import './visualize.styles.scss';


var CanvasJSChart = CanvasJSReact.CanvasJSChart


const Visualize = () => {
    let income = 222222;

    const options1 = {
        theme: "bright",
        animationEnabled: true,
        exportFileName: "Budget Overview",
        exportEnabled: true,
        title: {
            text: "Budget Overview"
        },
        subtitles: [{
            text: `Total Income: ${income}`,
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
                { name: "Expenses", y: 40 },
                { name: "Savings", y: 60 },
            ]
        }]
    }

    const options2 = {
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
            dataPoints: [
                { y: 32, label: "Medical" },
                { y: 22, label: "Clothing" },
                { y: 15, label: "Education" },
                { y: 19, label: "Rent" },
                { y: 5, label: "Groceries" },
                { y: 7, label: "Entertainment" }
            ]
        }]
    }

    return(
        <div className="visualize">
            <div className="chart-styles">
                <CanvasJSChart options = {options1} />
            </div>
            <div className="chart-styles">
                <CanvasJSChart options = {options2} />
            </div>
        </div>
    )
}

export default Visualize
