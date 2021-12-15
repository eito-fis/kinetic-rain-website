const pathPrefix = process.env.PATH_PREFIX || '/';

module.exports = value => {
  let newValue = value.replace(
    /\/images/g,
    pathPrefix + 'images',
  );
  return newValue;
};
