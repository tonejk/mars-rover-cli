const readline = require("readline-sync");

// H4.2 Mars rover class & H4.3 Two Rovers (Example only)
class MarsRover {
    constructor(x,y,name) {
        this.x = x;
        this.y = y;
        this.direction = "SOUTH";
        this.log = [];
        this.name = name;
    }
    
        moveForward() {
            this.x = 5;
            this.y = 1;
            this.y = this.y + 1;
            console.log(`Moving towards ${this.direction} to coordinates ${this.x},${this.y}`);
            this.log.push(`${this.x},${this.y}`);
        }

        turnLeft() {
            this.direction = "WEST";
            console.log(`Turning right to face ${this.direction}`);
        }

        turnRight() {
            this.direction = "SOUTH";
            console.log(`Turning left to face ${this.direction}`);
        }

        printPosition() {
            console.log(`Currently positioned in ${this.x},${this.y}`);
        }

        printLog() {
            console.log(`Travel Log: ${this.log}`);
        }
}

// MarsRover Class instances
const roverClass = new MarsRover();
roverClass.moveForward();
roverClass.turnLeft();
roverClass.turnRight();
roverClass.printPosition();
roverClass.printLog();

const roverClass2 = new MarsRover(3, 2, "TALOS");
console.log(roverClass2);










// H4.1 Mars Rover, 4.5 Collision detection, H4.7 Command line interface

// Mars rover object
const rover = {
    position: {x: 5, y: 0},
    direction: ["SOUTH", "WEST", "NORTH", "EAST"],
    log: [],
    
    moveForward: function() {
        if(rover.direction[i] === "SOUTH") {
            if(rover.position.y < 10) {
                rover.position.y = rover.position.y + 1;
                updateTravelLog();
                moveRoverMessage();
            } else {
                console.log("End of grid, turn around.");
            }
        } else if (rover.direction[i] === "WEST") {
            if(rover.position.x > 0) {
                rover.position.x = rover.position.x - 1;
                updateTravelLog();
                moveRoverMessage();
            } else {
                console.log("End of grid, turn around.");
            }
        } else if (rover.direction[i] === "NORTH") {
            if(rover.position.y > 0) {
                rover.position.y = rover.position.y - 1;
                updateTravelLog();
                moveRoverMessage();
            } else {
                console.log("End of grid, turn around.");
            }
        } else if (rover.direction[i] === "EAST") {
            if(rover.position.x < 10) {
                rover.position.x = rover.position.x + 1;
                updateTravelLog();
                moveRoverMessage();
            } else {
                console.log("End of grid, turn around.");
            }

        }
    },

    turnRight: function () {
        updateTravelLog();
        let newDirection = nextItem();  
        console.log(`Turning right to face ${newDirection}`);
    },

    turnLeft: function () {
        updateTravelLog();
        let newDirection = prevItem();
        console.log(`Turning left to face ${newDirection}`);
    },

    printPosition: function () {
        console.log(`Currently positioned in ${rover.position.x},${rover.position.y}`);
    },

    printLog: function () {
        console.log("Travel Log:");
        rover.log.forEach(log => {
            console.log(log);
        });
    },
};

// Global index value 
let i = 0;

// Next array item
function nextItem() {
    i = i + 1; // increase i by one
    i = i % rover.direction.length; // if we've gone too high, start from `0` again
    return rover.direction[i]; // give us back the item of where we are now
}

// Previous array item
function prevItem() {
    if (i === 0) { // i would become 0
        i = rover.direction.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return rover.direction[i]; // give us back the item of where we are now
}

// Travel Log update
updateTravelLog = () => {
    let newPosition = rover.position.x + "," + rover.position.y;
    rover.log.push(newPosition);
}

// Move Rover
moveRoverMessage = () => {
    console.log(`Moving towards to ${rover.direction[i]} coordinates ${rover.position.x},${rover.position.y}`)
}


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


