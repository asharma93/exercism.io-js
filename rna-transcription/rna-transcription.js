var DnaTranscriber = function() {
    this.dnaToRnaMap = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
};

DnaTranscriber.prototype.toRna = function(nucleotides) {
    var transcribed = '';

    for (var i = 0; nucleotides.length > i; i++) {
        transcribed = transcribed.concat(this.dnaToRnaMap[nucleotides[i]]);
    }

    return transcribed;
};

module.exports = DnaTranscriber;