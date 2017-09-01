console.log('loaded...')

var $box0 = $('#box0')
var $box1 = $('#box1')
var $box2 = $('#box2')
var $box3 = $('#box3')
var $box4 = $('#box4')
var $box5 = $('#box5')
var $box6 = $('#box6')
var $box7 = $('#box7')
var $box8 = $('#box8')

var game = {
    player: [{symbol: "X", color: "tomato"}, {symbol: "O", color: "dodgerblue"}]
}

var turns = 0;
var xWins = 0;
var oWins = 0;
// reset function

function resetGame() {
    $theBoxes.text('')
    contentArray = []
    turns = -1
}

// no winner

function turnCheck() {
    if(turns === 8){
        alert("No Winner")
        resetGame()
    }
}

// score keeper

function updateScore() {
    if (currentPlayer.symbol === "X") {
        xWins += 1
        $('#x').text('X: ' + xWins + 'wins')
    } else {
        oWins += 1
        $('#o').text('O: ' + oWins + ' wins')
    }
}

// check winner function
var $theBoxes = $('.box')
function checkWinner() { 
    
    var contentArray = []

    $theBoxes.each(function(){
        contentArray.push($(this).text())
    })
    for (var i =0; i< 9; i+=3) {
        if(contentArray[i] === contentArray[i+1] && contentArray[i]===contentArray[i+2]){
            if(contentArray[i] !== ""){
                alert(currentPlayer.symbol + ' is the Winner')
                updateScore()
                resetGame()
            }
        }    
    }
    for (var i =0; i< 3; i++){
        if(contentArray[i] === contentArray[i+3] && contentArray[i]===contentArray[i+6]){
            if(contentArray[i] !== ""){
                alert(currentPlayer.symbol + ' is the Winner')
                updateScore()
                resetGame()
            }
        }            
    }
    if(contentArray[0] === contentArray[4] && contentArray[0]===contentArray[8]){
        if(contentArray[0] !== ""){
            alert(currentPlayer.symbol + ' is the Winner')
            updateScore()
            resetGame()
        }
    }
    if(contentArray[2] === contentArray[4] && contentArray[2]===contentArray[6]){
        if(contentArray[2] !== ""){
            alert(currentPlayer.symbol + ' is the Winner')
            updateScore()
            resetGame()
        }
    }
    turnCheck()       
}

// switch player function

function switchPlayer() {
    turns += 1
    if (currentPlayer === game.player[0]) {
        currentPlayer = game.player[1];
    } else {
        currentPlayer = game.player[0];
    }

}

var currentPlayer = game.player[0]

$('.box').on('click', function () {
    if ($(this).text() === '') {
    $(this).text(currentPlayer.symbol)
    $(this).css('color', currentPlayer.color)
    checkWinner()
    switchPlayer()
    $('#turnIndicator').text("It's " + currentPlayer.symbol + "'s turn!") 
    } else {
        alert('spot taken')
    }
})
