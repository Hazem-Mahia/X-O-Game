let title = document.querySelector(".title");

let turn = 'X';

let square = [];

function winner() {
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;
    }
    if (square[1] === square[2] && square[2] === square[3] && square[2] != "") {
        newGame(1,2,3);
    } else if (square[4] === square[5] && square[5] === square[6] && square[6] != "") {
        newGame(4,5,6);


    } else if (square[7] === square[8] && square[8] === square[9] && square[7] != "") {
        newGame(7,8,9);


    } else if (square[1] === square[4] && square[4] === square[7] && square[1] != "") {
        newGame(1,4,7);


    } else if (square[2] === square[5] && square[5] === square[8] && square[5] != "") {
        newGame(2,5,8);


    } else if (square[3] === square[6] && square[6] === square[9] && square[9] != "") {
        newGame(3,6,9);


    } else if (square[1] === square[5] && square[5] === square[9] && square[5] != "") {
        newGame(1,5,9);


    } else if (square[3] === square[5] && square[5] === square[7] && square[5] != "") {
        newGame(3,5,7);


    }
}

function game(id) {
    let item = document.getElementById(id)
    if (turn === 'X' && item.innerHTML == "") {
        item.innerHTML = "X";
        turn = "O";
        title.innerHTML = "O"
    } else if (turn === "O" && item.innerHTML == "") {
        item.innerHTML = "O";
        turn = "X"
        title.innerHTML = 'X';
    }
    winner();
}

function newGame(num1, num2, num3) {
    title.innerHTML = `${square[num1]} Winner`;
    document.getElementById("item" + num1).style.cssText = "background:#19bb7f; color: #325"
    document.getElementById("item" + num2).style.cssText = "background:#19bb7f; color: #325"
    document.getElementById("item" + num3).style.cssText = "background:#19bb7f; color: #325"

    setInterval( () => title.innerHTML += '.', 1000);
    setTimeout( () => location.reload() ,4000 );
}