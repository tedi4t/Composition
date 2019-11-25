'use strict';

const compose = (...fns) => {
  fns.reverse();
  const f = x => {
    try {
      return fns.reduce((acc, val) => val(acc), x);
    } catch (e) {
      f.emit('error', e);
    }
  };
  f.subs = {};
  f.on = (e, fn, s = f.subs[e]) => (s ? s.push(fn) : f.subs[e] = [fn]);
  f.emit = (even, data, s = f.subs[even]) => s.forEach(g => g(data));
  return f;
};

module.exports = { compose };
