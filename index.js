// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(num1, num2) {
    return Math.abs(num1 - num2) * 264
}

function calculatesFarePrice(num1, num2) {
    const feet = distanceTravelledInFeet(num1, num2);
    let price = 0;
    switch (true) {
        case feet < 401:
            return price;
        case feet > 400 && feet < 2001:
            price += (feet - 400) * .02
            return price;
        case feet > 2000 && feet < 2500:
            price += 25
            return price;
        case feet > 2500:
            return "cannot travel that far";
    }
}
