/*
    on every year that is evenly divisible by 4
      except every year that is evenly divisible by 100
        unless the year is also evenly divisible by 400
*/

var Year = function(year) {
    this.year = year;
};

Year.prototype.isLeap = function() {
    var divisibleBy4 = this.year % 4 === 0;
    var divisibleBy100 = this.year % 100 !== 0;
    var divisibleBy400 = this.year % 400 === 0;

    return divisibleBy4 && (divisibleBy100 || divisibleBy400);
};

module.exports = Year;
