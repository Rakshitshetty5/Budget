import React from 'react'

import BudgetOverview from '../budget-overview/budget-overview.component'
import Form from '../form/form.component'
import ListOverview from '../list-overview/list-overview.component'
import CustomButton from '../custom-button/custom-button.component'

import './spendings.styles.scss'

const Spendings = () => (
    <div className="spendings">
        <BudgetOverview />
        <Form />
        <ListOverview />
        <CustomButton spendings = {'spendings'}>Save</CustomButton>
    </div>

)


export default Spendings