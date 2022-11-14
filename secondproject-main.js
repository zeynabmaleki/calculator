var RESULT = document.getElementById('result')

var isfirst = true
var firstnum, secondnum
var operator

var numbers = document.getElementsByClassName("num")


for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', inputhandler)
}


function inputhandler(event) {
    var num = event.target.value
    RESULT.value += num
    if (isfirst) {
        firstnum = parseFloat(RESULT.value)
    } else {
        secondnum = parseFloat(RESULT.value)
    }
}

function dothandler() {
    var result = RESULT
    if (result.value.length === 0) {
        result.value = '0'
    } else if (result.value.indexof('.') == -1) {
        result.value += '.'
    }
}

function delethandler() {
    RESULT.value = ''
    isfirst = true
}

function operation(input) {
    operator = input
    isfirst = false
    RESULT.value = ''
}

function finalresult() {
    var result
    switch (operator) {
        case ("+"):
            result = firstnum + secondnum
            break
        case ("-"):
            result = firstnum - secondnum
            break
        case ("*"):
            result = firstnum * secondnum
            break
        case ("/"):
            result = firstnum / secondnum
            break
        default:
            break
    }
    RESULT.value = result
}