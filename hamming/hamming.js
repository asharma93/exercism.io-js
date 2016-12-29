var Hamming = function () {};

Hamming.prototype.compute = function(strA, strB) {
    var count = 0;
    var splitA = strA.split('');
    var splitB = strB.split('');

    if (splitA.length !== splitB.length) {
        throw 'DNA strands must be of equal length.';
    }

    splitA.forEach(function(letter, index) {
        if (letter !== splitB[index]) {
            count ++
        }
    });

    return count;
};

module.exports = Hamming;