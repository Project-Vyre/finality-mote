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
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})