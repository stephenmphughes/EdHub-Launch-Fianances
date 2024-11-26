function calculateTotal() {
    let totalCost = 0;
    // Get all input elements for cost
    let costInputs = document.querySelectorAll('.costInput');
    
    costInputs.forEach(function(input) {
        // Add the value of each cost input to the total, ensure it's a number
        let cost = parseFloat(input.value);
        if (!isNaN(cost)) {
            totalCost += cost;
        }
    });

    // Display the total cost
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
}
