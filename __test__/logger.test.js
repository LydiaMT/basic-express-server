'use strict';

const logger = require('../src/middleware/logger');

describe('---------- LOGGER TEST ----------' , () => {
  let consoleSpy; //needed when console logging
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on next method

  beforeEach(() => {
    // Attach to the console (take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Put the console back
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    logger(req, res, next);
    // toHaveBeenCalled() is not enough, we need to make sure it was called with no args
    expect(next).toHaveBeenCalledWith();
  });
});
