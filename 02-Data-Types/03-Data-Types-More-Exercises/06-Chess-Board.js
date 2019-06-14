function chessBoard(input) {
  const chessBoardStart = '<div class="chessboard">';
  const chessBoardEnd = '</div>'
  let chessBoardMiddle = ''

  for (let i = 1; i <= input; i++) {
    if (i % 2 == 0) {
      chessBoardMiddle += `  <div>
  <span class="white"></span>
  <span class="black"></span>
  <span class="white"></span>
     </div>`
    } else {
      chessBoardMiddle += `  <div>
  <span class="black"></span>
  <span class="white"></span>
  <span class="black"></span>
  </div> `;
    }

  }

  console.log(chessBoardStart);
  console.log(chessBoardMiddle);
  console.log(chessBoardEnd);
}
chessBoard(3);