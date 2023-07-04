// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

let C = (id) => `create:${id}`
let MC = (id) => `minecraft:${id}`
let EXT = (id) => `extendedcrafting:${id}`

ServerEvents.recipes(event => {
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), ['#forge:rods/wooden','#forge:rods/wooden']).id('finality:documentation_book')
    event.remove({id: 'minecraft:redstone_from_smelting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore'}) // cursed recipe
	event.remove({id: 'createaddition:rolling/gold_ingot'})
	event.remove({id: 'createaddition:rolling/brass_ingot'})
	event.remove({id: 'createaddition:rolling/straw'})
	event.remove({id: 'createaddition:mixing/bioethanol'})
	event.shaped(MC('bucket'), [
		'I I',
		' I '
	], {
		I: C('iron_sheet')
	}).id('minecraft:bucket')
	event.shaped(MC('clock'), [
		' G ',
		'GMG',
		' G '
	], {
		G: C('golden_sheet'),
		M: C('precision_mechanism')
	}).id('minecraft:clock')
	event.shaped(MC('compass'), [
		' I ',
		'IRI',
		' I '
	], {
		I: C('iron_sheet'),
		R: MC('redstone')
	}).id('minecraft:compass')
	event.recipes.createMixing('finality:omnipotent_alloy', [
		EXT('the_ultimate_catalyst'),
		EXT('crystaltine_catalyst'),
		MC('netherite_ingot'),
		C('rose_quartz'),
		C('brass_ingot'),
		C('andesite_alloy'),
		MC('diamond'),
		MC('amethyst_shard'),
		Fluid.of('finality:condensed_universal_entropy', 500)
	]).id('finality:mixing/omnipotent_alloy')
	event.shaped('finality:final_helmet', [
		'EEE',
		'E E'
	], {
		E: 'finality:omnipotent_alloy',
	}).id('finality:crafting/final_helmet')
	event.shaped('finality:final_chestplate', [
		'E E',
		'EEE',
		'EEE'
	], {
		E: 'finality:omnipotent_alloy'
	}).id('finality:crafting/final_chestplate')
	event.shaped('finality:final_leggings', [
		'EEE',
		'E E',
		'E E'
	], {
		E: 'finality:omnipotent_alloy'
	}).id('finality:crafting/final_leggings')
	event.shaped('finality:final_boots', [
		'E E',
		'E E'
	], {
		E: 'finality:omnipotent_alloy'
	}).id('finality:crafting/final_boots')
	event.shaped('finality:final_sword', [
		'E',
		'E',
		'S'
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_sword')
	event.shaped('finality:final_pickaxe', [
		'EEE',
		' S ',
		' S '
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_pickaxe')
	event.shaped('finality:final_axe', [
		'EE',
		'ES',
		' S'
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_axe')
	event.shaped('finality:final_shovel', [
		'E',
		'S',
		'S'
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_shovel')
	event.shaped('finality:final_hoe', [
		'EE',
		' S',
		' S'
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_hoe')
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

const set = {
    "name": "finality:final",
    "effects": [
        {
            "effect": "saturation",
            "duration": 400,
            "amplifier": 0
        },
		{
            "effect": "resistance",
            "duration": 400,
            "amplifier": 255
        },
    ]
}

const sets = [set];

PlayerEvents.tick(e => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = e.player;
    if (e.player.level.time % 100 == 0) {
        for (let armorSet in sets) {
            if (headArmorItem.id === sets[armorSet].name + '_helmet'
                && chestArmorItem.id === sets[armorSet].name + '_chestplate'
                && legsArmorItem.id === sets[armorSet].name + '_leggings'
                && feetArmorItem.id === sets[armorSet].name + '_boots') {
                for (let x in sets[armorSet].effects) {
                    e.player.potionEffects.add(sets[armorSet].effects[x].effect, sets[armorSet].effects[x].duration, sets[armorSet].effects[x].amplifier);
                }
            };
        }
    };
});