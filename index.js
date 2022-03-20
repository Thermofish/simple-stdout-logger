'use strict';

const moment = require ('moment');
const chalk = require ('chalk');

class StdoutLogger {

  /**
   * Logs an information level message.
   * @static
   * @param {string} message a string to include in the log
   */
  static info (message) {

    // log to console
    console.log (`[${moment ().format ('MM/DD/YYYY hh:mm:ss a')}] ${chalk.cyan ('[INFO]')}: ${message}`);
  }

  /**
   * Logs a warning level message.
   * @static
   * @param {string} message a string to include in the log
   */
  static warn (message) {

    // log to console
    console.log (`[${moment ().format ('MM/DD/YYYY hh:mm:ss a')}] ${chalk.yellow ('[WARN]')}: ${message}`);
  }

  /**
   * Logs an error level message.
   * @static
   * @param {string} message a string to include in the log
   */
  static error (message) {

    // log to console
    console.log (`[${moment ().format ('MM/DD/YYYY hh:mm:ss a')}] ${chalk.red ('[ERROR]')}: ${message}`);
  }

  /**
   * Logs a debug level message.
   * @static
   * @param {string} message a string to include in the log
   */
  static debug (message) {

    // log to console
    console.log (`[${moment ().format ('MM/DD/YYYY hh:mm:ss a')}] ${chalk.magentaBright ('[DEBUG]')}: ${message}`);
  }
}

module.exports.stdout = StdoutLogger;
