ServerEvents.recipes(event => {
    event.shaped('backpacked:backpack', [
        'HHH',
        'SIS',
        'HHH'
    ], {
        H: 'rabbit_hide',
        S: 'string',
        I: 'iron_ingot'
    }).id('backpacked:backpack')
    event.shaped('backpacked:backpack', [
        'LLL',
        'SIS',
        'LLL'
    ], {
        L: 'leather',
        S: 'string',
        I: 'iron_ingot'
    }).id('finality:backpack_alt')
})