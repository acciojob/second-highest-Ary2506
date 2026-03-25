//your JS code here. If required.
function secondHighest(arr) {
    // Edge cases
    if (arr.length < 2) return -Infinity;

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    // If second never updated → all elements same
    return second === -Infinity ? -Infinity : second;
}