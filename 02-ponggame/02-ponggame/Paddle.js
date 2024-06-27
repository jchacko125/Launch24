class Paddle {
    constructor(x, y, l, w, c) {
        // CODE
    }

    draw(ctx) {
        // CODE
    }

    move() {
        let newY = 0;
        // CODE

        this.y = newY;
    }

    moveCPU(ball) {
        // Use the properties of the ball to set a new velocity
        // Helpful pieces:
        //   Math.min() and Math.max() to limit the velocity
        //   ball.y to see where the ball is
        //   ball.vy to see where the ball is going

        this.vy = 0; // Modify this line to add your own code

        // Finally, call move to move the paddle normally
        this.move();
    }
}
