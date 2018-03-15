var rightWords = [
    "lasagna",
    "lahren",
    "laryngitis",
    "larynx",
    "larson",
    "legislation",
    "lemon",
    "lenin",
    "lesion",
    "layer",
    "loofah",
    "leftist",
    "lactation",
    "labia",
    "landlord"
],

leftWords = [
    "tomi",
    "tammy",
    "tammi",
    "tammie",
    "tommy",
    "tom",
    "tony",
    "tory",
    "tessa",
    "tarantula",
    "tonya",
    "tamika", // https://www.avclub.com/calling-tomi-lahren-tammy-is-the-joke-that-keeps-givi-1822564995
    "tonka",
    "tamrynn",
    "tina",
    "tiffany",
    "tamara",
    "tapas",
    "terry",
    "teriyaki"
];

function leftWord(){
    return leftWords[Math.floor(Math.random() * leftWords.length) + 1];
};

function rightWord(context){
    return rightWords[Math.floor(Math.random() * rightWords.length) + 1];
};

function generateString(){
    return leftWord() + ' ' + rightWord();
};

exports.generate = generateString;
