class Calculator {
  constructor(previousOpperand, currentOpperand){
  this.previousOpperand = previousOpperand;
  this.currentOpperand = currentOpperand;
  this.clear()
  }

  clear(){
    this.prevopperand = ''
    this.curropperand = ''
    this.operation = undefined
  }

  delete(){
    this.curropperand = this.curropperand.toString().slice(0, -1)
  }

  appendNumber(number){
    if (number === '.' && this.curropperand.includes('.')) return
    this.curropperand = this.curropperand.toString() + number.toString()
  }
  chooseOperation(operation){
    if(this.curropperand === '' ) return
    if(this.prevopperand !== ''){
      this.calucalate()
    }
    this.operation = operation
    this.prevopperand = this.curropperand.toString()
    this.curropperand = ''
  }

  calucalate(){ 
    let temp 
    const p = parseFloat(this.prevopperand)
    const c = parseFloat(this.curropperand)
    if(isNaN(p) || isNaN(c)) return
    switch (this.operation){
      case '+' :
        temp = p + c
        break
      case '*' :
        temp = p * c
        break
      case '-' :
        temp = p - c
        break
      case '÷' :
        temp = p / c
        break
      default:
        return
    }
    this.curropperand = temp
    this.operation = undefined
    this.prevopperand = ''
  }

  updateDisplay(){
    // this.previousOpperand.innerText = this.prevopperand
    this.currentOpperand.innerText = this.curropperand
    if (this.operation != null){
      this.previousOpperand.innerText = `${this.prevopperand} ${this.operation}`
    } else {
      this.previousOpperand.innerText = ''
    }
  }
}

const numberButton = document.querySelectorAll('.number-button');
const opperandButton = document.querySelectorAll(".op-button");
const deleteButton = document.querySelector(".delete-button");
const clearButton = document.querySelector(".all-clear");
const equalButton = document.querySelector(".equal-button");
const previousOpperand = document.querySelector(".previous-opperand");
const currentOpperand = document.querySelector(".current-opperand");


const cal = new Calculator(previousOpperand, currentOpperand);


numberButton.forEach(button => {
  button.onclick = function(){
    cal.appendNumber(button.innerText)
    cal.updateDisplay()
  }
})

opperandButton.forEach(button => {
  button.onclick = function(){
    cal.chooseOperation(button.innerText)
    cal.updateDisplay()
  }
})

clearButton.onclick = function(){
  cal.clear()
  cal.updateDisplay()
}

equalButton.onclick = function(){
  cal.calucalate()
  cal.updateDisplay()
}

deleteButton.onclick = function(){
  cal.delete()
  cal.updateDisplay()
}

console.log('hello')

