'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "newsletters" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);
  console.log('resultsss', result);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/newsletters' : `/newsletters/page/${i}`,
      component: path.resolve('./src/templates/newsletters-list-template.js'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/newsletters' : `/newsletters/page/${i - 1}`,
        nextPagePath: `/newsletters/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
