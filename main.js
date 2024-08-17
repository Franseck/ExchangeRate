//Elementleri Seçelim.

const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result"); 
const reset = document.getElementById("reset")

const currency = new Currency();

amountInput.addEventListener("keyup", function(event){ 
    if(event.key==="Enter"){exchange()}           
}) 


function exchange(){
  const amount = Number(amountInput.value.trim());
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;

  const secondOptionValue = secOption.options[secOption.selectedIndex].textContent;


  currency.exchange2(amount,firstOptionValue,secondOptionValue)
  .then((result) => {
    resultInput.value = result.toFixed(2)
  })
}


reset.addEventListener("click", () => {
    window.location.reload();
  });