document.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundary = document.querySelectorAll(".boundary");
    var status = document.getElementById("status");
    var timer = document.getElementById("time");
    var history = document.getElementById("history");
    var gameStarted = false;
    var holdingMouse = false;
    var startTime;
    var endTime;

    function startTimer() {
        startTime = Date.now();
        setInterval(updateTimer, 10); // Update the timer every 10 milliseconds
    }

    function updateTimer() {
        if (gameStarted) {
            var currentTime = Date.now() - startTime;
            var minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
            var milliseconds = currentTime % 1000;

            timer.textContent = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds, true);
        }
    }

    function formatTime(time, isMilliseconds = false) {
        if (isMilliseconds) {
            return time < 10 ? "00" + time : time < 100 ? "0" + time : time;
        } else {
            return time < 10 ? "0" + time : time;
        }
    }

    function addHistory(result, time) {
        var entry = document.createElement("div");
        entry.textContent = result + " - " + formatTime(time, true); // Display time in minutes:seconds:milliseconds
        if (result === "win") {
            entry.style.color = "green";
        } else {
            entry.style.color = "red";
        }
        history.appendChild(entry);
    }

    // Function to start the game when 'S' is held (not clicked)
    document.addEventListener("mousedown", function (event) {
        if (event.button === 0 && event.target.id === 'start') {
            gameStarted = true;
            holdingMouse = true;
            status.textContent = "Move your mouse to the end to win , hold your mouse!";
            for (var i = 0; i < boundary.length; i++) {
                boundary[i].classList.remove("youlose");
                boundary[i].classList.remove("youwin");
            }
            startTimer();
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
                endTime = Date.now() - startTime;
                addHistory("lose", endTime);
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
                endTime = Date.now() - startTime;
                addHistory("lose", endTime);
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
            endTime = Date.now() - startTime;
            addHistory("win", endTime);
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
                endTime = Date.now() - startTime;
                addHistory("lose", endTime);
            }
        }
    });
});
