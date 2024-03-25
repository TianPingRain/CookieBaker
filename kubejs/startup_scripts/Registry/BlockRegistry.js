StartupEvents.registry("block", (event) => {
    let $SoundEvents = Java.loadClass("net.minecraft.sounds.SoundEvents")
    let CakeSoundType = new SoundType(
        1,
        1,
        $SoundEvents.CAKE_ADD_CANDLE,
        $SoundEvents.CAKE_ADD_CANDLE,
        $SoundEvents.CAKE_ADD_CANDLE,
        $SoundEvents.CAKE_ADD_CANDLE,
        $SoundEvents.CAKE_ADD_CANDLE
    )

    event
        .create("cookies:cookie_block1")
        .soundType(CakeSoundType)
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("COLOR_ORANGE")

    event
        .create("cookies:cookie_block2")
        .soundType(CakeSoundType)
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("COLOR_ORANGE")

    event
        .create("cookies:cookie_block3")
        .soundType(CakeSoundType)
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("DIRT")

    event
        .create("cookies:cookie_block4")
        .soundType(CakeSoundType)
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("TERRACOTTA_ORANGE")

    event
        .create("cookies:cookie_block5")
        .soundType(CakeSoundType)
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("TERRACOTTA_BROWN")

    event
        .create("cookies:cookie_block6")
        .soundType(CakeSoundType)
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("TERRACOTTA_BROWN")

    event
        .create("cookies:cookie_block7")
        .soundType(CakeSoundType)
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("cookies:cookie_block")
        .mapColor("CRIMSON_HYPHAE")

    event.create("cookies:cookie_submiter", "custommachinery")
})
