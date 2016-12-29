var Gigasecond = function(date) {
    this.time = date.getTime();
    this.giga = Math.pow(10, 9) * 1000;
};

Gigasecond.prototype = {
    date: function() {
        return new Date(this.time + this.giga);
    }
}

module.exports = Gigasecond;