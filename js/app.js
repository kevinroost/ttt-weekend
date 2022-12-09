/*-------------------------------- Constants --------------------------------*/
  // 5a) In a constant called `winningCombos` define the eight possible winning 
  //     combinations as an array of arrays.

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
// 1a) Use a variable named `board` to represent the state of the squares on
//     the board.

// 1b) Use a variable named `turn` to track whose turn it is.

// 1c) Use a variable named `winner` to represent if anyone has won yet.

// 1d) Use a variable named `tie` to represent if the game has ended in a tie.

let board
let turn
let winner //boolean
let tie //boolean
let player




/*------------------------ Cached Element References ------------------------*/
// 2a) In a constant called `squareEls`, store the nine elements 
//    representing the squares on the page.

// 2b) In a constant called `messageEl`, store the element that displays the 
//    game's status on the page.
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const boardEl = document.querySelector('.board')
console.log(squareEls);
console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)// 6b) Attach an event listener to the game board

/*-------------------------------- Functions --------------------------------*/
// 3c) Set the `board` variable to an array containing nine `null`s to represent empty squares.
function init() {  // 3a) Create a function called `init`.
  board = [null, null, null, null, null, null, null, null, null, ]
  turn = -1  // 3d) Set the `turn` to `1` - which will represent player X.
  winner = false // 3e) Set the `winner` to false.
  tie = false  // 3f) Set `tie` to false.
  render()  // 3g) Call a function called `render` at the end of the `init` function.
}
function render() {  // 4a) Create a function called `render`, then set it aside for now.
  player = turn === -1 ? 'X' : 'O'
  updateBoard()
  updateMessage()
}
  // 4e) In the `updateMessage` function, render a message based on the 
  //     current game state:
  //     - If both `winner` and `tie` have a value of false (meaning the game 
  //       is still in progress), render whose turn it is.
  //     - If `winner` is false, but `tie` is true, render a tie message.
  //     - Otherwise, render a congratulatory message to the player that has 
  //       won.
function updateMessage () {  // 4d) Create a function called `updateMessage`
  messageEl.textContent = winner === false && tie === false ? `${player}, it's your turn!` 
  : winner === false && tie === true ? `It's a tie!`
  : `Congratulations! ${player} wins!`
}

function updateBoard() {  // 4b) Create a function called `updateBoard`.
  for (let i = 0; i <= 8; i++) { //update squares on the board based on the status of each item in the array 'board'
    if (board[i] === -1) {
      squareEls[i].textContent = 'X'
    } else if (board[i] === 1) {
      squareEls[i].textContent = 'O'
    }
  }
}

function handleClick(evt) {  // 6a) Create a function called `handleClick`. It will have an `evt`parameter.
  if (evt.target.className != 'sqr') return
  const sqIdx = evt.target.id.slice(-1)// 6c) Obtain the index of the square that was clicked
  if (board[sqIdx] || winner === true) return// 6d) If the `board` has a value at the `sqIdx` or if `winner` is not `null`, immediately `return` 

  console.log(evt.target.className);
}

init()


// Step 6.1 - `placePiece`

  // 6.1a) Create a function named placePiece that accepts an `idx` parameter.

  // 6.1b) Update the `board` array at the `idx` so that it is equal to the 
  //       current value of `turn`.


// 6.2 - `checkForTie`

  // 6.2a) Create a function named `checkForTie`.

  // 6.2b) Check if the `board` array still contains any `null` elements. If
  //       it does, we can leave `tie` as false. Otherwise, set `tie` to true.


// 6.3 - `checkForWinner`

  // 6.3a) Create a function called `checkForWinner`

  // 6.3b) Determine if a player has won using one of the two options below.
  //       Option 1 is a more elegant method that takes advantage of the 
  //       `winningCombos` array you wrote above in step 5. Option 2 might 
  //       be a little simpler to comprehend, but you'll need to write more 
  //       code. This option won't take advantage of the winningCombos array, 
  //       but using it as a reference will help you build a solution.
  //       Ensure you choose only one path.

  //       Option 1) Loop through each of the winning combination arrays 
  //       defined in the `winningCombos` array. Total up the three board 
  //       positions using the three indexes in the current combo. Convert 
  //       the total to an absolute value (convert any negative total to 
  //       positive). If the total equals 3, we have a winner, and can set 
  //       `winner` to true.

  //       Option 2) For each one of the winning combinations you wrote in 
  //       step 5, find the total of each winning combination. Convert the 
  //       total to an absolute value (convert any negative total to 
  //       positive). If the total equals 3, we have a winner, and can set 
  //       `winner` to true.


// 6.4 - `switchPlayerTurn`

  // 6.4a) Create a function called `switchPlayerTurn`.

  // 6.4b) If `winner` is true, return out of the function - we don’t need 
  //       to switch the turn anymore!

  // 6.4c) If `winner` is false, change the turn by multiplying `turn` by 
  //       `-1` (this flips a `1` to `-1`, and vice-versa).


// 6.5 - Tying it all together

  // 6.5a) In our `handleClick` function, call `placePiece`, `checkForTie`, 
  //       `checkForWinner`, and `switchPlayerTurn`. Don’t forget that 
  //       `placePiece` needs `sqIdx` as an argument! 

  // 6.5b) Finally, now that all the state has been updated we need to 
  //       render that updated state to the user by calling the `render` 
  //       function that we wrote earlier.

// Step 7 - Create Reset functionality

  // 7a) Add a reset button to the HTML document.

  // 7b) Store the new reset button element as a cached element reference in
  //     a constant named `resetBtnEl`.

  // 7c) Attach an event listener to the `resetBtnEl`. On the `'click'` event 
  //     it should call the `init` function you created in step 3.
