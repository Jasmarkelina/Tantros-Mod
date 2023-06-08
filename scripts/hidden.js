Events.run(ClientLoadEvent, () => {
const nickel = Vars.content.item("tantros-mod-Nickel");
const appyphosil = Vars.content.item("tantros-mod-appyphosil");
const infectedPur = Vars.content.item("tantros-mod-infected-pur");
const cadmium = Vars.content.item("tantros-mod-cadmium");
const zinc = Vars.content.item("tantros-mod-zincum");
const oblite = Vars.content.item("tantros-mod-oblite");
const alumen = Vars.content.item("tantros-mod-alumen-composite");
const argus = Vars.content.item("tantros-mod-argus");
const oxygen = Vars.content.item("tantros-mod-oxygen");
const oxidatedCopper = Vars.content.item("tantros-mod-oxidated-copper");
const tantrosItems = [nickel, argus, alumen, appyphosil, zinc, cadmium, infectedPur, oblite, oxygen, oxidatedCopper];
Planets.erekir.hiddenItems.add(tantrosItems);
Planets.serpulo.hiddenItems.add(tantrosItems);
});
