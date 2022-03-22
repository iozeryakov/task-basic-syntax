export function romanToInteger(str) {
    let result = 0;
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let value = 0;
    for (let i = 0; i < str.length; i++) {
        const valueNew = values[str[i]];
        if (value === 0) {
            value = valueNew;
        } else if (value < valueNew) {
            result += valueNew - value;
            value = 0;
        } else {
            result += value;
            value = valueNew;
        }
    }
    result += value;
    return result;
}
