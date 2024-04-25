const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
let errorEl = document.getElementById("error");
let errorTime;

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
if(billValue < 0 || tipValue < 0){
    error.innerText = `Please enter valid values!!!`;
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
        errorEl.innerText = "";
        billInput.value = "";
        tipInput.value = "";
    }, 2000);
}else{
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}
}

btnEl.addEventListener("click", calculateTotal);