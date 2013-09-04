var grunt = require('grunt');

/*
======== A Handy Little Nodeunit Reference ========
https://github.com/caolan/nodeunit

Test methods:
test.expect(numAssertions)
test.done()
Test assertions:
test.ok(value, [message])
test.equal(actual, expected, [message])
test.notEqual(actual, expected, [message])
test.deepEqual(actual, expected, [message])
test.notDeepEqual(actual, expected, [message])
test.strictEqual(actual, expected, [message])
test.notStrictEqual(actual, expected, [message])
test.throws(block, [error], [message])
test.doesNotThrow(block, [error], [message])
test.ifError(value)
*/

exports.update_config_test = {

  configFileWasWritten: function(test) {
    var actual = grunt.file.read('tmp/config.js');
    var expected = grunt.file.read('tests/files/expected-config.js');
    
    test.equal(actual, expected, 'config file should be created successfully.');

    test.done();
  }

};