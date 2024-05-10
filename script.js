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
    
    let valid = [];

    for (let i = 0; i < resultsArray.length; i++) {
        let indicator;
        let res = resultsArray[i]; 
    
        if (res !== 0) {
            switch(i) {
                case 0:
                    indicator = res > 1 ? `${res} years` : "1 year";
                    break;
                case 1:
                    indicator = res > 1 ? `${res} days` : "1 day";
                    break;
                case 2:
                    indicator = res > 1 ? `${res} hours` : "1 hour";
                    break;
                case 3:
                    indicator = res > 1 ? `${res} minutes` : "1 minute";
                    break;
                case 4:
                    indicator = res > 1 ? `${res} seconds` : "1 second";
                    break;
            }
    
            valid.push(indicator);
        }
    }

    let finalString = (function (arr) {

        if (arr.length < 2)
            return arr.join('')

        let left = arr.slice(0, arr.length - 2).join(', ')
        let right = arr.slice(-2).join(' and ')

        let res = [left, right]

        return res.join(', ')

    })(valid)

    console.log(finalString)

}

generateTime(132030240);
generateTime(205851834);
generateTime(120);
generateTime(3663);
generateTime(1);