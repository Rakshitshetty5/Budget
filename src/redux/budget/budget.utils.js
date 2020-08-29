export const getMonth = ( date ) => {
    const month = `${date}`.split(" ")[1]
    return month;
}

//budget is monthly Transactions

export const addTransactionToBudget = (budget, month, transaction) => {
    if(budget.length === 0 || !budget[month]){
        let epicBudget;
        if(transaction.operator === "inc"){
            epicBudget = { ...budget,
                [month] : {
                    [transaction.operator] : {
                        [transaction.description] : transaction.value,
                    },
                    exp : {}
                    
                }
            }
         }else{
            epicBudget = { ...budget,
                [month] : {
                    [transaction.operator] : {
                        [transaction.description] : transaction.value,
                    },
                    inc : {}
                }
            }
         }
        return epicBudget
    }

    const epicBudget = { ...budget,
            [month] : {
                ...budget[month],
                [transaction.operator] : {
                    ...budget[month][transaction.operator],
                    [transaction.description] : transaction.value,
                }
            }
    }
    return epicBudget;
    


}