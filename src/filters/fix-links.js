const pathPrefix = process.env.PATH_PREFIX || '/';

module.exports = value => {
  let newValue = value.replace(
    /=\/images/g,
    pathPrefix + 'images',
  );
  newValue = newValue.replace(
    /=\/videos/g,
    '=' + pathPrefix + 'videos',
  );
  newValue = newValue.replace(
    /=\/what/g,
    '=' + pathPrefix + 'what',
  );
  return newValue;
};
