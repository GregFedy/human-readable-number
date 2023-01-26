module.exports = function toReadable(num) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (num === 0) {
        return "zero";
    }

    let result = "";
    let numString = num.toString();

    for (let i = 0; i < numString.length; i += 3) {
        let group = numString.substring(i, i + 3);
        if (Number(group) !== 0) {
            result =
                convertThreeDigits(Number(group)) +
                (i > 0 ? " thousand " + result : "");
        }
    }
    return result.trim();

    function convertTwoDigits(num) {
        return num < 20
            ? ones[num]
            : tens[Math.floor(num / 10)] +
                  (num % 10 !== 0 ? " " + ones[num % 10] : "");
    }

    function convertThreeDigits(num) {
        return num >= 100
            ? ones[Math.floor(num / 100)] +
                  " hundred " +
                  convertTwoDigits(num % 100)
            : convertTwoDigits(num);
    }
};
