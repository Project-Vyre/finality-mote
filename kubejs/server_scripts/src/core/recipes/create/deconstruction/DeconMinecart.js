// requires: kubejs_create

/**
 * @file Uncrafting different minecarts with Create, probably cursed.
 */

ServerEvents.recipes(event => {
  event.recipes.create.deploying([
    'minecraft:chest',
    'minecraft:minecart'
  ], [
    'minecraft:chest_minecart',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('kubejs:deploying/chest_minecart_deconstruction')
  event.recipes.create.deploying([
    'minecraft:furnace',
    'minecraft:minecart'
  ], [
    'minecraft:furnace_minecart',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('kubejs:deploying/furnace_minecart_deconstruction')
  event.recipes.create.deploying([
    'minecraft:tnt',
    'minecraft:minecart'
  ], [
    'minecraft:tnt_minecart',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('kubejs:deploying/tnt_minecart_deconstruction')
  event.recipes.create.deploying([
    'minecraft:hopper',
    'minecraft:minecart'
  ], [
    'minecraft:hopper_minecart',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('kubejs:deploying/hopper_minecart_deconstruction')
  // EXTERNAL
  if (Platform.isLoaded('supplementaries')) {
    event.recipes.create.deploying([
      'minecraft:dispenser',
      'minecraft:minecart'
    ], [
      'supplementaries:dispenser_minecart',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('kubejs:deploying/dispenser_minecart_deconstruction')
  }
  if (Platform.isLoaded('etched')) {
    event.recipes.create.deploying([
      'minecraft:jukebox',
      'minecraft:minecart'
    ], [
      'etched:jukebox_minecart',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('kubejs:deploying/jukebox_minecart_deconstruction')
  }
})