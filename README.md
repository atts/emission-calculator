CO2 Emission Calculator

CO2 Emission Calculator is a CLI application built in Node.js.

# Installation

1. Install NodeJS runtime in the machine using if already not installed. 
    > Source : https://nodejs.org/en/download/ (node v12 or greater)

2. Download this emission-calculator.zip or clone this repo

3. Extract/Unzip the contents

4. Navigate to the folder where contents extracted 
    > cd emission-calculator

5. To Install other dependencies :
    > npm install

6. To Install this co2emission CLI app globally on the machine, use command :
    > npm install -g .

7. To run, open any terminal and use command 'calculate'
    > calculate --help   (to list the usage of available paramters to be used with this command)

    parameter and values can be separated using space or '=' or a combination of both
    
    Usage: 
    
    --distance <distance> --transportation-method <type-of-transport> --unit-of-distance <km/m> --output <kg/g> 
    --distance=<distance> --transportation-method=<type-of-transport> --unit-of-distance=<km/m> --output <kg/g>

    Options:
        --version                        Show version number                 [boolean]
        --transportation-method, --mode  transportation mode       [string] [required]
        --unit-of-distance, --unit       it can be km or m    [string] [default: "km"]
        --help, -h                       Show help                           [boolean]

8. To test, run command :
    > npm run test


# Dependencies used
    - NPM as a node dependency manager
    - Mocha for unit testing
    - Yargs for CLI parsing