define('quiz/tests/services/sockjs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/sockjs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/sockjs.js should pass jshint.\nservices/sockjs.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/sockjs.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/sockjs.js: line 9, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 10, col 17, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\nservices/sockjs.js: line 11, col 5, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 12, col 61, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n8 errors');
  });
});