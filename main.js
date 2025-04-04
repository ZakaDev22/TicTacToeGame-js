class TicTacToe {
    constructor() {
        this.GameTurnMode = 'x';
        this.GameOver = false;
        this.resetBtn = document.getElementById("restart");

        this.CreateButtons();
        this.btns = document.querySelectorAll(".btnBox");
        this.init();
    }

    messageArea = document.getElementById("message");

    CreateButtons() {
        for (let i = 0; i < 9; i++) {
            const btn = document.createElement("div");
            btn.className = "btnBox";
            btn.innerHTML = "";
            document.querySelector(".container").appendChild(btn);
        }
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
                this.btns[a].style.backgroundColor = "green";
                this.btns[b].style.backgroundColor = "green";
                this.btns[c].style.backgroundColor = "green";
               
                return;
            }
        }

        if (Array.from(this.btns).every(btn => btn.innerHTML !== "")) {
            this.btns.forEach(btn => btn.style.backgroundColor = "red");
            this.displayMessage("It's a draw!");
        }
    }

    resetGame() {
       this.displayMessage("Resetting The game");
    }

    displayMessage(message) {
        this.messageArea.innerHTML = message;
        let interval = setInterval(() => {
            this.messageArea.innerHTML += ".";
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            location.reload();
        }, 3000);
    }
}

document.addEventListener("DOMContentLoaded", () => new TicTacToe());