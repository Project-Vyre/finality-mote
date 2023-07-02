// priority: 0

console.info('Client scripts loaded. You will see this line every time client resources reload.')

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
	event.hide('createaddition:straw')
	event.hide('createaddition:seed_oil_bucket')
	event.hide('createaddition:bioethanol_bucket')
	event.hide('createaddition:seed_oil')
	event.hide('createaddition:bioethanol')
	event.hide('createaddition:straw')
	event.hide('createaddition:gold_rod')
	event.hide('createaddition:brass_rod')
})
JEIEvents.information(event => {
	event.add('mysticalagriculture:fertilized_essence', ['Can only be acquired from Mystical Agriculture crops upon harvesting.', 'Not a guaranteed drop!'])
	event.add('minecraft:ender_eye', ['There is a certain eye that can only be acquired from enchanting.', 'It is very rare, however.'])
	event.add('endrem:black_eye', ['Can be found in lost treasure chests.'])
	event.add('endrem:cold_eye', ['Found in igloos.'])
	event.add('endrem:corrupted_eye', ['Found in Pillager Outposts.'])
	event.add('endrem:lost_eye', ['Usually found in Mineshafts.'])
	event.add('endrem:nether_eye', ['Found in Nether Fortresses.'])
	event.add('endrem:old_eye', ['Found in Desert Pyramids.'])
	event.add('endrem:rogue_eye', ['Usually found in Jungle Temples.'])
	event.add('endrem:cursed_eye', ['Usually found in Bastions.'])
	event.add('endrem:evil_eye', ['Usually acquired from a Master Cleric.'])
	event.add('endrem:guardian_eye', ['Usually acquired from slaying Elder Guardians.'])
	event.add('endrem:magical_eye', ['Acquired from slaying Evokers.'])
	event.add('endrem:wither_eye', ['Obviously only drops from the Wither.'])
	event.add('endrem:witch_eye', ['Requires a Witch Pupil to craft.'])
	event.add('endrem:undead_eye', ['Requires a skeleton horse to be slain in order to acquire the Undead Soul.'])
	event.add('endrem:undead_soul', ['Acquired from slaying a skeleton horse.'])
	event.add('endrem:exotic_eye', ['Created by combining multiple exotic ingredients using a Crafting Core.'])
})
ItemEvents.tooltip(event => {
	// Fix provided by Reveter#1305 on latvian.dev
    event.addAdvanced('patchouli:guide_book', ((item, advanced, text) => {
        if (!item.hasNBT()) return;
        if (item.nbt['patchouli:book'] == 'patchouli:tome_of_finality') {
            text.add(Component.lightPurple("Hi! Please use this book, it's important modpack documentation."))
			text.add(Component.lightPurple("The book also serves as progression tracking in the absence of FTB Quests."))
			text.add(Component.lightPurple("Entries in the Genesis category are spoiler free and are targeted at new players!"))
			text.add(Component.lightPurple("- Overseers of Finality"))
        }
    }))
})