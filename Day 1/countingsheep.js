// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(sheep) {
    // TODO
    let sheepCount = 0;
    if (sheep.length === 0) {
        return 0;

    }
    else {
        sheep.forEach(
            function (element) {
                if (element === true) {
                    sheepCount++;
                }


            }
        )
                      return sheepCount;

    }

}