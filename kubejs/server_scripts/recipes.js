// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

let C = (id) => `create:${id}`
let MC = (id) => `minecraft:${id}`
let EXT = (id) => `extendedcrafting:${id}`
let MYST = (id) => `mysticalagriculture:${id}`
let MYSTADD = (id) => `mysticalagradditions:${id}`

ServerEvents.recipes(event => {
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), ['#forge:rods/wooden','#forge:rods/wooden']).id('finality:documentation_book')
    event.remove({id: 'minecraft:redstone_from_smelting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore'}) // cursed recipe
	event.shaped(MC('bucket'), [
		'I I',
		' I '
	], {
		I: C('iron_sheet')
	}).id('minecraft:bucket')
	event.shaped(MC('beacon'), [
		'GGG',
		'GSG',
		'OOO'
	], {
		G: '#forge:glass/colorless',
		S: EXT('ender_star'),
		O: MC('obsidian')
	}).id('minecraft:beacon')
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
    // create
    // compacting
    event.recipes.createCompacting([
		'minecraft:diamond'
	], [
		MC('coal_block'), 
		MC('coal_block'),
		MC('coal_block'),
		MC('coal_block'),
		MC('coal_block'),
		MC('coal_block'),
		MC('coal_block'),
		MC('coal_block'),
		MC('coal_block'),
		Fluid.of('minecraft:lava', 250)
	]).superheated().id('finality:renew_diamond')
    event.recipes.createCompacting([
		'minecraft:coal'
	], [
		MC('dried_kelp_block'),
		MC('dried_kelp_block'),
		MC('dried_kelp_block'),
		MC('dried_kelp_block'),
		MC('dried_kelp_block'),
		MC('dried_kelp_block'),
		MC('dried_kelp_block'),
		MC('dried_kelp_block'),
		MC('dried_kelp_block')
	]).heated().id('finality:renew_coal')
    event.recipes.createCompacting([
		'minecraft:basalt'
	], [
		'minecraft:blue_ice', 
		Fluid.of('minecraft:lava', 500)
	]).id('finality:compacting_basalt')
    event.recipes.createCompacting([
		'minecraft:tuff'
	], [
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		MC('gravel'),
		Fluid.of('minecraft:lava', 250)
	]).superheated().id('finality:renew_tuff')
    event.recipes.createCompacting([
		'minecraft:tuff'
	], [
		MC('deepslate'),
		MC('deepslate'),
		MC('deepslate'),
		MC('deepslate'),
		MC('deepslate'),
		MC('deepslate'),
		MC('deepslate'),
		MC('deepslate'),
		MC('deepslate'),
		Fluid.of('minecraft:lava', 250)
	]).heated().id('finality:renew_deepslate_tuff')
    // crushing
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:crushing/netherrack'})
    event.recipes.createCrushing([
		MC('dirt'),
		Item.of(MC('flint')).withChance(0.10)
	], MC('gravel')).processingTime(250).id('finality:gravel_crushing')
    event.recipes.createCrushing([
		'minecraft:sand',
		Item.of('minecraft:clay_ball').withChance(0.05)
	], 'minecraft:dirt').processingTime(250).id('finality:dirt_crushing')
    event.recipes.createCrushing([
		'4x minecraft:pointed_dripstone',
		Item.of('minecraft:clay_ball').withChance(0.50),
		Item.of('create:copper_nugget').withChance(0.25),
		Item.of('create:experience_nugget').withChance(0.75)
	], 'minecraft:dripstone_block').processingTime(250).id('finality:dripstone_crushing')
    event.recipes.createCrushing([
		Item.of('create:copper_nugget').withChance(0.05),
		Item.of('minecraft:gunpowder').withChance(0.10)
	], 'minecraft:basalt').id('finality:basalt_crushing')
    event.recipes.createCrushing([
		'create:cinder_flour',
		Item.of('create:cinder_flour').withChance(0.50),
		Item.of('minecraft:netherite_scrap').withChance(0.002)
	],
		'minecraft:netherrack').processingTime(250).id('finality:netherrack_crushing')
    // filling
    event.recipes.createFilling('minecraft:netherrack', [
		'minecraft:cobblestone', 
		Fluid.of('create:potion', 250, '{Potion: "minecraft:strong_healing"}')
	]).id('finality:living_flesh_stone')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('finality:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('finality:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('finality:soul_nametag')
    // mixing 
    event.recipes.createMixing([
		'minecraft:coarse_dirt'
	], [
		'minecraft:dirt', 'minecraft:gravel'
	]).id('finality:coarse_dirt')
    // Be3Al2(SiO3)6
    event.recipes.createMixing([
		'minecraft:emerald'
	], [
		'minecraft:quartz', 
		'minecraft:glass', 
		'minecraft:iron_nugget',
		'minecraft:iron_nugget',
		'minecraft:iron_nugget'
	]).superheated().id('finality:renew_emerald')
    // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.createMixing([
		MC('nether_gold_ore')
	], [
		C('cinder_flour'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		MC('gold_nugget'),
		Fluid.of('minecraft:lava', 250)
	]).id('finality:nether_gold_ore_deco')
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})