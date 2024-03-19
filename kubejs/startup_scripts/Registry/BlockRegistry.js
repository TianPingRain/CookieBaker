StartupEvents.registry("block", (event) => {
    event
        .create("cookies:cookie_block1")
        .blockEntity((info) => {
            //10秒执行一次 代码在global.js
            info.serverTick(10 * 20, 0, (be) => {
                global.cookie(be)
            })
        })
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("COLOR_ORANGE")

    //升级后的曲奇方块1
    event
        .create("cookies:cookie_block1_update1")
        .blockEntity((info) => {
            //8秒执行一次
            info.serverTick(8 * 20, 0, (be) => {
                global.cookie(be)
            })
        })
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .textureAll("cookies:block/cookie_block1") //暂定

    event
        .create("cookies:cookie_block2")
        .material("cake")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("COLOR_ORANGE")

    event
        .create("cookies:cookie_block3")
        .material("cake")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("DIRT")

    event
        .create("cookies:cookie_block4")
        .material("cake")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("TERRACOTTA_ORANGE")

    event
        .create("cookies:cookie_block5")
        .material("cake")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("TERRACOTTA_BROWN")

    event
        .create("cookies:cookie_block6")
        .material("cake")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("TERRACOTTA_BROWN")

    event
        .create("cookies:cookie_block7")
        .material("cake")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("CRIMSON_HYPHAE")

    event.create("cookies:cookie_submiter", "custommachinery")
})
