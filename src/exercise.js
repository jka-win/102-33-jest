
exports.reverseNumber = function (number) {
    const reversed = Array.from(String(number)).reverse().join("");
    return Number(reversed);
}

exports.alphabetize = function (text) {
    return Array.from(text).sort().join("");
}

exports.capitalize = function (text) {
    return text.replaceAll(/(?<!\w)\w/g, m => m.toUpperCase());
}

exports.prime = function (number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return number >= 2;
}

exports.unique = function (text) {
    text = Array.from(text);
    let result = [];
    while (text.length) {
        result.push(text[0]);
        text = text.filter(c => c != text[0]);
    }
    return result.join("");
}

exports.secondest = function (numbers) {
    if (numbers.length < 2) {
        return undefined;
    }

    numbers = numbers.sort();
    return [numbers[1], numbers.at(-2)];
}

exports.bubbleSort = function (numbers) {
    for (let end = numbers.length - 1; end > 0; end--) {
        for (let i = 0; i < end; i++) {
            if (numbers[i] < numbers[i + 1]) {
                let n = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = n;
            }
        }
    }
    return numbers;
}

exports.arbitraryCallbackFunction = function (f) {
    return f();
}
