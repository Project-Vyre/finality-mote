// requires: tempad

ServerEvents.recipes(event => {
    event.remove({id: 'tempad:tempad'})
    event.shaped('tempad:tempad', [
        'QQQ',
        'RTB',
        'QQQ'
    ], {
        Q: 'quartz_block',
        R: 'create:rose_quartz_lamp',
        T: 'tinted_glass',
        B: 'beacon'
    }).id('finality:tempad')
})