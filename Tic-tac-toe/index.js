class ticTacToe {
  constructor (playerSteps, enemySteps, winning, level){
    this.remainingOption = [1,2,3,4,5,6,7,8,9]
    this.playerSteps = playerSteps
    this.enemySteps = enemySteps
    this.winning = winning
    this.level = level
    this.stepCount = 0
    this.key 
  }
  clear(){ //When Game is Done or User Log-Out
    this.playerSteps = []
    this.enemySteps = []
  }

  availableChecker(id){
    // console.log(this.remainingOption, id)
    if(this.remainingOption.includes(id) &&  this.key == undefined){
      this.appendSelect(id)
      
    } else {
      return
    }
  }


  //START SECTION OF ENEMY MOVEMENT FUNTION, CREATED MANUALLY
  enemymovement() {
    if(this.level == 'random' && this.remainingOption.length > 0 && this.key == undefined){
      const randomid = this.remainingOption[Math.floor(Math.random()*this.remainingOption.length)]
      console.log(randomid)
      this.enemySteps.push(randomid)
      this.stepCount +=1
      let index = this.remainingOption.indexOf(randomid)
      this.remainingOption.splice(index, 1)
      this.updateView(randomid, 'enemy')
      if(this.enemySteps.length >= 3 && this.stepCount%2 == 0){
        this.winningChecker(this.enemySteps, 'enemy')
      }
    }
  }
  //END SECTION OF ENEMY MOVEMENT FUNCTION, THAT CREATED MANUALLY

  appendSelect(id){
    this.playerSteps.push(id)
    this.stepCount += 1
    var index = this.remainingOption.indexOf(id);
    this.remainingOption.splice(index, 1)
    this.id = undefined
    this.updateView(id, 'player')
    if( this.playerSteps.length >= 3 && this.stepCount%2 == 1){
      this.winningChecker(this.playerSteps, 'player')
    } 
    this.enemymovement()
    
  }

  combinations(array) {
    return new Array(1 << array.length).fill().map(
      (e1, i) => array.filter((e2, j) => i & 1 << j));
  }

  playAgain() {
    this.key = undefined
    this.playerSteps = []
    this.enemySteps = []
    this.remainingOption = [1,2,3,4,5,6,7,8,9]
    this.stepCount = 0
    this.updateView()
    document.querySelectorAll('.winningPattern').forEach(tag => {
      tag.classList.remove('winningPattern')
      console.log('classremoved')
    })
    document.getElementById('winnerinfo').innerHTML = ' '
    document.getElementById('winnerinfo').classList.remove('winnerPlayer')
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
  
  winningChecker(arr, side) {
    let posibility = [...new Set(this.combinations(arr).filter(a => a.length == 3))];
    posibility.forEach(e => {
      if(this.arrayAlreadyHasArray(this.winning, e.sort())){
        console.log("Already Winning!");
        e.forEach(id => {
          document.getElementById(id).classList.add("winningPattern");
        })
        const info = document.getElementById('winnerinfo');
        info.classList.add('winnerPlayer')
        if(side == 'player'){    
          info.innerHTML = 'Player Win!'
          this.key = 'player'
          this.updateScore(this.key)
        } else if (side == 'enemy'){
          this.key = 'enemy'
          info.innerHTML = 'Enemy Win!'
          this.updateScore(this.key)
        } 
      } 
    })
    console.log(this.key)
    if(this.remainingOption.length == 0 && this.key == undefined){
      const info = document.getElementById('winnerinfo');
      info.classList.add('winnerPlayer')
      info.innerHTML = "Tie Game!"
      }
  }

  updateView(id = 0, key = 'none'){
    if(id == 0 && key == 'none'){
      document.querySelectorAll('.buttonplay').forEach(e => {
        e.innerHTML = ' '
      })
    } else if (key == 'player'){
      document.getElementById(id).innerHTML = "<ion-icon style=\"color: white;\" name=\"close-sharp\"></ion-icon>"
    } else if (key == 'enemy'){
      document.getElementById(id).innerHTML = "<ion-icon name=\"ellipse-outline\"></ion-icon>"
    }
  }

  updateScore(key){
    if(key == 'player'){
      console.log('scoreupdated!', key)
      document.getElementById("playerscore").innerHTML = parseInt(document.getElementById("playerscore").innerHTML) + 1
    } else if(key == 'enemy'){
      console.log('scoreupdated!', key)
      document.getElementById("enemyscore").innerHTML = parseInt(document.getElementById("enemyscore").innerHTML) + 1
    }
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
const resetgame = document.getElementById('reset');


const tictactoevariable = new ticTacToe([],[], winningcomb, 'random');


buttonelement.forEach(button => {
  button.onclick = function () {
    // console.log('button', this.id)
    tictactoevariable.availableChecker(parseInt(this.id))
  }
})

resetgame.onclick = function(){
  tictactoevariable.playAgain()
}