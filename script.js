const car = document.querySelector("#car");
const bump = document.querySelector("#bump");

function jump() {

    if (bump.classList != "bump-animate") {
        bump.classList.add("bump-animate");
    }

    if (car.classList != "car-animate") {
        car.classList.add("car-animate");
        setTimeout(function() {
            car.classList.remove("car-animate");
        }, 500);

    }
}

var crashControl = setInterval(function() {

        var carBottom = parseInt(window.getComputedStyle(car).getPropertyValue("bottom"));
        console.log(carBottom);

        var bumpLeft = parseInt(window.getComputedStyle(bump).getPropertyValue("left"));
        console.log(bumpLeft);

        if (bumpLeft > 0 && bumpLeft < 40 && carBottom < 25) {
            alert("Game Over!");
        }

    },
    10);