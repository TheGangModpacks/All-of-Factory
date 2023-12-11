const parts_properties = {
  copper: { color: copper },
  iron: { color: iron },
  gold: { color: gold },
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  steel: { color: steel },
  aluminum: { color: aluminum },
  electrum: { color: electrum },
  constantan: { color: constantan },
  osmium: { color: osmium },
  bronze: { color: bronze },
  uranium: { color: uranium },
  zinc: { color: zinc },
  brass: { color: brass },
  enderium: { color: enderium },
  lumium: { color: lumium },
  invar: { color: invar },
  signalum: { color: signalum },
  tungsten: { color: tungsten },
  signar: { color: signar }
}

global.parts = [
  'copper',
  'iron',
  'gold',
  'tin',
  'silver',
  'lead',
  'nickel',
  'steel',
  'aluminum',
  'electrum',
  'constantan',
  'osmium',
  'bronze',
  'uranium',
  'zinc',
  'brass',
  'enderium',
  'lumium',
  'invar',
  'signalum',
  'tungsten',
  'signar'
]

StartupEvents.registry('item', event => {
  for (const mat of global.parts) {
    event
      .create(`${mat}_plate`)
      .texture('layer0', 'kubejs:item/plate')
      .color(0, parts_properties[mat].color)
      .tag('forge:plates')
      .tag(`forge:plates/${mat}`)
    event
      .create(`${mat}_dust`)
      .texture('layer0', 'kubejs:item/dust')
      .color(0, parts_properties[mat].color)
      .tag('forge:dusts')
      .tag(`forge:dusts/${mat}`)
  }
})
