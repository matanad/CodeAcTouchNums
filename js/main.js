'use strict'

var gBoardSzie = 4
var gNumsLenght = 16
var gNums
var gCurrNum
var gIsGameOn = false
var gDefaultLi = document.querySelector('.easy')

//The model
var gBoard

onInit()

function onInit() {
    gCurrNum = 0
    gBoard = createNumsdBoard()
    renderBoard()
    gIsGameOn = true
}

function cellClicked(elCell, i, j) {
    if (!gIsGameOn) return
    if (gBoard[i][j].isClicked) return
    var num = +elCell.innerText
    if (gCurrNum === num) victory()
    if (num === gCurrNum + 1) {
        gBoard[i][j].isClicked = true
        elCell.classList.add('clicked')
        gCurrNum++
    } else {
        elCell.classList += ('wrong')
        setTimeout(() => {
            elCell.classList.remove('wrong')
        }, 500);
    }

}

function victory() {
    gIsGameOn = false
    
}

function onDiffClicked(elLi, diff) {
    gNumsLenght = diff
    if (diff === 16) {
        gBoardSzie = 4
    } else if (diff === 25) {
        gBoardSzie = 5
    } else {
        gBoardSzie = 6
    }
    gDefaultLi.classList.remove('active')
    gDefaultLi = elLi
    elLi.classList.add('active')
    onInit()
}

function renderBoard() {
    var elTBody = document.querySelector('tbody')
    var body = ''
    for (var i = 0; i < gBoard.length; i++) {
        body += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {
            var currNum = gBoard[i][j].value
            body += `<td onclick="cellClicked(this, ${i}, ${j})">${currNum}</td>`
        }
        body += '</tr>'
    }
    elTBody.innerHTML = body
}

function createNumsdBoard() {
    gNums = resetNums()
    var board = []
    for (var i = 0; i < gBoardSzie; i++) {
        board[i] = []
        for (var j = 0; j < gBoardSzie; j++) {
            var val = drawNum(gNums)
            const cell = createCell(val)
            board[i][j] = cell
        }
    }
    return board
}

function createCell(value, isClicked = false) {
    return {
        value,
        isClicked
    }
}

function resetNums() {
    var nums = []
    for (var i = 0; i < gNumsLenght; i++) {
        nums[i] = (i + 1)
    }
    return nums
}