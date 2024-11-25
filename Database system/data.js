
function calculateAll() {
    const rows = document.querySelectorAll("#pricing-table tbody tr");
    let grandTotal = 0;
  
    rows.forEach(row => {
      const quantityInput = row.querySelector(".quantity");
      const unitPrice = parseFloat(row.querySelector("td[data-unit-price]").dataset.unitPrice);
      const quantity = parseInt(quantityInput.value) || 0;
  
      const rowTotal = unitPrice * quantity;
      row.querySelector(".row-total").textContent = rowTotal.toFixed(2);
  
     
      grandTotal += rowTotal;
    });
  
   
    document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
  }
  