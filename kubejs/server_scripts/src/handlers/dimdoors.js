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
  if (!Platform.isLoaded('roughlyenoughitems')) {
    event.shaped('dimdoors:enduring_fibers', [
      'XX',
      'XX'
    ], {
      X: 'dimdoors:infrangible_fiber'
    }).id('dimdoors:tesselating/enduring_fibers')
    event.shaped('dimdoors:black_fabric', [
      'XX',
      'XO'
    ], {
      X: 'dimdoors:world_thread',
      O: 'dimdoors:stable_fabric'
    }).id('dimdoors:tesselating/fabric_of_reality')
    event.shaped('dimdoors:fuzzy_fireball', [
      'XOX'
    ], {
      X: 'dimdoors:liminal_lint',
      O: 'minecraft:fire_charge'
    }).id('dimdoors:tesselating/fuzzy_fireball')
    // GARMENT OF REALITY ARMOR SET
    event.shaped('dimdoors:garment_of_reality_boots', [
      'X X',
      'XOX'
    ], {
      X: 'dimdoors:stable_fabric',
      O: 'dimdoors:infrangible_fiber'
    }).id('dimdoors:tesselating/garment_of_reality_boots')
    event.shaped('dimdoors:garment_of_reality_chestplate', [
      'XOX',
      'XXX',
      'XXX'
    ], {
      X: 'dimdoors:stable_fabric',
      O: 'dimdoors:infrangible_fiber'
    }).id('dimdoors:tesselating/garment_of_reality_chestplate')
    event.shaped('dimdoors:garment_of_reality_helmet', [
      'XXX',
      'XOX'
    ], {
      X: 'dimdoors:stable_fabric',
      O: 'dimdoors:infrangible_fiber'
    }).id('dimdoors:tesselating/garment_of_reality_helmet')
    event.shaped('dimdoors:garment_of_reality_leggings', [
      'XXX',
      'XOX',
      'X X'
    ], {
      X: 'dimdoors:stable_fabric',
      O: 'dimdoors:infrangible_fiber'
    }).id('dimdoors:tesselating/garment_of_reality_leggings')
    event.shaped('dimdoors:liminal_lint', [
      'XX',
      'XX'
    ], {
      X: 'dimdoors:frayed_filament'
    }).id('dimdoors:tesselating/liminal_lint')
    event.shaped('dimdoors:reality_sponge', [
      'XOX',
      'OXO',
      'XOX'
    ], {
      X: 'dimdoors:stable_fabric',
      O: 'dimdoors:infrangible_fiber'
    }).id('dimdoors:tesselating/reality_sponge')
    event.shapeless('dimdoors:rift_blade', [
      'minecraft:iron_sword',
      '2x minecraft:ender_pearl'
    ]).id('dimdoors:tesselating/rift_blade')
    event.shaped('dimdoors:rift_pearl', [
      'XO'
    ], {
      X: 'dimdoors:stable_fabric',
      O: 'minecraft:ender_pearl'
    }).id('dimdoors:tesselating/rift_pearl')
    event.shaped('dimdoors:stable_fabric', [
      'XX',
      'XX'
    ], {
      X: 'dimdoors:stable_fabric'
    }).id('dimdoors:tesselating/stable_fabric')
    // WORLD THREAD ARMOR SET
    event.shaped('dimdoors:world_thread_boots', [
      'X X',
      'X X'
    ], {
      X: 'dimdoors:world_thread'
    }).id('dimdoors:tesselating/world_thread_boots')
    event.shaped('dimdoors:world_thread_chestplate', [
      'X X',
      'XXX',
      'XXX'
    ], {
      X: 'dimdoors:world_thread'
    }).id('dimdoors:tesselating/world_thread_chestplate')
    event.shaped('dimdoors:world_thread_helmet', [
      'XXX',
      'X X'
    ], {
      X: 'dimdoors:world_thread'
    }).id('dimdoors:tesselating/world_thread_helmet')
    event.shaped('dimdoors:world_thread_leggings', [
      'XXX',
      'X X',
      'X X'
    ], {
      X: 'dimdoors:world_thread'
    }).id('dimdoors:tesselating/world_thread_leggings')
  }
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