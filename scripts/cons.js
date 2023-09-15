Events.run(ClientLoadEvent, () => {
Planets.tantros.accessible = Planets.tantros.alwaysUnlocked = Planets.tantros.visible = true
Planets.tantros.hiddenItems = Items.erekirItems
Planets.tantros.allowLaunchToNumbered = false
Planets.tantros.allowLaunchLoadout = true
Planets.tantros.allowLaunchSchematics = true
UnitTypes.cleroi.weapons.each(w => UnitTypes.anthicus.weapons.add(w))
})
