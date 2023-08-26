// requires: functionalstorage
// requires: monobank

let wood_types = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'crimson',
    'warped',
    'mangrove'
]

ServerEvents.recipes(event => {
    event.shaped('kubejs:denied_result', [
        'W'
    ], {
        W: '#forge:chests/wooden'
    }).id('functionalstorage:oak_drawer_alternate_x1')
    event.shaped('kubejs:denied_result', [
        ' W ',
        '   ',
        ' W '
    ], {
        W: '#forge:chests/wooden'
    }).id('functionalstorage:oak_drawer_alternate_x2')
    event.shaped('kubejs:denied_result', [
        'W W',
        '   ',
        'W W'
    ], {
        W: '#forge:chests/wooden'
    }).id('functionalstorage:oak_drawer_alternate_x4')
    wood_types.forEach(material => {
        event.shaped(`functionalstorage:${material}_1`, [
            'WWW',
            'WIW',
            'WWW'
        ], {
            W: `minecraft:${material}_planks`,
            I: 'monobank:monobank'
        }).id(`functionalstorage:${material}_1`)
        event.shaped(`functionalstorage:${material}_2`, [
            'WIW',
            'WWW',
            'WIW'
        ], {
            W: `minecraft:${material}_planks`,
            I: 'monobank:monobank'
        }).id(`functionalstorage:${material}_2`)
        event.shaped(`functionalstorage:${material}_4`, [
            'IWI',
            'WWW',
            'IWI'
        ], {
            W: `minecraft:${material}_planks`,
            I: 'monobank:monobank'
        }).id(`functionalstorage:${material}_4`)
    })
    event.shaped('functionalstorage:framed_1', [
        'III',
        'IVI',
        'III'
    ], {
        I: 'minecraft:iron_nugget',
        V: 'monobank:monobank'
    }).id('functionalstorage:framed_1')
    event.shaped('functionalstorage:framed_2', [
        'IVI',
        'III',
        'IVI'
    ], {
        I: 'minecraft:iron_nugget',
        V: 'monobank:monobank'
    }).id('functionalstorage:framed_2')
    event.shaped('functionalstorage:framed_4', [
        'VIV',
        'III',
        'VIV'
    ], {
        I: 'minecraft:iron_nugget',
        V: 'monobank:monobank'
    }).id('functionalstorage:framed_4')
    event.shaped('functionalstorage:fluid_1', [
        'III',
        'IFI',
        'III'
    ], {
        I: 'create:iron_sheet',
        F: 'create:fluid_tank'
    }).id('functionalstorage:fluid_1')
    event.shaped('functionalstorage:fluid_2', [
        'IFI',
        'III',
        'IFI'
    ], {
        I: 'create:iron_sheet',
        F: 'create:fluid_tank'
    }).id('functionalstorage:fluid_2')
    event.shaped('functionalstorage:fluid_4', [
        'FIF',
        'III',
        'FIF'
    ], {
        I: 'create:iron_sheet',
        F: 'create:fluid_tank'
    }).id('functionalstorage:fluid_4')
    //event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: 'functionalstorage:oak_1' }, replace => {
    //    event.shaped(Item.of(replace.originalRecipeResult.id), [
    //        'WWW',
    //        'WIW',
    //        'WWW'
    //    ], {
    //        W: 'minecraft:oak_planks',
    //        I: 'monobank:monobank'
    //    }).id(replace.getOrCreateId())
    //})
})