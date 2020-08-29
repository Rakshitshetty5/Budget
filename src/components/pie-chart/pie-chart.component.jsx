import React from 'react'

import CanvasJSReact from '../../assets/canvasjs.react';



var CanvasJSChart = CanvasJSReact.CanvasJSChart


const PieChart = () => {
    let income = 222222;

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
        <CanvasJSChart options = {options} />
    )
}

export default PieChart
