let totalExpense = 0;
let expenseByItem = [];

function preExistingItemCheck(ob){
    const inputItemElement = document.querySelector("#inputItem");
    const itemName = inputItemElement.value;
    console.log(ob);
    console.log(itemName + "\n");
    return ob.item.toUpperCase() === itemName.toUpperCase();
}
    function addExpenseToTotal(){
        const inputCostElement = document.querySelector("#inputAmount");
        const inputItemElement = document.querySelector("#inputItem");
        const resultElement = document.querySelector("#result");
        console.log({resultElement});
        const itemName = inputItemElement.value;
        const inputCostElementText = inputCostElement.value;
        console.log({itemName});
        console.log({inputCostElementText});
        let cost = parseInt(inputCostElementText);
        totalExpense += cost;
        reqdPos = expenseByItem.findIndex(preExistingItemCheck);
        if (reqdPos === -1){
            expenseByItem.push({item: itemName, cost: cost});
        }
        else{
            expenseByItem[reqdPos].cost += cost;
        }
        console.log(expenseByItem);
        console.log("Cost = "+ totalExpense );
        resultElement.innerText = "Total Cost: Rs." + totalExpense;
        inputCostElement.value = "";
        inputItemElement.value = "";
    }
    const addExpenseBtn = document.querySelector("#addExpenseBtn");
    addExpenseBtn.addEventListener("click", addExpenseToTotal, false);