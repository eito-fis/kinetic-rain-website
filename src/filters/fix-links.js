const pathPrefix = process.env.PATH_PREFIX || '/';

module.exports = value => {
  let newValue = value.replace(
    /="\/(images|videos|what)/g,
    '="' + pathPrefix + '$1',
  );
  return newValue;
};
