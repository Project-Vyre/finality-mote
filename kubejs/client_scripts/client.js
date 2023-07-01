// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

let C = (id) => `create:${id}`
let MC = (id) => `minecraft:${id}`
let EXT = (id) => `extendedcrafting:${id}`
let MYST = (id) => `mysticalagriculture:${id}`
let CMTL = ['andesite', 'brass']
let MYSHIDE = [
	'rubber', 
	'silicon', 
	'sulfer', 
	'aluminum', 
	'saltpeter', 
	'apatite', 
	'marble', 
	'menril', 
	'tin', 
	'bronze', 
	'silver', 
	'graphite',
	'blizz',
	'blitz',
	'basalz',
	'slimesteel',
	'pig_iron',
	'manasteel',
	'steeleaf',
	'sapphire',
	'ruby',
	'uranium',
	'tungsten',
	'titanium',
	'steel',
	'platinum',
	'nickel',
	'mithril',
	'iridium',
	'invar',
	'electrum',
	'constantan',
	'chrome',
	'certus_quartz',
	'sky_stone',
	'aquamarine',
	'ironwood',
	'quartz_enriched_iron',
	'signalum',
	'lumium',
	'hop_graphite',
	'cobalt',
	'rose_gold',
	'elementium',
	'osmium',
	'fluorite',
	'refined_glowstone',
	'refined_obsidian',
	'knightmetal',
	'fiery_ingot',
	'starmetal',
	'compressed_iron',
	'fluix',
	'energized_steel',
	'blazing_crystal',
	'enderium',
	'manyullyn',
	'queens_slime',
	'hepatizon',
	'terrasteel',
	'rock_crystal',
	'draconium',
	'yellorium',
	'cyanite',
	'niotic_crystal',
	'spirited_crystal',
	'uraninite',
	'gaia_spirit',
	'awakened_draconium',
	'neutronium',
	'nitro_crystal',
]
JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	MYSHIDE.forEach(name => {
		event.hide(`mysticalagriculture:${name}_essence`)
	})
})
REIEvents.hide('item', event => {
	// event.hide('example:item')
	event.hide('create:shaft')
	event.hide('create:cogwheel')
	CMTL.forEach(metal => {
		event.hide(`create:${metal}_encased_shaft`)
		event.hide(`create:${metal}_encased_cogwheel`)
		event.hide(`create:${metal}_encased_large_cogwheel`)
	})
	MYSHIDE.forEach(name => {
		event.hide(`mysticalagriculture:${name}_essence`)
	})
})
REIEvents.information(event => {
	// event.addItem('example:ingredient', 'Title', ['Line 1', 'Line 2'])
})
REIEvents.removeCategories(event => {
	console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
	
	// event.remove('create:compacting')
})