/**
 * @file Server handler for Dimensional Doors.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: dimdoors
// requires: kubejs_create
// requires: lootjs

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
  /**
   * AMALGAM
   */
  event.recipes.create.compacting('dimdoors:amalgam_ore', [
    'minecraft:clay',
    '4x dimdoors:world_thread'
  ]).id('kubejs:dimdoors/amalgam_ore')
  event.shaped('dimdoors:amalgam_block', [
    'AA',
    'AA'
  ], {
    A: 'dimdoors:amalgam_lump'
  }).id('kubejs:dimdoors/amalgam_block')
  event.shaped('3x dimdoors:amalgam_door', [
    'AA',
    'AA',
    'AA'
  ], {
    A: 'dimdoors:amalgam_block'
  }).id('kubejs:dimdoors/amalgam_door')
  event.shaped('2x dimdoors:amalgam_trapdoor', [
    'AAA',
    'AAA'
  ], {
    A: 'dimdoors:amalgam_block'
  }).id('kubejs:dimdoors/amalgam_trapdoor')
  event.shaped('6x dimdoors:amalgam_slab', [
    'AAA'
  ], {
    A: 'dimdoors:amalgam_block'
  }).id('kubejs:dimdoors/amalgam_slab')
  event.shaped('4x dimdoors:amalgam_stairs', [
    'A  ',
    'AA ',
    'AAA'
  ], {
    A: 'dimdoors:amalgam_block'
  }).id('kubejs:dimdoors/amalgam_stairs')
  // AMALGAM STONECUTTER RECIPES
  event.stonecutting(
    'dimdoors:amalgam_stairs',
    'dimdoors:amalgam_block'
  ).id('kubejs:dimdoors/amalgam_stairs_from_stonecutting')
  event.stonecutting(
    '2x dimdoors:amalgam_slab',
    'dimdoors:amalgam_block'
  ).id('kubejs:dimdoors/amalgam_slab_from_stonecutting')
  /**
   * CLOD
   */
  event.recipes.create.mixing('dimdoors:clod_ore', [
    '#forge:nuggets/iron',
    '4x dimdoors:world_thread'
  ]).id('kubejs:dimdoors/clod_ore')
  event.shaped('dimdoors:clod_block', [
    'CC',
    'CC'
  ], {
    C: 'dimdoors:clod'
  }).id('kubejs:dimdoors/clod_block')
})

LootJS.modifiers(event => {
  event.addBlockLootModifier('dimdoors:amalgam_ore')
    .matchMainHand(
      ItemFilter.PICKAXE.and(
        ItemFilter.hasEnchantment('minecraft:silk_touch').negate()
      )
    )
    .randomChance(0.2).addLoot('dimdoors:amalgam_lump')
  event.addBlockLootModifier('dimdoors:clod_ore')
    .matchMainHand(
      ItemFilter.PICKAXE.and(
        ItemFilter.hasEnchantment('minecraft:silk_touch').negate()
      )
    )
    .randomChance(0.2).addLoot('dimdoors:clod')
})