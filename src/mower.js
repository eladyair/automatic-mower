class Mower {
    constructor(size, mowerData) {
        // Extracting the width and height of the lawn size
        const [width, height] = size;
        // Extracting the current poistion and direction the mower is located
        const [x, y, direction] = mowerData.position;

        // Setting the object properties to their initial data
        this.width = width;
        this.height = height;
        this.xPosition = x;
        this.yPosition = y;
        this.direction = direction;
        this.instructions = mowerData.instructions;
        this.endPosition = [];

        // Mapping for the mower direction which will return its current poistion accordingly.
        this.move = {
            N: ([x, y]) => (y === this.height ? [x, y] : [x, y + 1]),
            S: ([x, y]) => (y === 0 ? [x, y] : [x, y - 1]),
            E: ([x, y]) => (x === this.width ? [x, y] : [x + 1, y]),
            W: ([x, y]) => (x === 0 ? [x, y] : [x - 1, y])
        };

        // Constants for all the possible options of the mower direction
        this.changeDirection = {
            NL: 'W',
            NR: 'E',
            WL: 'S',
            WR: 'N',
            SL: 'E',
            SR: 'W',
            EL: 'N',
            ER: 'S'
        };
    }

    /*
        Staring the mower movement and updating it's final position and direction
    */
    start() {
        // Going over the mower move instructions
        for (const instruction of this.instructions) {
            // If it's a direction change
            if (instruction === 'L' || instruction === 'R') {
                this.direction = this.changeDirection[this.direction + instruction];
            }

            // If it's move forward
            if (instruction === 'F') {
                [this.xPosition, this.yPosition] = this.move[this.direction]([this.xPosition, this.yPosition]);
            }
        }

        // Updating the end poistion for the current mower
        this.endPosition = [this.xPosition, this.yPosition, this.direction];
    }

    /*
        Returning the mower final position and direction
    */
    getEndPosition() {
        return this.endPosition;
    }
}

export default Mower;
