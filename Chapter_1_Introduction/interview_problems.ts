
// 1-32. Write a function to perform integer division without using either the / or *
// operators. Find a fast way to do it.

const performIntegerDivision = (x: number, y: number) : number => {
    if(x < y){
        return 0;
    }else {
        let result = 0;
        while (x >= y){
            result+=1;
            x= x -y;
        }
        return result;
    }
}

console.log(performIntegerDivision(10,5)) // to test the function


// 1-33. There are twenty-five horses. At most, five horses can race together at a
// time. You must determine the fastest, second fastest, and third fastest horses.
//     Find the minimum number of races in which this can be done.

// The problem can be solved using the concept of binary search trees (BSTs).
const minimumNumberOfRaces = (totalNumberOfHorses: number, maximumHorsesPerRace: number) => {
    return Math.ceil(Math.log(totalNumberOfHorses)/Math.log(maximumHorsesPerRace));
}
