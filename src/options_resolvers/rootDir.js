import { isAbsolute } from 'path';
import { statSync } from 'fs';
import { isString } from '../utils';
import path from 'path';
/**
 * Resolves rootDir option for css-modules-require-hook
 *
 * @param {*} value
 * @returns {String}
 */
 export default function rootDir(value/* , currentConfig */) {
  if (!isString(value)) {
    throw new Error(`Configuration 'rootDir' is not a string`);
  }

  if (isAbsolute(value) ) {
    if(!statSync(value).isDirectory()) {
      throw new Error(`Configuration 'rootDir' is not containg a valid absolute path`);
    }
  } else {
    const workDir = process.cwd()
    const returnable = path.join(workDir, value)
    if(!statSync(returnable).isDirectory()) {
      throw new Error(`Configuration 'rootDir' is not containg a valid relative path`);
    }
    return returnable
  }

  return value;
}
