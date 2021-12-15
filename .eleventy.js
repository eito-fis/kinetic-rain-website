const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const fixLinksFilter = require('./src/filters/fix-links.js');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';
const pathPrefix = process.env.PATH_PREFIX || '/';

module.exports = config => {
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // create a new markdown-it instance with the plugin
  const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);
  config.setLibrary("md", markdownLib);


  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter('linkFilter', fixLinksFilter);

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
    pathPrefix: pathPrefix,
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
