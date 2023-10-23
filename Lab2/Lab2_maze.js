document.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundary = document.querySelectorAll(".boundary");
    var status = document.getElementById("status");
    var gameStarted = false;

    // Add mouseover event listener to each boundary
    for (var i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseover", function () {
        if (gameStarted) {
        this.classList.add("youlose");
        // Make all boundaries red on hover
        for (var j = 0; j < boundary.length; j++) {
            boundary[j].classList.add("youlose");
        }
        status.textContent = "You lose!";
        }
    });
    }

    start.addEventListener("mouseover", function () {
    gameStarted = true;
    status.textContent = "Move your mouse to the end to win!";
    // Reset boundaries to normal color
    for (var i = 0; i < boundary.length; i++) {
        boundary[i].classList.remove("youlose");
    }
    });

    start.addEventListener("click", function () {
    gameStarted = false;
    status.textContent = "Move your mouse over the 'S' to begin.";
    // Reset boundaries to normal color
    for (var i = 0; i < boundary.length; i++) {
        boundary[i].classList.remove("youlose");
    }
    });

    end.addEventListener("mouseover", function () {
    if (gameStarted) {
        status.textContent = "You win!";
        gameStarted = false;
    }
    });

    document.body.addEventListener("mousemove", function (event) {
    if (gameStarted) {
        var mazeRect = document.getElementById("maze").getBoundingClientRect();
        if (
        event.clientX < mazeRect.left ||
        event.clientX > mazeRect.right ||
        event.clientY < mazeRect.top ||
        event.clientY > mazeRect.bottom
        ) {
        status.textContent = "You lose!";
        gameStarted = false;
        }
    }
    });
});
  