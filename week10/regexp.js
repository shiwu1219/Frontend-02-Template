var regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;
// 正则里面圆括号表示捕获
var dictionary = [
    "Number",
    "Whitespace",
    "LineTerminator",
    "*",
    "/",
    "+",
    "-",
];

function tokenize(source) {
    var result = null;
    while (true) {
        result = regexp.exec(source);

        if (!result) break;

        for (var i = 1; i <= dictionary.length; i++) {
            if (result[i]) console.log(dictionary[i - 1]);
        }
        console.log(result);
    }
}

tokenize("1024 + 1 * 25");