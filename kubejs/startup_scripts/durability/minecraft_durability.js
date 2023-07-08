// priority: 1
let TOOLS = ['sword','shovel','pickaxe','axe','hoe']
let ARMOR = ['helmet','chestplate','leggings','boots']
ItemEvents.modification(event => {
	// wooden tools
    TOOLS.forEach(tool => event.modify(`wooden_${tool}`, item => {
        item.maxDamage = 16
    }))
    TOOLS.forEach(tool => event.modify(`stone_${tool}`, item => {
        item.maxDamage = 128
    }))
    TOOLS.forEach(tool => event.modify(`iron_${tool}`, item => {
        item.maxDamage = 256
    }))
	event.modify('minecraft:shears', item => {
        item.maxDamage = 256
    })
	event.modify('minecraft:shield', item => {
        item.maxDamage = 225
    })
    TOOLS.forEach(tool => event.modify(`diamond_${tool}`, item => {
        item.maxDamage = 1024
    }))
    TOOLS.forEach(tool => event.modify(`netherite_${tool}`, item => {
        item.maxDamage = 2048
    }))
    // Armor durability is synchronized because it does not make sense as to why armor pieces have different durabilities.
	// leather armor
    ARMOR.forEach(armor => event.modify(`leather_${armor}`, item => {
        item.maxDamage = 128
    }))
    ARMOR.forEach(armor => event.modify(`iron_${armor}`, item => {
        item.maxDamage = 256
    }))
    ARMOR.forEach(armor => event.modify(`golden_${armor}`, item => {
        item.maxDamage = 225
    }))
    ARMOR.forEach(armor => event.modify(`diamond_${armor}`, item => {
        item.maxDamage = 512
    }))
    ARMOR.forEach(armor => event.modify(`netherite_${armor}`, item => {
        item.maxDamage = 1024
    }))
})