import React from 'react'

import BudgetOverview from '../budget-overview/budget-overview.component'
import Form from '../form/form.component'
import List from '../list/list.component'
import CustomButton from '../custom-button/custom-button.component'

import './spendings.styles.scss'

const Spendings = () => (
    <div className="spendings">
        <BudgetOverview />
        <Form />
        <List />
        <CustomButton />
    </div>

)


export default Spendings