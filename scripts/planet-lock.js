Events.on(ContentInitEvent, e => {
    Planets.tantros.generator = new ErekirPlanetGenerator();
});
