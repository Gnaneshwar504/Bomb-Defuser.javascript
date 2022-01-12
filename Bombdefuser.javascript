let timer = document.getElementById("timer");
let defuseEl = document.getElementById("defuser");

let count = 10;

let timeId = setInterval(function() {
    count = count - 1;
    timer.textContent = count;

    if (count === 0) {
        timer.textContent = "Boom"
        clearInterval(timeId);

    }
}, 1000);

defuseEl.addEventListner("keydown", function(event) {
    let bombdefuser = defuseEl.value;
    if (event.key === "enter" && bombdefuser === "defuse" && count !== 0) {
        timer.textContent = "you did";
        clearInterval(timeId);
    }


})
