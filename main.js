document.addEventListener("DOMContentLoaded", function () {
	
    let GameTurnMode = 'x'; // 'x' or 'o'

    let GameOver = false; // Game over flag

    // Function to check for a win condition
    function CheckWinCondition() {
        let btns = document.querySelectorAll(".btnBox");
        let winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6] // Diagonal
        ];
        
        for (let condition of winConditions) {
            if (btns[condition[0]].innerHTML === btns[condition[1]].innerHTML && 
                btns[condition[1]].innerHTML === btns[condition[2]].innerHTML && 
                btns[condition[0]].innerHTML !== "") {
                alert(btns[condition[0]].innerHTML + " wins!");
                GameOver = true; // Set game over flag
                return;
            }
        }
        
        // Check for draw condition
        let isDraw = Array.from(btns).every(btn => btn.innerHTML !== "");
        if (isDraw) {
            alert("It's a draw!");
            GameOver = true; // Set game over flag
        }
    }

    function HandleClickEvent(btnID)
    {
        let btnBox = document.getElementById(btnID);
        if (btnBox.innerHTML != "" || GameOver) {
            return; // Ignore clicks on already filled boxes or if game is over
        }
        btnBox.innerHTML = GameTurnMode; // Set the box to the current player's symbol
        
        GameTurnMode = GameTurnMode === 'x' ? 'o' : 'x'; // Switch player

        CheckWinCondition(); // Check for win or draw after each move
    }

    let btns = document.querySelectorAll(".btnBox");
    btns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            HandleClickEvent(btn.id);
        });
    });

    let resetBtn = document.getElementById("restart");
    resetBtn.addEventListener("click", function() {
        btns.forEach(function(btn) {
            btn.innerHTML = ""; // Clear all boxes
        });
        GameTurnMode = 'x'; // Reset to player 'x'
        GameOver = false; // Reset game over flag
    });

});