document.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundary = document.querySelectorAll(".boundary");
    var status = document.getElementById("status");
    var gameStarted = false;
    var holdingMouse = false;

    // Function to start the game when 'S' is held (not clicked)
    document.addEventListener("mousedown", function (event) {
        if (event.button === 0 && event.target.id === 'start') {
            gameStarted = true;
            holdingMouse = true;
            status.textContent = "Move your mouse to the end to win!";
            for (var i = 0; i < boundary.length; i++) {
                boundary[i].classList.remove("youlose");
            }
        }
    });

    // Function to handle the release of the left mouse button
    document.addEventListener("mouseup", function (event) {
        if (event.button === 0) {
            holdingMouse = false;
            if (gameStarted) {
                for (var j = 0; j < boundary.length; j++) {
                    boundary[j].classList.add("youlose");
                }
                status.textContent = "You lose!";
                gameStarted = false;
            }
        }
    });

    // Add mouseover event listener to each boundary when the game is in progress and the mouse is held
    for (var i = 0; i < boundary.length; i++) {
        boundary[i].addEventListener("mouseover", function () {
            if (gameStarted && holdingMouse) {
                this.classList.add("youlose");
                for (var j = 0; j < boundary.length; j++) {
                    boundary[j].classList.add("youlose");
                }
                status.textContent = "You lose!";
                gameStarted = false;
            }
        });
    }

    end.addEventListener("mouseover", function () {
        if (gameStarted && holdingMouse) {
            for (var j = 0; j < boundary.length; j++) {
                boundary[j].classList.add("youwin");
            }
            status.textContent = "You win!";
            gameStarted = false;
        }
    });

    // Function to check if the mouse goes outside the maze area
    document.body.addEventListener("mousemove", function (event) {
        if (gameStarted && holdingMouse) {
            var mazeRect = document.getElementById("maze").getBoundingClientRect();
            if (
                event.clientX < mazeRect.left ||
                event.clientX > mazeRect.right ||
                event.clientY < mazeRect.top ||
                event.clientY > mazeRect.bottom
            ) {
                for (var j = 0; j < boundary.length; j++) {
                    boundary[j].classList.add("youlose");
                }
                status.textContent = "You lose!";
                gameStarted = false;
            }
        }
    });
});
