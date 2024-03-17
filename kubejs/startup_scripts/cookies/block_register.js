
  StartupEvents.registry("block", (event) => {
    event.create("cookies:cookie_block1") // Create a new block // Set a custom name
    .material("cake") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .tagBlock("cookies:cookie_block") // Tag the block with `#my_namespace:my_other_tag`
    .mapColor("COLOR_ORANGE")

    event.create("cookies:cookie_block2")
    .material("cake")
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock("cookies:cookie_block")
    .mapColor("COLOR_ORANGE")

    event.create("cookies:cookie_block3")
    .material("cake")
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock("cookies:cookie_block")
    .mapColor("DIRT")

    event.create("cookies:cookie_block4")
    .material("cake")
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock("cookies:cookie_block")
    .mapColor("TERRACOTTA_ORANGE")

    event.create("cookies:cookie_block5")
    .material("cake")
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock("cookies:cookie_block")
    .mapColor("TERRACOTTA_BROWN")

    event.create("cookies:cookie_block6")
    .material("cake")
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock("cookies:cookie_block")
    .mapColor("TERRACOTTA_BROWN")

    event.create("cookies:cookie_block7")
    .material("cake")
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock("cookies:cookie_block")
    .mapColor("CRIMSON_HYPHAE")
    
    event.create("cookies:cookie_submiter", "custommachinery")
})