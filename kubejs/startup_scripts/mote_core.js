// priority: 0

console.info('Registering Finality items...')

let FIN = (id) => `finality:${id}`
let C = (id) => `create:${id}`
let NATR = ['blue_ice', 'sand', 'coarse_dirt', 'cobblestone']
let CMAT = ['andesite_alloy', 'zinc', 'copper', 'brass', 'rose_quartz', 'framed_glass', 'precision_mechanism', 'sturdy_sheet']
// let DYE = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
// let DISPLAY_COLOR = ['White', 'Orange', 'Magenta', 'Light Blue', 'Lime', 'Pink', 'Purple', 'Light Gray', 'Gray', 'Cyan', 'Brown', 'Green', 'Blue', 'Red', 'Black', 'Yellow']
let DYE = {
	black: 'Black',
	gray: 'Gray',
	light_gray: 'Light Gray',
	white: 'White',
	pink: 'Pink',
	light_blue: 'Light Blue',
	brown: 'Brown',
	red: 'Red',
	orange: 'Orange',
	yellow: 'Yellow',
	lime: 'Lime',
	green: 'Green',
	cyan: 'Cyan',
	blue: 'Blue',
	purple: 'Purple',
	magenta: 'Magenta'
}
StartupEvents.registry('item', event => { // Register new items here event.create('example_item').displayName('Example Item')
	// minecraft core forgot what was supposed to be here
	// singularity related
	event.create(FIN('dormant_singularity_core')).texture('kubejs:item/dormant_singularity_core').maxStackSize(16)
	/*
	INCOMPLETE SINGULARITIES
	for use for making a singularity. dormant core to incomplete core to singularity
	follow format .create(FIN(), C(sequenced_assembly)).displayName().texture().maxStackSize(1)
	*/
	NATR.forEach(insert => event.create(FIN(`incomplete_${insert}_singularity`), C('sequenced_assembly')).texture(`kubejs:item/incomplete_singularities/nature/incomplete_${insert}`).maxStackSize(1))
	CMAT.forEach(MTRL => event.create(FIN(`incomplete_${MTRL}_singularity`), C('sequenced_assembly')).texture(`kubejs:item/incomplete_singularities/incomplete_${MTRL}`).maxStackSize(1))
	Object.keys(DYE).forEach(color => { // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
		event.create(FIN(`incomplete_concrete_${color}_singularity`), C('sequenced_assembly')).displayName(`§dIncomplete ${DYE[color]} Concrete Singularity`).texture(`kubejs:item/incomplete_singularities/concrete/incomplete_concrete_${color}`).maxStackSize(1)
	})
	/*
	ACTIVATED SINGULARITY CORES
	follow format .displayName().texture().maxStackSize(1)
	*/
	// activated singularity cores
	// work in progressevent.create('finality:andesite_singularity_core').displayName('Andesite Singularity Core').texture('finality:item/andesite_core').maxStackSize(8)
	event.create('finality:omnipotent_alloy').texture('kubejs:item/final_ingot').displayName('High Entropy Alloy').maxStackSize(64).group('miscellaneous')
	// tools
	event.create('finality:final_pickaxe', 'pickaxe').tier('final_items').displayName('Particula Eversorem').texture('kubejs:item/final_pickaxe').maxStackSize(1).group('tools')
	event.create('finality:final_axe', 'axe').tier('final_items').displayName('Natura Exitium').texture('kubejs:item/final_axe').maxStackSize(1).group('tools')
	event.create('finality:final_shovel', 'shovel').tier('final_items').displayName('Terra Confractus').texture('kubejs:item/final_shovel').maxStackSize(1).group('tools')
	event.create('finality:final_hoe', 'hoe').tier('final_items').displayName('Agricola Manus').texture('kubejs:item/final_hoe').maxStackSize(1).group('tools')
	// weapons
	event.create('finality:final_sword', 'sword').tier('final_items').displayName('Corevis Ultimatum').texture('kubejs:item/final_sword').maxStackSize(1).group('combat')
	// armor
	event.create('finality:final_helmet', 'helmet').tier('final_armor').displayName('Conscientia Oculi').texture('kubejs:item/final_helmet').maxStackSize(1).group('combat')
	event.create('finality:final_chestplate', 'chestplate').tier('final_armor').displayName('Vitale Cordis').texture('kubejs:item/final_chestplate').maxStackSize(1).group('combat')
	event.create('finality:final_leggings', 'leggings').tier('final_armor').displayName('Universum Motus').texture('kubejs:item/final_leggings').maxStackSize(1).group('combat')
	event.create('finality:final_boots', 'boots').tier('final_armor').displayName('Gravitas Anchoram').texture('kubejs:item/final_boots').maxStackSize(1).group('combat')
})
StartupEvents.registry('block', event => { 
	// Register new blocks here event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
StartupEvents.registry('fluid', event => {
	event.create('finality:condensed_universal_entropy').thickTexture(0x7800FF).noBucket() // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
	event.create('inferior_infusion_essence').thickTexture(0xACCF00).noBucket()
	event.create('supreme_infusion_essence').thickTexture(0xFC0000).noBucket()
})
// tiers
ItemEvents.toolTierRegistry(event => {
	event.add('final_items', tier => {
		tier.uses = -1 
		tier.speed = 255.0
		tier.attackDamageBonus = 65.0
		tier.level = 5
		tier.enchantmentValue = 30
	})
})
ItemEvents.armorTierRegistry(event => {
	event.add('final_armor', tier => {
	  	tier.durabilityMultiplier = -1 // Each slot will be multiplied with [13, 15, 16, 11]
	  	tier.slotProtections = [9999, 9999, 9999, 9999] // Slot indicies are [FEET, LEGS, BODY, HEAD]
	  	tier.enchantmentValue = 30
	  	tier.equipSound = 'minecraft:item.armor.equip_netherite'
	  	tier.toughness = 9999 // diamond has 2.0, netherite 3.0
	  	tier.knockbackResistance = 5.0
	})
})