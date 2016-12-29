// http://exercism.io/submissions/dcc4465de63a4e91904cb79f818ee4cf
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    var defaultHello = 'Hello, World!';

    if (input && input.length > 0) {
        return 'Hello, ' + input + '!';
    } else {
        return defaultHello;
    }
};

module.exports = HelloWorld;
