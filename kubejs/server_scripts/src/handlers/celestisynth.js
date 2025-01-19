// requires: celestisynth

ServerEvents.tags('block', event => {
  event.add('forge:needs_netherite_tool', [
    'celestisynth:starlit_factory'
  ])
  event.add('minecraft:mineable/pickaxe', [
    'celestisynth:starlit_factory'
  ])
})