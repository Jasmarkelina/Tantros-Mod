Events.run(ClientLoadEvent, () => {
    Planets.tantros.defaultCore = Vars.content.getByName(ContentType.block, "tantros-mod-core-ruin");
    Planets.tantros.generator.defaultLoadout = Schematics.readBase64("bXNjaAF4nBWMSwqAMAwFX6Uo6Npj9ETiIrYBA/1IE++vhWFWw8DD/1QqDB9bZyxqTEUSVo03FzKJii2xxi6PSasA5kwXZ8V0nA67UbXeNJSWwliE/sqo3ODXB2hBGq8=");
});