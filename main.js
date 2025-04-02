document.addEventListener("DOMContentLoaded", function () {
	
    let GameTurnMode = 'x'; // 'x' or 'o'

    let GameOver = false; // Game over flag

    function HandleClickEvent(btnID)
    {
        let btnBox = document.getElementById(btnID);
        if (btnBox.innerHTML != "" || GameOver) {
            return; // Ignore clicks on already filled boxes or if game is over
        }
        btnBox.innerHTML = GameTurnMode; // Set the box to the current player's symbol
        
        GameTurnMode = GameTurnMode === 'x' ? 'o' : 'x'; // Switch player
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