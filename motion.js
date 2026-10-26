const characterDataSkull = {
    arrImgs: ["skull0000.png", "skull0001.png", "skull0002.png",
        "skull0003.png", "skull0004.png", "skull0005.png",
        "skull0006.png", "skull0007.png", "skull0008.png"],
    poseNumber: 0,
    elem: document.querySelector("#skull"),
    screenWidth: document.querySelector("#house").clientWidth,
    screenHeight: document.querySelector("#house").scrollHeight,
    x: document.querySelector("#house").clientWidth * 0.3,
    y: document.querySelector("#house").scrollHeight,
    timerId: null,
    move: function () {
        if (this.y < -100) {
            this.y = this.screenHeight;
        } else {
            this.y -= 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "skull/" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 9;
        }
    }
}


const characterDataZombie = {
    arrImgs: ["zombie0001.png", "zombie0002.png", "zombie0003.png",
        "zombie0004.png", "zombie0005.png", "zombie0006.png"],
    poseNumber: 0,
    elem: document.querySelector("#zombie"),
    screenWidth: document.querySelector("#house").clientWidth,
    screenHeight: document.querySelector("#house").scrollHeight,
    x: document.querySelector("#house").clientWidth * 0.42 - 50,
    y: document.querySelector("#house").scrollHeight * 0.6,
    move: function () {
        if (this.y > this.screenHeight) {
            this.y = this.screenHeight * 0.6;
        } else {
            this.y += 3;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "zombie/" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 6;
        }
    }
}


const characters = [characterDataSkull, characterDataZombie];

function move() {
    characterDataSkull.timerId = setInterval(frame, 100);
}

function frame() {
    for (let i = 0; i < characters.length; i++) {
        characters[i].move();
    }
}
function stopMoving() {
    clearInterval(characterDataSkull.timerId);
}