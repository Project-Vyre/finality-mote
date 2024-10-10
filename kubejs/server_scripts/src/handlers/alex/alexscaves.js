/**
 * @file Server handler for Alex's Caves
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// requires: alexscaves
// requires: kubejs_create

let alexscaves_sherds = [
  'dinosaur',
  'footprint',
  'guardian',
  'hero'
]

ServerEvents.recipes(event => {
  event.remove({ id: 'alexscaves:polarity_armor_trim_smithing_template' })
  event.recipes.create.deploying('2x alexscaves:polarity_armor_trim_smithing_template', [
    'alexscaves:polarity_armor_trim_smithing_template',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/polarity_armor_trim_smithing_template')
  for (let i = 0; i < alexscaves_sherds.length; i++) {
    let element = alexscaves_sherds[i];
    event.recipes.create.deploying([
      '2x alexscaves:' + element + '_pottery_sherd'
    ], [
      'alexscaves:' + element + '_pottery_sherd',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + element + '_pottery_sherd_duplication')
  }
  event.recipes.create.deploying('2x alexscaves:spelunkery_table', [
    'alexscaves:spelunkery_table',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/spelunkery_table_duplication')
  event.recipes.create.deploying('2x alexscaves:diving_helmet', [
    'alexscaves:diving_helmet',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/diving_helmet_duplication')
  event.recipes.create.deploying('2x alexscaves:diving_chestplate', [
    'alexscaves:diving_chestplate',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/diving_chestplate_duplication')
  event.recipes.create.deploying('2x alexscaves:diving_leggings', [
    'alexscaves:diving_leggings',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/diving_leggings_duplication')
  event.recipes.create.deploying('2x alexscaves:diving_boots', [
    'alexscaves:diving_boots',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/diving_boots_duplication')
})