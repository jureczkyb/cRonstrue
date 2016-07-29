var assert = require('chai').assert;
var StringUtilities = require('../build/stringUtilities').StringUtilities;

describe('StringUtilities', function () {
    describe('format', function () {
        it('should format a string with no replacements', function () {
            assert.equal(StringUtilities.format("Test"), "Test");
        });

        it('should format a string with one replacement', function () {
            assert.equal(StringUtilities.format("Test %s", "one"), "Test one");
        });

        it('should format a string with multiple replacements', function () {
            assert.equal(StringUtilities.format("Test %s %s %s", "one", "two", "three"), "Test one two three");
        });
    });
});
