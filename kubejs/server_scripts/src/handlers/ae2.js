/**
 * @file Server handler for AE2.
 * @version 1201.M
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: ae2
// requires: dimdoors
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.minecraft.crafting_shapeless('ae2:fluix_upgrade_smithing_template', [
    'create:iron_sheet',
    'ae2:fluix_crystal'
  ]).id('ae2:tools/fluix_upgrade_smithing_template')
  event.recipes.minecraft.crafting_shaped('ae2:quartz_fiber', [
    'CGC',
    'GCG',
    'CGC'
  ], {
    C: 'ae2:certus_quartz_dust',
    G: '#forge:glass_panes/colorless'
  }).id('ae2:network/parts/quartz_fiber_part')
  event.recipes.create.deploying('ae2:fluix_upgrade_smithing_template', [
    'create:iron_sheet',
    'ae2:fluix_crystal'
  ]).id('kubejs:ae2/deploying/tools/fluix_upgrade_smithing_template')
  event.recipes.create.filling('ae2:flawless_budding_quartz', [
    'ae2:damaged_budding_quartz',
    Fluid.of('kubejs:condensed_universal_order', 750)
  ]).id('kubejs:filling/ae2/damaged_to_flawless_budding_quartz')
  event.recipes.create.filling('ae2:flawless_budding_quartz', [
    'ae2:chipped_budding_quartz',
    Fluid.of('kubejs:condensed_universal_order', 500)
  ]).id('kubejs:filling/ae2/chipped_to_flawless_budding_quartz')
  event.recipes.create.filling('ae2:flawless_budding_quartz', [
    'ae2:flawed_budding_quartz',
    Fluid.of('kubejs:condensed_universal_order', 250)
  ]).id('kubejs:filling/ae2/flawed_to_flawless_budding_quartz')
  event.forEachRecipe({ mod: 'ae2' }, recipe => {
    recipe.replaceInput('#forge:ingots/iron', 'kubejs:iridium_ingot')
    recipe.replaceInput('minecraft:sticky_piston', 'create:sticky_mechanical_piston')
    recipe.replaceInput('minecraft:piston', 'create:mechanical_piston')
  })
  event.remove([
    { id: 'ae2:materials/annihilationcore' },
    { id: 'ae2:materials/cardspeed' },
    { id: 'ae2:materials/cardredstone' },
    { id: 'ae2:materials/cardcapacity' },
    { id: 'ae2:materials/cardvoid' },
    { id: 'ae2:materials/cardcrafting' },
    { id: 'ae2:materials/cardfuzzy' },
    { id: 'ae2:materials/cardspeed' },
    { id: 'ae2:materials/cardinverter' },
    { id: 'ae2:materials/carddistribution' },
    { id: 'ae2:materials/cardenergy' },
    { id: 'ae2:network/parts/terminals' },
    { id: 'ae2:network/parts/terminals_crafting' },
    { id: 'ae2:tools/matter_cannon' },
    { id: 'ae2:network/blocks/crystal_processing_growth_accelerator' },
    { id: 'ae2:network/cells/item_storage_components_cell_1k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_4k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_16k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_64k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_256k_part' },
    { id: 'ae2:inscriber/certus_quartz_dust' },
    { id: 'ae2:inscriber/ender_dust' },
    { id: 'ae2:inscriber/sky_stone_dust' },
    { id: 'ae2:inscriber/fluix_dust' },
    { id: 'ae2:inscriber/engineering_processor_press' },
    { id: 'ae2:inscriber/calculation_processor_press' },
    { id: 'ae2:inscriber/logic_processor_press' },
    { id: 'ae2:inscriber/silicon_press' },
    { id: 'ae2:inscriber/engineering_processor_print' },
    { id: 'ae2:inscriber/calculation_processor_print' },
    { id: 'ae2:inscriber/logic_processor_print' },
    { id: 'ae2:inscriber/silicon_print' },
    { id: 'ae2:network/blocks/quantum_link' }
  ])
  // presses
  let presses = [
    'engineering_processor',
    'calculation_processor',
    'logic_processor',
    'silicon'
  ]
  for (let i = 0; i < presses.length; i++) {
    let element = presses[i];
    event.recipes.create.deploying('2x ae2:' + element + '_press', [
      'ae2:' + element + '_press',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/ae2/' + element + '_duplication')
  }
  event.recipes.create.deploying('ae2:printed_engineering_processor', [
    'minecraft:diamond',
    'ae2:engineering_processor_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/engineering_processor_print')
  event.recipes.create.deploying('ae2:printed_calculation_processor', [
    'ae2:certus_quartz_crystal',
    'ae2:calculation_processor_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/calculation_processor_print')
  event.recipes.create.deploying('ae2:printed_logic_processor', [
    'create:golden_sheet',
    'ae2:logic_processor_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/logic_processor_print')
  event.recipes.create.deploying('ae2:printed_silicon', [
    'ae2:silicon',
    'ae2:silicon_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/silicon_print')
  // cables
  event.shapeless('ae2:terminal', [
    '#ae2:illuminated_panel',
    'ae2:formation_core',
    'ae2:annihilation_core',
    'ae2:logic_processor'
  ]).id('kubejs:ae2/network/parts/terminals')
  event.shapeless('ae2:crafting_terminal', [
    'ae2:terminal',
    'create:mechanical_crafter',
    'ae2:calculation_processor'
  ]).id('kubejs:ae2/network/parts/crafting_terminal')
  event.recipes.minecraft.crafting_shaped('2x ae2:blank_pattern', [
    'GSG',
    'SCS',
    'III'
  ], {
    G: 'ae2:quartz_glass',
    S: 'kubejs:glowstone_singularity',
    C: '#ae2:all_certus_quartz',
    I: 'kubejs:iridium_sheet'
  }).id('ae2:network/crafting/patterns_blank')
  // ME Storage Component
  event.recipes.create.mechanical_crafting('ae2:cell_component_1k', [
    'RCR',
    'CLC',
    'RCR'
  ], {
    R: 'minecraft:redstone',
    C: '#ae2:all_certus_quartz',
    L: 'ae2:logic_processor'
  }).id('kubejs:ae2/network/cells/item_storage_components_1k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_4k', [
    'R C R',  //     '  C  ',
    ' EQE ',  //     ' RER ',
    ' QQQ ',  //     ' EQE ',
    ' EQE ',  //     ' RER ',
    'R   R',  //     '     '
  ], {
    R: 'kubejs:redstone_singularity',
    E: 'ae2:cell_component_1k',
    Q: 'ae2:quartz_glass',
    C: 'ae2:calculation_processor'
  }).id('kubejs:ae2/network/cells/item_storage_components_4k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_16k', [
    'G C G',
    ' EQE ',
    ' QQQ ',
    ' EQE ',
    'G   G',
  ], {
    G: 'kubejs:glowstone_singularity',
    E: 'ae2:cell_component_4k',
    Q: 'ae2:quartz_glass',
    C: 'ae2:calculation_processor'
  }).id('kubejs:ae2/network/cells/item_storage_components_cell_16k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_64k', [
    'G C G',
    ' EQE ',
    ' QQQ ',
    ' EQE ',
    'G   G',
  ], {
    G: 'kubejs:glowstone_singularity',
    E: 'ae2:cell_component_16k',
    Q: 'ae2:quartz_glass',
    C: 'ae2:calculation_processor'
  }).id('kubejs:ae2/network/cells/item_storage_components_cell_64k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_256k', [
    'K C K',
    ' EQE ',
    ' QQQ ',
    ' EQE ',
    'K   K',
  ], {
    K: 'kubejs:sky_stone_singularity',
    E: 'ae2:cell_component_64k',
    Q: 'ae2:quartz_glass',
    C: 'ae2:calculation_processor'
  }).id('kubejs:ae2/network/cells/item_storage_components_cell_256k_part')
  // spatial components
  event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_2', [
    'GFG',
    'FPF',
    'GFG'
  ], {
    G: 'kubejs:glowstone_singularity',
    F: 'ae2:fluix_pearl',
    P: 'ae2:engineering_processor'
  }).id('ae2:network/cells/spatial_components')
  event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_16', [
    'GSG',
    'SPS',
    'GSG'
  ], {
    G: 'kubejs:glowstone_singularity',
    S: 'ae2:spatial_cell_component_2',
    P: 'ae2:engineering_processor'
  }).id('ae2:network/cells/spatial_components_0')
  event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_128', [
    'GSG',
    'SPS',
    'GSG'
  ], {
    G: 'kubejs:glowstone_singularity',
    S: 'ae2:spatial_cell_component_16',
    P: 'ae2:engineering_processor'
  }).id('ae2:network/cells/spatial_components_1')
  event.recipes.minecraft.crafting_shaped('ae2:crank', [
    'H',
    'C'
  ], {
    H: 'create:hand_crank',
    C: 'minecraft:copper_ingot'
  }).id('ae2:network/blocks/crank')
  event.recipes.create.mechanical_crafting('ae2:matter_cannon', [
    'ISIIIIF',
    'IEI    ',
    ' P     '
  ], {
    I: 'kubejs:iridium_ingot',
    S: 'ae2:cell_component_4k',
    F: 'ae2:formation_core',
    E: 'ae2:energy_cell',
    P: 'kubejs:iridium_sheet'
  }).id('kubejs:ae2/tools/matter_cannon')
  event.recipes.create.mechanical_crafting('ae2:annihilation_core', [
    'QFL'
  ], {
    Q: 'kubejs:electron_tube_singularity',
    F: 'ae2:fluix_dust',
    L: 'ae2:logic_processor'
  }).id('kubejs:ae2/mechanical_crafting/annhilationcore')
  // basic cards
  event.shapeless('ae2:redstone_card', [
    'ae2:basic_card',
    'create:electron_tube',
    'create:powered_latch',
    'create:powered_toggle_latch'
  ]).id('kubejs:ae2/materials/cardredstone')
  event.shapeless('ae2:capacity_card', [
    'ae2:basic_card',
    '#forge:gems/certus_quartz',
    '#forge:gems/certus_quartz'
  ]).id('kubejs:ae2/materials/cardcapacity')
  event.shapeless('ae2:void_card', [
    'ae2:basic_card',
    'ae2:calculation_processor',
    'kubejs:awakened_singularity_core'
  ]).id('kubejs:ae2/materials/cardvoid')
  event.shapeless('ae2:crafting_card', [
    'ae2:basic_card',
    'minecraft:crafting_table',
    'minecraft:crafting_table',
    'minecraft:crafting_table',
    'minecraft:crafting_table'
  ]).id('kubejs:ae2/materials/cardcrafting')
  // advanced cards
  event.shapeless('ae2:fuzzy_card', [
    'ae2:advanced_card',
    'create:filter',
    'create:attribute_filter'
  ]).id('kubejs:ae2/materials/cardfuzzy')
  event.shapeless('ae2:speed_card', [
    'ae2:advanced_card',
    'ae2:fluix_crystal',
    'minecraft:clock',
    'minecraft:clock',
    'minecraft:clock',
  ]).id('kubejs:ae2/materials/cardspeed')
  event.shapeless('ae2:inverter_card', [
    'ae2:advanced_card',
    'create:electron_tube',
    'create:powered_latch',
    'create:powered_toggle_latch'
  ]).id('kubejs:ae2/materials/cardinverter')
  event.shapeless('ae2:equal_distribution_card', [
    'ae2:advanced_card',
    'ae2:calculation_processor',
    'create:brass_tunnel',
    'create:brass_tunnel',
    'create:brass_tunnel',
    'create:brass_tunnel'
  ]).id('kubejs:ae2/materials/carddistribution')
  event.shapeless('ae2:energy_card', [
    'ae2:advanced_card',
    'ae2:dense_energy_cell',
    'minecraft:redstone_block',
    'minecraft:redstone_block',
    'minecraft:redstone_block',
    'minecraft:redstone_block'
  ]).id('kubejs:ae2/materials/cardenergy')
  // processing
  event.recipes.create.mechanical_crafting('ae2:growth_accelerator', [
    'IICII',
    'QFFFQ',
    'QFTFQ',
    'QFFFQ',
    'IICII'
  ], {
    I: 'kubejs:iridium_ingot',
    C: 'ae2:fluix_glass_cable',
    F: 'ae2:fluix_block',
    Q: 'ae2:quartz_glass',
    T: 'create:tree_fertilizer'
  }).id('kubejs:ae2/network/blocks/crystal_processing_growth_accelerator')
  event.recipes.create.mechanical_crafting('kubejs:sky_stone_singularity', [
    ' RRR ',
    'RRRRR',
    'RRCRR',
    'RRRRR',
    ' RRR '
  ], {
    R: 'ae2:sky_dust',
    C: 'kubejs:awakened_singularity_core'
  }).id('kubejs:ae2/mechanical_crafting/sky_stone_singularity')
  event.recipes.create.mechanical_crafting('ae2:quantum_link', [
    ' QQQ ',
    'QFRFQ',
    'QRARQ',
    'QFRFQ',
    ' QQQ '
  ], {
    Q: 'ae2:quartz_glass',
    F: 'ae2:fluix_pearl',
    R: 'dimdoors:rift_pearl',
    A: 'dimdoors:fabric_of_finality'
  })
})