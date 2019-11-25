'use strict';

const pipe = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function'))
    throw new Error('Not all arguments are functions');
  return x => fns.reduce((value, fn) => fn(value), x);
};

module.exports = { pipe };
