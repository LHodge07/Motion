// Create an object containing animated character data
const characterDataNeil = {
    arrImgs: ["runninge0000.png", "runninge0001.png",
        "runninge0002.png", "runninge0003.png", "runninge0004.png",
        "runninge0005.png", "runninge0006.png", "runninge0007.png"],
    poseNumber: 0,
    elem: document.querySelector("#neil"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 0,
    y: document.querySelector("#park").scrollHeight - 100,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 150) {
            characterDataNeil.x = 5;
        } else {
            this.x += 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "boyAlt\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }

}



// Function called when the move it button is clicked
function move() {
    characterDataNeil.timerId = setInterval(frame, 100);
}

// Callback function to reset the image position
function frame() {
    characterDataNeil.move();
}

// Function called when the stop button is clicked
function stopMoving() {
    clearInterval(characterDataNeil.timerId);
}

/* You can add more characters and process the animation with an array */
const characters = [characterDataNeil];
