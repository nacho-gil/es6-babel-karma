// Recursive solution
export function recursive(number) {
    if (number < 2) {
        return 1;
    }

    return number * recursive(number - 1);
}

// Iterative solution
export function iterative(number) {
    let result = 1;

    while (number) {
        result *= number;
        number -= 1;
    }

    return result;
}

// Export recursive as default
export default recursive;
