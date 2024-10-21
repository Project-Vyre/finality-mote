/**
 * @file Lang file generation for Tempad.
 * @version 1.20.1
 */

// requires: tempad

ClientEvents.lang('en_us', event => {
  if (!Platform.isLoaded('textanimator')) {
    event.addAll('tempad', {
      "tooltip.tempad.timeleft": "§5Will take§r %s §5to recharge after use.§r",
      "tooltip.tempad.fullycharged": "§aFully Charged.§r ",
      "item.tempad.he_who_remains_tempad": "Overseer's Tempad",
      "item.tempad.he_who_remains_tempad.tooltip": "Property of 'He Who Remains'",
      "advancements.tempad.tempad": "For All Time. Always.",
      "advancements.tempad.tempad.description": "Obtain a Tempad",
      "advancements.tempad.he_who_remains": "The Citadel at the End of Time",
      "advancements.tempad.he_who_remains.description": "Obtain 'He Who Remains'' Tempad",
      "subtitles.tempad.entity.timedoor.open": "Timedoor opens",
      "entity.tempad.timedoor": "Timedoor"
    })
  }
  if (Platform.isLoaded('textanimator')) {
    event.addAll('tempad', {
      "tooltip.tempad.timeleft": "§5Will take§r %s §5to recharge after use.§r",
      "tooltip.tempad.fullycharged": "§aFully Charged.§r ",
      "item.tempad.tempad": "<rainb>Tempad</rainb>",
      "item.tempad.he_who_remains_tempad": "<rainb>Overseer's Tempad</rainb>",
      "item.tempad.he_who_remains_tempad.tooltip": "Property of 'He Who Remains'",
      "advancements.tempad.tempad": "For All Time. Always.",
      "advancements.tempad.tempad.description": "Obtain a Tempad",
      "advancements.tempad.he_who_remains": "The Citadel at the End of Time",
      "advancements.tempad.he_who_remains.description": "Obtain 'He Who Remains'' Tempad",
      "subtitles.tempad.entity.timedoor.open": "Timedoor opens",
      "entity.tempad.timedoor": "Timedoor"
    })
  }
})