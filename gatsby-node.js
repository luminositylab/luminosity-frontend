/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const projects = require('./src/content/projects');

exports.createPages = async ({ actions: { createPage } }) => {
  // Create a page for each project.
  projects.forEach(project => {
    createPage({
      path: `/projects/${project.path}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { project }
    });
  });
};
