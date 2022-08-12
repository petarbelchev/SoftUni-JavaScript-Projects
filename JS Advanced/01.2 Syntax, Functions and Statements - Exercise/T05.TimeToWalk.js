function timeToWalk(steps, stepLength, speed) {
    let distanceInMeters = steps * stepLength;
    let countOfBreaks = Math.trunc(distanceInMeters / 500);
    let speedMetersInSecond = ((speed*1000)/60)/60;
    let neededSeconds = distanceInMeters / speedMetersInSecond;
    let neededMinutes = Math.trunc(neededSeconds / 60);
    neededSeconds -= neededMinutes * 60;
    neededSeconds = Math.round(neededSeconds);
    neededMinutes += countOfBreaks;
    let neededHours = 0;
    if (neededMinutes > 59){
        neededHours = Math.trunc(neededMinutes / 60);
        neededMinutes -= neededHours * 60;
    }
    console.log(`${String("0" + neededHours).slice(-2)}:${String("0" + neededMinutes).slice(-2)}:${String("0" + neededSeconds).slice(-2)}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);