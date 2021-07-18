
//construtor recebe os dados e passa para a var 
class Calculator {
    constructor(previousOpreandTextElement,currentOperandTextElement) {
        this.previousOpreandTextElement = previousOpreandTextElement
        this.currentOperandTextElement - currentOperandTextElement
    }

    clear() {
        this.currentOperand = ''
        this.previousOpreand = ''
        this.operation = undefined

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if (this.previousOpreand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOpreand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = paeseFloat(this.previousOpreand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return

        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOpreand = ''
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const inttegerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(inttegerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = inttegerDigits.toLocaleString('en',{
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
           this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOpreandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOpreand)} ${this.operation}`
        } else {
            this.previousOpreandTextElement.innerText = ''
        }
    }
}









//selecionando os dados para as var
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-dalete]')
const allClearButton = document.querySelector('[data-allClear]')
const previousOpreandTextElement = document.querySelector('[data-previousOperand]')
const currentOperandTextElement = document.querySelector('[data-currentOperand]')

const calculator = new Calculator(previousOpreandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button => {
    calculator.cdelete()
    calculator.updateDisplay()
})