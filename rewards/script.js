// This script is to calculate and display the total value based on the number of error coins
document.addEventListener("DOMContentLoaded", function () {
    const errorCoinsCount = document.getElementById('errorCoinsCount').textContent;
    const errorCoinValue = 0.001;
    const totalValue = (errorCoinsCount * errorCoinValue).toFixed(3);
    document.getElementById('totalValue').textContent = totalValue;
});
