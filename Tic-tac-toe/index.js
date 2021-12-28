class ticTacToe {
  appendSelect(id)
  updateView(id){}
}


const buttonelement = document.querySelectorAll('.buttonplay');

const tictactoevariable = new ticTacToe;

buttonelement.forEach(button => {
  button.onclick = function () {
    console.log(this.id);
  }
})