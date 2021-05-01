const readline = require("readline-sync");

// Mars rover object
const rover = {
    position: {x: 5, y: 0},
    index: 0,
    direction: ["SOUTH", "WEST", "NORTH", "EAST"],
    log: [],
    
    moveForward: function() {
        if(rover.direction[this.index] === "SOUTH") {
            this.moveForwardSouth();
        } else if (rover.direction[this.index] === "WEST") {
            this.moveForwardWest();
        } else if (rover.direction[this.index] === "NORTH") {
            this.moveForwardNorth();
        } else if (rover.direction[this.index] === "EAST") {
            this.moveForwardEast();
        }
    },

    moveForwardSouth: function () {
        if(rover.position.y < 10) {
            rover.position.y = rover.position.y + 1;
            this.afterMoveForward();
        } else {
            this.printEndOfGrid();
        }
    },

    moveForwardWest: function () {
        if(rover.position.x > 0) {
            rover.position.x = rover.position.x - 1;
            this.afterMoveForward();
        } else {
            this.printEndOfGrid();
        }
    },

    moveForwardNorth: function () {
        if(rover.position.y > 0) {
            rover.position.y = rover.position.y - 1;
            this.afterMoveForward();
        } else {
            this.printEndOfGrid();
        }
    },

    moveForwardEast: function () {
        if(rover.position.x < 10) {
            rover.position.x = rover.position.x + 1;
            this.afterMoveForward();
        } else {
            this.printEndOfGrid();
        }
    },

    /**
     * Actions to do after moving rover forward
     * 
     * @return void
     */
    afterMoveForward: function () {
        this.updateTravelLog();
        this.moveRoverMessage();
    },

    turnRight: function () {
        this.updateTravelLog();
        let newDirection = this.setRoverDirectionRight();
        console.log(`Turning right to face ${newDirection}`);
    },

    turnLeft: function () {
        this.updateTravelLog();
        let newDirection = this.setRoverDirectionLeft();
        console.log(`Turning left to face ${newDirection}`);
    },

    // Next array item
    setRoverDirectionRight: function () {
        this.index = this.index + 1; // increase i by one
        this.index = this.index % rover.direction.length; // if we've gone too high, start from `0` again
        
        return rover.direction[this.index]; // give us back the item of where we are now
    },

    // Previous array item
    setRoverDirectionLeft: function () {
        if (this.index === 0) { // i would become 0
            this.index = rover.direction.length; // so put it at the other end of the array
        }

        this.index = this.index - 1; // decrease by one
        
        return rover.direction[this.index]; // give us back the item of where we are now
    },

    // Travel Log update
    updateTravelLog: function () {
        let newPosition = rover.position.x + "," + rover.position.y;
        rover.log.push(newPosition);
    },

    // Move Rover
    moveRoverMessage: function () {
        console.log(`Moving towards to ${rover.direction[this.index]} coordinates ${rover.position.x},${rover.position.y}`)
    },

    printPosition: function () {
        console.log(`Currently positioned in ${rover.position.x},${rover.position.y}`);
    },

    printEndOfGrid: function () {
        console.log("End of grid, turn around.");
    },

    printLog: function () {
        console.log("Travel Log:");
        rover.log.forEach(log => {
            console.log(log);
        });
    },
};

// Print list of commands.
const listCommands = () => {
    console.log('List of commands:' + '\n'
    + 'MOVE FORWARD' + '\n'
    + 'TURN RIGHT' + '\n'
    + 'TURN LEFT' + '\n'
    + 'PRINT POSITION' + '\n'
    + 'PRINT LOG' + '\n'
    );
}

// UI
const app = () => {
    while(true) {
        let command = readline.question('Please give a command: ');
        switch(command){
            case 'MOVE FORWARD':
                rover.moveForward();
                break;
            case 'TURN RIGHT':
                rover.turnRight();
                break;
            case 'TURN LEFT':
                rover.turnLeft();
                break;
            case 'PRINT POSITION':
                rover.printPosition();
                break;
            case 'PRINT LOG':
                rover.printLog();
                break;
            default:
                console.log('Invalid command.')
        }
    }
}

// Start main functions
listCommands();
app();


