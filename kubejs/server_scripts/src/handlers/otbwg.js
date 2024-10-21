/**
 * @file Server handler for Oh The Biome's We've Gone
 * @version 1.20.1-M
 */

// requires: biomeswevegone
// ignored: false

let otbwg_stripped_logs = [
  'biomeswevegone:stripped_aspen_log',
  'biomeswevegone:stripped_baobab_log',
  'biomeswevegone:stripped_blue_enchanted_log',
  'biomeswevegone:stripped_cika_log',
  'biomeswevegone:stripped_cypress_log',
  'biomeswevegone:stripped_ebony_log',
  'biomeswevegone:stripped_fir_log',
  'biomeswevegone:stripped_florus_stem',
  'biomeswevegone:stripped_green_enchanted_log',
  'biomeswevegone:stripped_holly_log',
  'biomeswevegone:stripped_ironwood_log',
  'biomeswevegone:stripped_jacaranda_log',
  'biomeswevegone:stripped_mahogany_log',
  'biomeswevegone:stripped_maple_log',
  'biomeswevegone:stripped_palm_log',
  'biomeswevegone:stripped_pine_log',
  'biomeswevegone:stripped_rainbow_eucalyptus_log',
  'biomeswevegone:stripped_redwood_log',
  'biomeswevegone:stripped_sakura_log',
  'biomeswevegone:stripped_skyris_log',
  'biomeswevegone:stripped_white_mangrove_log',
  'biomeswevegone:stripped_willow_log',
  'biomeswevegone:stripped_witch_hazel_log',
  'biomeswevegone:stripped_zelkova_log',
  'biomeswevegone:stripped_palo_verde_log'
]

let otbwg_stripped_wood = [
  'biomeswevegone:stripped_aspen_wood',
  'biomeswevegone:stripped_baobab_wood',
  'biomeswevegone:stripped_blue_enchanted_wood',
  'biomeswevegone:stripped_cika_wood',
  'biomeswevegone:stripped_cypress_wood',
  'biomeswevegone:stripped_ebony_wood',
  'biomeswevegone:stripped_fir_wood',
  'biomeswevegone:stripped_florus_wood',
  'biomeswevegone:stripped_green_enchanted_wood',
  'biomeswevegone:stripped_holly_wood',
  'biomeswevegone:stripped_ironwood_wood',
  'biomeswevegone:stripped_jacaranda_wood',
  'biomeswevegone:stripped_mahogany_wood',
  'biomeswevegone:stripped_maple_wood',
  'biomeswevegone:stripped_palm_wood',
  'biomeswevegone:stripped_pine_wood',
  'biomeswevegone:stripped_rainbow_eucalyptus_wood',
  'biomeswevegone:stripped_redwood_wood',
  'biomeswevegone:stripped_sakura_wood',
  'biomeswevegone:stripped_skyris_wood',
  'biomeswevegone:stripped_white_mangrove_wood',
  'biomeswevegone:stripped_willow_wood',
  'biomeswevegone:stripped_witch_hazel_wood',
  'biomeswevegone:stripped_zelkova_wood',
  'biomeswevegone:stripped_palo_verde_wood'
]

let otbwg_planks_obj = {
  aspen_planks: 'biomeswevegone:aspen_planks',
  baobab_planks: 'biomeswevegone:baobab_planks',
  blue_enchanted_planks: 'biomeswevegone:blue_enchanted_planks',
  cika_planks: 'biomeswevegone:cika_planks',
  cypress_planks: 'biomeswevegone:cypress_planks',
  ebony_planks: 'biomeswevegone:ebony_planks',
  fir_planks: 'biomeswevegone:fir_planks',
  florus_planks: 'biomeswevegone:florus_planks',
  green_enchanted_planks: 'biomeswevegone:green_enchanted_planks',
  holly_planks: 'biomeswevegone:holly_planks',
  ironwood_planks: 'biomeswevegone:ironwood_planks',
  jacaranda_planks: 'biomeswevegone:jacaranda_planks',
  mahogany_planks: 'biomeswevegone:mahogany_planks',
  maple_planks: 'biomeswevegone:maple_planks',
  palm_planks: 'biomeswevegone:palm_planks',
  pine_planks: 'biomeswevegone:pine_planks',
  rainbow_eucalyptus_planks: 'biomeswevegone:rainbow_eucalyptus_planks',
  redwood_planks: 'biomeswevegone:redwood_planks',
  sakura_planks: 'biomeswevegone:sakura_planks',
  skyris_planks: 'biomeswevegone:skyris_planks',
  white_mangrove_planks: 'biomeswevegone:white_mangrove_planks',
  willow_planks: 'biomeswevegone:willow_planks',
  witch_hazel_planks: 'biomeswevegone:witch_hazel_planks',
  zelkova_planks: 'biomeswevegone:zelkova_planks',
}

ServerEvents.tags('item', event => {
  if (Platform.isLoaded('create')) {
    for (let i = 0; i < otbwg_stripped_logs.length; i++) {
      let element = otbwg_stripped_logs[i];
      event.add('forge:stripped_logs', element)
    }
    for (let I = 0; I < otbwg_stripped_wood.length; I++) {
      let element = otbwg_stripped_wood[I];
      event.add('forge:stripped_wood', element)
    }
  }
})

ServerEvents.tags('block', event => {
  if (Platform.isLoaded('create')) {
    for (let i = 0; i < otbwg_stripped_logs.length; i++) {
      let element = otbwg_stripped_logs[i];
      event.add('forge:stripped_logs', element)
    }
    for (let I = 0; I < otbwg_stripped_wood.length; I++) {
      let element = otbwg_stripped_wood[I];
      event.add('forge:stripped_wood', element)
    }
  }
})

ServerEvents.recipes(event => {
  if (Platform.isLoaded('quark')) {
    for (let [id, planks] of Object.entries(otbwg_planks_obj)) {
      event.recipes.minecraft.crafting_shaped('minecraft:chest', [
        'PPP',
        'P P',
        'PPP'
      ], {
        P: planks
      }).id('kubejs:otbwg/quark_compat/' + id + 'chest')
    }
  }
})