<!DOCTYPE html>
<html>
<head>
    <title>Easy Chessboard</title>
    <style>
        #board {
            width: 320px;
            height: 320px;
            display: flex;
            flex-wrap: wrap;
        }
        .square {
            width: 40px;
            height: 40px;
        }
        .black { background: black; }
        .white { background: white; }
    </style>
</head>
<body>

<h2>Easy Chessboard</h2>

<div id="board"></div>

<script>
let board = document.getElementById("board");

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        let box = document.createElement("div");
        box.className = "square " + ((row + col) % 2 === 0 ? "white" : "black");
        board.appendChild(box);
    }
}
</script>

</body>
</html>
