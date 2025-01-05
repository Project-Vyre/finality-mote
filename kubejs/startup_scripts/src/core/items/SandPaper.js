/**
 * @file Sandpaper registry.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: kubejs_create

StartupEvents.registry('item', event => {
  event.create('kubejs:final_sand_paper', 'create:sandpaper')
    .texture('kubejs:item/final_sand_paper')
    .rarity('rare')
    .maxDamage(16777216)
    .tag('create:sandpaper')
})