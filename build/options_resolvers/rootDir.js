'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootDir;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolves rootDir option for css-modules-require-hook
 *
 * @param {*} value
 * @returns {String}
 */
function rootDir(value /* , currentConfig */) {
  if (!(0, _utils.isString)(value)) {
    throw new Error('Configuration \'rootDir\' is not a string');
  }

  if ((0, _path.isAbsolute)(value)) {
    if (!(0, _fs.statSync)(value).isDirectory()) {
      throw new Error('Configuration \'rootDir\' is not containg a valid absolute path');
    }
  } else {
    var workDir = process.cwd();
    var returnable = _path2.default.join(workDir, value);
    if (!(0, _fs.statSync)(returnable).isDirectory()) {
      throw new Error('Configuration \'rootDir\' is not containg a valid relative path');
    }
    return returnable;
  }

  return value;
}