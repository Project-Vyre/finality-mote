// requires: patchouli
// ignored: true

/**
 * @version 1.20.1-M
 * @file Server handler for all Patchoul related things.
 */

ServerEvents.recipes(event => {
  event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), [
    '#forge:rods/wooden', '#forge:rods/wooden'
  ]).id('finality:documentation_book')
})