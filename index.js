// Code your solution in this file!
function distanceFromHqInBlocks(d) {
    return d > 42 ? d-42 : 42-d;
}

function distanceFromHqInFeet(d) {
    const blocks = distanceFromHqInBlocks(d);
    return blocks*264;
}

function distanceTravelledInFeet(b1, b2) {
    return b1 < b2 ? (b2-b1)*264 : (b1-b2)*264;
}

function calculatesFarePrice(b1, b2) {
    const feet = distanceTravelledInFeet(b1, b2);
    if (feet < 400) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        return (feet-400)*0.02;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}