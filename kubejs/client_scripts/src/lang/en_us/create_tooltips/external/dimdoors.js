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
})