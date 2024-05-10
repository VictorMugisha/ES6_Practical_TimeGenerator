/**
 * 1. Store years, days, hours and minutes in constants
 * 2. Using generator function
 * 
 */

function generateTime(unit) {

    if (typeof unit !== "number" || unit < 0) return "Invalid";
    if (unit === 0) return "now";

    const SECOND = 1;
    const MINUTE = 60;
    const HOUR = 3600;
    const DAY = 86400;
    const YEAR = 31536000;

    const array_const = [YEAR, DAY, HOUR, MINUTE, SECOND];

    let remainder;

    let resultsArray = [];

    for (let index in array_const) {
        let time = 0;
        let constant = array_const[index];

        if (unit >= constant) {
            remainder = unit % constant;
            time = (unit - remainder)/constant;
            unit = remainder;
        } else if (index === 4) {
            time = unit;
        } else {
            time = 0;
        }
        resultsArray.push(time);
    }

    console.log(resultsArray);

}

generateTime(132030240);
generateTime(205851834);
generateTime(120);
generateTime(3663);
generateTime(1);