class Ball {
    constructor(x, y, vx, vy, r, c) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.c = c;
    }

    draw(ctx) {
        // CODE
    }

    move() {
        // CODE
    }

    bounceWall() {
        // TOP WALL
        // CODE

        // BOTTOM WALL
        // CODE
    }

    bouncePaddleL(paddle) {
        // CODE
        return false;
    }

    bouncePaddleR(paddle) {
        // CODE
        return false;
    }
}