class TicTacToe {
    constructor() {
        this.GameTurnMode = 'x';
        this.GameOver = false;
        this.btns = document.querySelectorAll(".btnBox");
        this.resetBtn = document.getElementById("restart");
        this.init();
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => this.handleClick(btn));
        });
        this.resetBtn.addEventListener("click", () => this.resetGame());
    }

    handleClick(btn) {
        if (btn.innerHTML !== "" || this.GameOver) return;
        btn.innerHTML = this.GameTurnMode;
        this.GameTurnMode = this.GameTurnMode === 'x' ? 'o' : 'x';
        this.checkWinCondition();
    }

    checkWinCondition() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (this.btns[a].innerHTML === this.btns[b].innerHTML &&
                this.btns[b].innerHTML === this.btns[c].innerHTML &&
                this.btns[a].innerHTML !== "") {
                this.displayMessage(`${this.btns[a].innerHTML} wins!`);
                this.GameOver = true;
                return;
            }
        }

        if (Array.from(this.btns).every(btn => btn.innerHTML !== "")) {
            this.displayMessage("It's a draw!");
            this.GameOver = true;
        }
    }

    resetGame() {
        this.btns.forEach(btn => btn.innerHTML = "");
        this.GameTurnMode = 'x';
        this.GameOver = false;
        this.displayMessage("");
    }

    displayMessage(msg) {
        const messageArea = document.getElementById("message");
        if (messageArea) {
            messageArea.innerText = msg;
        } else {
            alert(msg);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => new TicTacToe());