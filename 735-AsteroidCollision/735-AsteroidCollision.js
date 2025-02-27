/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
/**
    Use a Stack: We use a stack to keep track of asteroids that are still 
    in space.
    Process Each Asteroid:
        If it's moving right (positive), push it onto the stack.
        If it's moving left (negative), check for collisions with the top       
         asteroid in the stack.
    Handling Collisions:
        If the top asteroid in the stack is smaller, pop it (it explodes).
        If they are equal, pop the top asteroid and do not add the current 
         asteroid (both explode).
        If the top asteroid is larger, do nothing (the current asteroid explodes).
    After Iteration, the stack contains the remaining asteroids.
 */
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let isAlive = true;

        while (
            isAlive && asteroid < 0 
            && stack.length > 0 && stack[stack.length - 1] > 0
            ) {
            let top = stack[stack.length - 1];

            if (top < Math.abs(asteroid)) {
                // The positive asteroid is smaller, so it gets destroyed
                stack.pop();
            } else if (top === Math.abs(asteroid)) {
                // Both asteroids are the same size, both get destroyed
                stack.pop();
                isAlive = false;
            } else {
                // The current negative asteroid is smaller, so it gets destroyed
                isAlive = false;
            }
        }

        if (isAlive) stack.push(asteroid);
    }

    return stack;
};
