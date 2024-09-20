/**
 * @file Server handler for Dimensional Doors.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: dimdoors
// requires: kubejs_create

let dim_dupe = [
  'world_thread',
  'solid_static'
]

ServerEvents.recipes(event => {
  event.remove([
    { id: 'dimdoors:tesselating/fabric_of_finality' }
  ])
  for (let i = 0; i < dim_dupe.length; i++) {
    let element = dim_dupe[i];
    event.recipes.create.deploying('2x dimdoors:' + element, [
      'dimdoors:' + element,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_duplication')
  }
  event.recipes.create.mixing('dimdoors:fabric_of_finality', [
    '2x dimdoors:enduring_fibers',
    'kubejs:high_entropy_alloy_block',
    Fluid.of('kubejs:condensed_universal_order')
  ]).id('kubejs:dimdoors/fabric_of_finality')
})