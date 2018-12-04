/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const projects = require('./src/content/projects');

// const getPokemonData = names =>
//   Promise.all(
//     names.map(async name => {
//       const { data: pokemon } = await get(`/pokemon/${name}`);
//       const abilities = await Promise.all(
//         pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
//           const { data: ability } = await get(`/ability/${abilityName}`);

//           return ability;
//         })
//       );

//       return { ...pokemon, abilities };
//     })
//   );

exports.createPages = async ({ actions: { createPage } }) => {
  // Create a page for each Pokémon.
  projects.forEach(project => {
    createPage({
      path: `/projects/${project.path}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { project }
    });

    // // Create a page for each ability of the current Pokémon.
    // pokemon.abilities.forEach(ability => {
    //   createPage({
    //     path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
    //     component: require.resolve('./src/templates/ability.js'),
    //     context: { pokemon, ability }
    //   });
    // });
  });
};
