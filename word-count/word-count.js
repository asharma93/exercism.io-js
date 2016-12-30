'use strict';

var WordCount = function () {};

WordCount.prototype.count = function (phrase) {
    var words = phrase.toLowerCase()
        .replace(/[,."\/!&@$%\^\*;:{}()¡¿?]/g, ' ')
        .replace(/\s'(\w+)'\s/, ' '+'$1'+' ')
        .match(/\S+/g);

    return words.reduce(function(allWords, word) {
        if (allWords.hasOwnProperty(word)) {
            allWords[word]++;
        }
        else {
            allWords[word] = 1;
        }

        return allWords;
    }, {});
};

module.exports = WordCount;