
export const FormatMoney = (value) => {
    let valueWithDecimal = parseInt(value).toFixed(2);

    let valueSplit = `${valueWithDecimal}`.split('.');

    let left = valueSplit[0];


    if(left.length > 3)
    {
        left = left.substr(0, left.length - 3) + ',' + left.substr(left.length-3,3)
    }

    let right = valueSplit[1];
    
    return left + "." + right;
}