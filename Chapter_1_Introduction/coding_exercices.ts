// https://www.hackerrank.com/challenges/kangaroo/

// The two kangaroos can meet only if position1 = position2 = > x1 + v1 = x2 + v2 at t
// => We should search a t (time) where this logic works
// => t (v1 - v2) = x2 - x1  cause we can the t is relative to the number of jumps..the distance
// t = (x2 - x1)/ (v1 - v2)
// As nobody can go left v1 > v2
const numberLineJumps = (x1: number, v1: number, x2: number, v2: number): string => {
    if(v2 > v1) return 'NO'
    else if((x2-x1) % (v1 - v2) == 0 ) return 'YES';
    else return 'NO';
}


// https://leetcode.com/problems/daily-temperatures/description/
// Need to be rewrite and use stack solution to be implement
const dailyTemperatures = function(temperatures) {
    let newArray = [];
    let finalArray = [];
    temperatures.forEach((item, index) => {
        // Build a new array of next element
        newArray = temperatures.slice(index +1);
        let nbrOfDay = 0;
        // Find the direct sup element of item
        for(let i = 0; i < newArray.length ; i++){
            if(item < newArray[i]){
                nbrOfDay += 1;
                break;
            }
            if(i !== newArray.length - 1){
                nbrOfDay += 1;
            }
        }
        finalArray[index] = nbrOfDay;
    })
    return finalArray;
};

// Rewrited version
const dailyTemperaturesWithStack = (temperatures: number[]): number[] => {
    // @ts-ignore
    const answer: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = []; // Stack to hold indices of temperatures

    for (let i = 0; i < temperatures.length; i++) {
        // Check if current temperature is warmer than the temperature at the index at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop() as number; // Pop the index from the stack
            answer[index] = i - index; // Calculate the number of days until a warmer temperature
        }
        stack.push(i); // Push the current index to the stack
    }

    return answer;
}


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// https://leetcode.com/problems/rotate-list/description/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const rotateRight = (head: ListNode | null, k: number): ListNode | null =>  {
    if (!head || !head.next) return head
    // get the length of the list node
    let n = head, length = 0
    while (n) { n = n.next; length++ }
    const x = k % length
    // do the rotation K times
    for (let i = 0; i < x; i++) {
        let n = head
        // go to the last element
        while (n.next.next) { n = n.next }

        // point last element to become new
        let first = n.next
        n.next = null
        first.next = head
        head = first
    }

    return head
}

// https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=29&page=show_problem&problem=36
// Thinking about optimize it anyway ⌛️
const maximumCycleLength = (x: number, y : number) => {
    let arrayOfCycle = [];
    for(let i = x;i <= y; i ++){
        let n = i;
        let result = 0;
        while(n >= 1){
            result+=1;
            if( n == 1) break;
            else if(n % 2 !== 0) n = 3 * n + 1
            else n = n / 2
        }
        arrayOfCycle.push(result);
    }
    return Math.max(...arrayOfCycle);
}

