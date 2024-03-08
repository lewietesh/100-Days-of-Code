// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
var min = function (arrayList) {
    let minimum = arrayList[0];
    arrayList.forEach(function (element) {
        if (minimum > element) {
            minimum = element;
        }
    })

    return minimum;
}

var max = function (arrayList) {

    let maximum = arrayList[0];

    arrayList.forEach(
        function (element) {
            if (maximum < element) {
                maximum = element;
            }
        }

    )

    return maximum;
}