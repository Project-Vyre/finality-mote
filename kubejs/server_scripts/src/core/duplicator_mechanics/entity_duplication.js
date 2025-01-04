/**
 * @file Entity duplication with the Duplicator item.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// ignored: false

ItemEvents.entityInteracted('kubejs:duplicator', event => {
  if (event.target.type == null) return
  switch (event.target.type) {
    case 'minecraft:allay':
      event.player.give('minecraft:allay_spawn_egg')
      break;
    case 'minecraft:axolotl':
      event.player.give('minecraft:axolotl_spawn_egg')
      break;
    case 'minecraft:bat':
      event.player.give('minecraft:bat_spawn_egg')
      break;
    case 'minecraft:bee':
      event.player.give('minecraft:bee_spawn_egg')
      break;
    case 'minecraft:blaze':
      event.player.give('minecraft:blaze_spawn_egg')
      break;
    case 'minecraft:camel':
      event.player.give('minecraft:camel_spawn_egg')
      break;
    case 'minecraft:cat':
      event.player.give('minecraft:cat_spawn_egg')
      break;
    case 'minecraft:cave_spider':
      event.player.give('minecraft:cave_spider_spawn_egg')
      break;
    case 'minecraft:chicken':
      event.player.give('minecraft:chicken_spawn_egg')
      break;
    case 'minecraft:cod':
      event.player.give('minecraft:cod_spawn_egg')
      break;
    case 'minecraft:cow':
      event.player.give('minecraft:cow_spawn_egg')
      break;
    case 'minecraft:creeper':
      event.player.give('minecraft:creeper_spawn_egg')
      break;
    case 'minecraft:dolphin':
      event.player.give('minecraft:dolphin_spawn_egg')
      break;
    case 'minecraft:donkey':
      event.player.give('minecraft:donkey_spawn_egg')
      break;
    case 'minecraft:drowned':
      event.player.give('minecraft:drowned_spawn_egg')
      break;
    case 'minecraft:elder_guardian':
      event.player.give('minecraft:elder_guardian_spawn_egg')
      break;
    case 'minecraft:enderman':
      event.player.give('minecraft:enderman_spawn_egg')
      break;
    case 'minecraft:endermite':
      event.player.give('minecraft:endermite_spawn_egg')
      break;
    case 'minecraft:evoker':
      event.player.give('minecraft:evoker_spawn_egg')
      break;
    case 'minecraft:fox':
      event.player.give('minecraft:fox_spawn_egg')
      break;
    case 'minecraft:frog':
      event.player.give('minecraft:frog_spawn_egg')
      break;
    case 'minecraft:ghast':
      event.player.give('minecraft:ghast_spawn_egg')
      break;
    case 'minecraft:glow_squid':
      event.player.give('minecraft:glow_squid_spawn_egg')
      break;
    case 'minecraft:goat':
      event.player.give('minecraft:goat_spawn_egg')
      break;
    case 'minecraft:guardian':
      event.player.give('minecraft:guardian_spawn_egg')
      break;
    case 'minecraft:hoglin':
      event.player.give('minecraft:hoglin_spawn_egg')
      break;
    case 'minecraft:horse':
      event.player.give('minecraft:horse_spawn_egg')
      break;
    case 'minecraft:husk':
      event.player.give('minecraft:husk_spawn_egg')
      break;
    case 'minecraft:iron_golem':
      event.player.give('minecraft:iron_golem_spawn_egg')
      break;
    case 'minecraft:llama':
      event.player.give('minecraft:llama_spawn_egg')
      break;
    case 'minecraft:magma_cube':
      event.player.give('minecraft:magma_cube_spawn_egg')
      break;
    case 'minecraft:mooshroom':
      event.player.give('minecraft:mooshroom_spawn_egg')
      break;
    case 'minecraft:mule':
      event.player.give('minecraft:mule_spawn_egg')
      break;
    case 'minecraft:ocelot':
      event.player.give('minecraft:ocelot_spawn_egg')
      break;
    case 'minecraft:panda':
      event.player.give('minecraft:panda_spawn_egg')
      break;
    case 'minecraft:parrot':
      event.player.give('minecraft:parrot_spawn_egg')
      break;
    case 'minecraft:phantom':
      event.player.give('minecraft:phantom_spawn_egg')
      break;
    case 'minecraft:pig':
      event.player.give('minecraft:pig_spawn_egg')
      break;
    case 'minecraft:piglin':
      event.player.give('minecraft:piglin_spawn_egg')
      break;
    case 'minecraft:piglin_brute':
      event.player.give('minecraft:piglin_brute_spawn_egg')
      break;
    case 'minecraft:pillager':
      event.player.give('minecraft:pllager_spawn_egg')
      break;
    case 'minecraft:polar_bear':
      event.player.give('minecraft:polar_bear_spawn_egg')
      break;
    case 'minecraft:pufferfish':
      event.player.give('minecraft:pufferfish_spawn_egg')
      break;
    case 'minecraft:rabbit':
      event.player.give('minecraft:rabbit_spawn_egg')
      break;
    case 'minecraft:ravager':
      event.player.give('minecraft:ravager_spawn_egg')
      break;
    case 'minecraft:salmon':
      event.player.give('minecraft:salmon_spawn_egg')
      break;
    case 'minecraft:sheep':
      event.player.give('minecraft:sheep_spawn_egg')
      break;
    case 'minecraft:shulker':
      event.player.give('minecraft:shulker_spawn_egg')
      break;
    case 'minecraft:silverfish':
      event.player.give('minecraft:silverfish_spawn_egg')
      break;
    case 'minecraft:skeleton':
      event.player.give('minecraft:skeleton_spawn_egg')
      break;
    case 'minecraft:skeleton_horse':
      event.player.give('minecraft:skeleton_horse_spawn_egg')
      break;
    case 'minecraft:slime':
      event.player.give('minecraft:slime_spawn_egg')
      break;
    case 'minecraft:sniffer':
      event.player.give('minecraft:sniffer_spawn_egg')
      break;
    case 'minecraft:snow_golem':
      event.player.give('minecraft:snow_golem_spawn_egg')
      break;
    case 'minecraft:spider':
      event.player.give('minecraft:spider_spawn_egg')
      break;
    case 'minecraft:squid':
      event.player.give('minecraft:squid_spawn_egg')
      break;
    case 'minecraft:stray':
      event.player.give('minecraft:stray_spawn_egg')
      break;
    case 'minecraft:strider':
      event.player.give('minecraft:strider_spawn_egg')
      break;
    case 'minecraft:tadpole':
      event.player.give('minecraft:tadpole_spawn_egg')
      break;
    case 'minecraft:trader_llama':
      event.player.give('minecraft:trader_llama_spawn_egg')
      break;
    case 'minecraft:tropical_fish':
      event.player.give('minecraft:tropical_fish_spawn_egg')
      break;
    case 'minecraft:turtle':
      event.player.give('minecraft:turtle_spawn_egg')
      break;
    case 'minecraft:vex':
      event.player.give('minecraft:vex_spawn_egg')
      break;
    case 'minecraft:villager':
      event.player.give('minecraft:villager_spawn_egg')
      break;
    case 'minecraft:vindicator':
      event.player.give('minecraft:vindicator_spawn_egg')
      break;
    case 'minecraft:wandering_trader':
      event.player.give('minecraft:wandering_trader_spawn_egg')
      break;
    case 'minecraft:warden':
      event.player.give('minecraft:warden_spawn_egg')
      break;
    case 'minecraft:witch':
      event.player.give('minecraft:witch_spawn_egg')
      break;
    case 'minecraft:wither_skeleton':
      event.player.give('minecraft:wither_skeleton_spawn_egg')
      break;
    case 'minecraft:wolf':
      event.player.give('minecraft:wolf_spawn_egg')
      break;
    case 'minecraft:zoglin':
      event.player.give('minecraft:zoglin_spawn_egg')
      break;
    case 'minecraft:zombie':
      event.player.give('minecraft:zombie_spawn_egg')
      break;
    case 'minecraft:zombie_horse_spawn_egg':
      event.player.give('minecraft:zombie_horse_spawn_egg')
      break;
    case 'minecraft:zombie_villager':
      event.player.give('minecraft:zombie_villager_spawn_egg')
      break;
    case 'minecraft:zombified_piglin':
      event.player.give('minecraft:zombified_piglin_spawn_egg')
      break;
    default:
      event.player.tell(Component.translatable('string.kubejs.duplicator.entity_duplication_failure'))
      break;
  }
})