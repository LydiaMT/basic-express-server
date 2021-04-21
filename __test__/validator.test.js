'use strict'

const validator = require('../src/middleware/validator');
const supertest = require('supertest');

describe('---------- VALIDATOR TEST ----------' , () => {
  let req = {query:{}}; //query is an object inside of request
  let res = {};
  let next = jest.fn(); // spy on next method

  it('a name was entered', () => {
    validator({query:{name:"Lydia"}}, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  it('a name was not entered', () => {
    validator(req, res, next);
    // toHaveBeenCalled() is not enough, we need to make sure it was called with no args
    expect(next).toHaveBeenCalledWith('Please enter your name');
  });
});
