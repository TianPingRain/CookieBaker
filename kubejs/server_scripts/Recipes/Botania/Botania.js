/**
 * 配方添加 - 植物魔法
 */

ServerEvents.recipes((event) => {
    const {
        brew, //植物酿造
        elven_trade, //精灵交易
        mana_infusion, //魔力灌注
        marimorphosis, //异构花
        orechid, //凝矿兰
        orechid_ignem, //炎矿兰
        petal_apothecary, //花瓣炼制
        pure_daisy, //白雏菊
        runic_altar, //符文祭坛
        terra_plate, //泰拉凝聚
    } = event.recipes.botania

    mana_infusion("destroy:magic_beetroot_seeds", "minecraft:wheat_seeds", 200)
    mana_infusion("destroy:magic_beetroot_seeds", "minecraft:beetroot_seeds", 200)
})
