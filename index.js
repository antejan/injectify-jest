const injectify = require('injectify/lib/injectify');

module.exports = {
  process(src, filename, config, options) {
    return injectify.compile(src);
  }
};
