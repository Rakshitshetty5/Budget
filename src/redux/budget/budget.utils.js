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
                    exp : {},
                    TotalIncome : transaction.value,
                    TotalExpense : 0
                    
                }
            }
         }else{
            epicBudget = { ...budget,
                [month] : {
                    [transaction.operator] : {
                        [transaction.description] : transaction.value,
                    },
                    inc : {},
                    TotalIncome : 0,
                    TotalExpense : transaction.value
                }
            }
         }
        return epicBudget
    }


    if(transaction.operator === "inc"){
        if(!budget[month].inc[transaction.description]){
            budget[month].TotalIncome = parseInt(budget[month].TotalIncome) + parseInt(transaction.value)
        }else{
            budget[month].TotalIncome = parseInt(budget[month].TotalIncome) - parseInt(budget[month].inc[transaction.description]) + parseInt(transaction.value)

        }
    }else{
        if(!budget[month].exp[transaction.description]){
            budget[month].TotalExpense = parseInt(budget[month].TotalExpense) + parseInt(transaction.value)
        }else{
            budget[month].TotalExpense = parseInt(budget[month].TotalExpense) - parseInt(budget[month].exp[transaction.description]) + parseInt(transaction.value)

        }  
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


export const deleteTransaction = (budget, month, transactionObj) => {
    console.log(budget, month, transactionObj)

    const operator = transactionObj.inc ? "inc" : "exp"


    // delete budget[month][operator][transactionObj.transaction[0]]
    
    // never modify the same object component will not render new changes.
    //use following

    const modifiedBudget = JSON.parse(JSON.stringify(budget))
    delete modifiedBudget[month][operator][transactionObj.transaction[0]]
    
    if(operator === "inc"){
        modifiedBudget[month].TotalIncome = modifiedBudget[month].TotalIncome - transactionObj.transaction[1];
    }else{
        modifiedBudget[month].TotalExpense = modifiedBudget[month].TotalExpense - transactionObj.transaction[1];

    }

    return modifiedBudget;
}