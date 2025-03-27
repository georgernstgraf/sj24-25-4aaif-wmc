// Roemische Zahlen Programmieren von Milisa Danaj

// toRoman Funktion
function toRoman(num) {
    if (typeof num !== "number" || num <= 0 || num >= 4000) {
        throw new Error(
            "Ungueltige Eingabe: Nur Zahlen zwischen 1 und 3999 sind erlaubt",
        );
    }

    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
    ];

    let result = "";

    for (const { value, symbol } of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// fromRoman Funktion
function fromRoman(roman) {
    if (typeof roman !== "string" || !/^[MDCLXVI]+$/i.test(roman)) {
        throw new Error("Ungueltige roemische Zahl");
    }

    roman = roman.toUpperCase();
    const romanToValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let total = 0;
    let previousValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentChar = roman[i];
        const currentValue = romanToValue[currentChar];

        if (currentValue < previousValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        previousValue = currentValue;
    }

    // Validierung: Prüfe, ob die römische Zahl korrekt aufgebaut ist
    if (toRoman(total) !== roman) {
        throw new Error("Ungueltige roemische Zahl");
    }

    return total;
}

// Testfaelle
function runTests() {
    const testCases = [
        { input: 1, expected: "I" },
        { input: 4, expected: "IV" },
        { input: 9, expected: "IX" },
        { input: 58, expected: "LVIII" },
        { input: 1994, expected: "MCMXCIV" },
    ];

    console.log("toRoman Tests:");
    testCases.forEach(({ input, expected }) => {
        const result = toRoman(input);
        console.log(
            `${input} => ${result} (${result === expected ? "✓" : "✗"})`,
        );
    });

    const romanTestCases = [
        { input: "I", expected: 1 },
        { input: "IV", expected: 4 },
        { input: "IX", expected: 9 },
        { input: "LVIII", expected: 58 },
        { input: "MCMXCIV", expected: 1994 },
    ];

    console.log("\nfromRoman Tests:");
    romanTestCases.forEach(({ input, expected }) => {
        const result = fromRoman(input);
        console.log(
            `${input} => ${result} (${result === expected ? "✓" : "✗"})`,
        );
    });
}

const to_roman_input = document.getElementById("to-roman-number-input");
const to_roman_output = document.getElementById("to-roman-number-output");
const to_roman_button = document.getElementById("convertToRoman");

const from_roman_input = document.getElementById("from-roman-number-input");
const from_roman_button = document.getElementById("convertFromRoman");
const from_roman_output = document.getElementById("from-roman-number-output");
