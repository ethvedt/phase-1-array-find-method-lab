// code your solution here
function superbowlWin(arr) {
    let yearIndex = 0;
    arr.find((obj, index, arr) => {
        if (obj.result === 'W') {
            yearIndex = index;
            return true;
        }
    })
    if (yearIndex != 0) {
        return arr[yearIndex].year;
    }
    else {
        return undefined;
    }
};