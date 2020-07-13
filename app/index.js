var started = false;
const transitionTime = 2000;

var leftCircle = document.getElementById("leftCircle");
leftCircle.addEventListener("click", function () {
    if (started === false) {
        started = true;
        leftCircle.classList.add("move-right");
        setTimeout(function () {
            console.log("negru e la rosu")
            rightCircle.classList.add("move-down");
            setTimeout(function () {
                console.log("rosu e la verde");
                downCircle.classList.add("move-left");
                setTimeout(function () {
                    console.log("am terminat");
                }, transitionTime);
            }, transitionTime);
        }, transitionTime);
    }
});


var rightCircle = document.getElementById("rightCircle");
rightCircle.addEventListener("click", function () {

    if (started === false) {
        started = true;
        rightCircle.classList.add("move-left");

        setTimeout(function () {
            console.log("rosu e la negru")
            leftCircle.classList.add("move-down");
            setTimeout(function () {
                console.log("am terminat");
            }, transitionTime);
        }, transitionTime);
    }
});


var downCircle = document.getElementById("downCircle");
downCircle.addEventListener("click", function () {

    if (started === false) {
        started = true;
        downCircle.classList.add("move-up");

        setTimeout(function () {
            console.log("verde e la rosu")
            rightCircle.classList.add("move-left");

            setTimeout(function () {
                console.log("rosu e la negru")
                leftCircle.classList.add("move-down");
                setTimeout(function () {
                    console.log("am terminat");
                }, transitionTime);
            }, transitionTime);
        }, transitionTime)

    }
});
