class ticTacToe {
  constructor (playerSteps, enemySteps, winning){
    this.remainingOption = [1,2,3,4,5,6,7,8,9]
    this.playerSteps = playerSteps
    this.enemySteps = enemySteps
    this.winning = winning
  }
  clear(){ //When Game is Done or User Log-Out
    this.playerSteps = []
    this.enemySteps = []
  }

  availableChecker(id){
    // console.log(this.remainingOption, id)
    if(this.remainingOption.includes(id)){
      this.appendSelect(id)
      this.updateView(id)
      
    } else {
      return
    }
  }

  enemymovement() {

  }

  appendSelect(id){
    this.playerSteps.push(id)
    var index = this.remainingOption.indexOf(id);
    this.remainingOption.splice(index, 1)
    this.id = undefined
    if( this.playerSteps.length >= 3){
      this.winningChecker(this.playerSteps)
    }
  }

  combinations(array) {
    return new Array(1 << array.length).fill().map(
      (e1, i) => array.filter((e2, j) => i & 1 << j));
  }

  arrayAlreadyHasArray(arr, subarr){
    for(var i = 0; i<arr.length; i++){
        let checker = false
        for(var j = 0; j<arr[i].length; j++){
            if(arr[i][j] === subarr[j]){
                checker = true
            } else {
                checker = false
                break;
            }
        }
        if (checker){
            return true
        }
    }
    return false
  }
  
  winningChecker(arr) {
    let posibility = [...new Set(this.combinations(arr).filter(a => a.length == 3))];
    posibility.forEach(e => {
      if(this.arrayAlreadyHasArray(this.winning, e.sort())){
        console.log("Already Winning!");
      } else {
        return
      }
    })
  }

  updateView(id){

   document.getElementById(id).innerHTML = "<ion-icon name=\"close-sharp\"></ion-icon>"
  }
}


const buttonelement = document.querySelectorAll('.buttonplay');
const winningcomb = [
  [1,2,3],
  [1,4,7],
  [1,5,9],
  [2,5,8],
  [3,5,7],
  [3,6,9],
  [4,5,6],
  [7,8,9]
]

const tictactoevariable = new ticTacToe([],[], winningcomb);

buttonelement.forEach(button => {
  button.onclick = function () {
    // console.log('button', this.id)
    tictactoevariable.availableChecker(parseInt(this.id))
  }
})