'use strict';

var WordCount = function () {};

WordCount.prototype.count = function(string) {

    var words = string.replace(/[^A-Za-z0-9']/g, ' ').split(' ').filter(function(word) {
        return word
    }).map(function(word){
        return word.toLowerCase();
    });

    return words.reduce(function(allWords, word) {

        if (word in allWords) {
            allWords[word]++;
        }
        else {
            allWords[word] = 1;
        }
        return allWords;
    }, {});
}

module.exports = WordCount;