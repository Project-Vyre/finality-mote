// requires: dimdoors
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('dimdoors',
    createTooltip('dimdoors:world_thread')
      .addSummary('The power of the Loom of Fate.')
      .addBehaviour([
        'Acquisition',
        'Can only be acquired from outside the simulation.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll('dimdoors',
    createTooltip('dimdoors:infrangible_fiber')
      .addSummary('Used in making armor or a roll of fiber.')
      .addBehaviour([
        'Acquisition',
        'Can only be acquired in Limbo by breaking the white static blocks you may come across.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll('dimdoors',
    createTooltip('dimdoors:amalgam_clump')
      .addSummary('Used in making Amalgam related items and blocks. Mod author will most likely have other uses for it in a future mod update.')
      .addBehaviour([
        'Acquisition',
        'Can only be acquired by _mining_ Amalgam Ore.'
      ])
      .addBehaviour([
        'Additional Info',
        'Doesn\'t have much of a use currently. Mod author will most likely have other uses for it in a future mod update.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll('dimdoors',
    createTooltip('dimdoors:clod')
      .addSummary('Used in making Clod related items and blocks.')
      .addBehaviour([
        'Acquisition',
        'Can only be acquired by _mining_ Clod Ore.'
      ])
      .addBehaviour([
        'Additional Info',
        'Doesn\'t have much of a use currently. Mod author will most likely have other uses for it in a future mod update.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
})