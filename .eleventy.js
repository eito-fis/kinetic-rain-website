// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  config.addCollection('sprints', collection => {
    return collection.getFilteredByGlob('./src/sprints/*.md').sort((a, b) => {
      return Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1;
    });
  });
  config.addCollection('systems', collection => {
    return collection.getFilteredByGlob('./src/systems/*.md').sort((a, b) => {
      return Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1;
    });
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
