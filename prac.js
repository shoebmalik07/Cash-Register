var billAmount = document.querySelector('#text-input')
var cashGiven = document.querySelector('#cash-given')
var btnCheck = document.querySelector('#btn-check')
var notes = document.querySelectorAll('.new')
var output = document.querySelector('.output')
let output2 = document.querySelector('.output2')

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]

btnCheck.addEventListener('click', function validateBillAndCashAmount() {
if(cashGiven.value=== ''){
    output.innerText  = 'please fill both the fields'
}
    else if (billAmount.value > 0) {

        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = cashGiven.value - billAmount.value
            output2.innerText = `Returned amount: ${amountToBeReturned}`
            calculateChange(amountToBeReturned)

            function calculateChange(amountToBeReturned) {
                for (let i = 0; i < availableNotes.length; i++) {
                    const noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i])
                    amountToBeReturned = amountToBeReturned % availableNotes[i]
                    notes[i].innerText = noOfNotes
                    
                }
            }
        } 
        else {
            output.innerText = 'do u wanna wash plates?'
        }

    }
    else if (billAmount.value && cashGiven.value<0){
        output.innerText = 'invalid input'
    } 
     else {
        output.innerText = 'please fill both the fields'
    }
})