ServerEvents.recipes((event) => {
    //曲奇碎屑块
    event.shaped("cookies:cookie_chip_block", ["111", "111", "111"], {
        1: "cookies:cookie_chip",
    })
    //曲奇棍
    event.shaped("cookies:cookie_stick", ["  1", " 1 ", "1  "], {
        1: "cookies:cookie_chip_block",
    })
    //曲奇法杖
    event.shaped("cookies:cookie_wand", ["  2", " 1 ", "1  "], {
        1: "cookies:cookie_stick",
        2: "cookies:cookie_chip_block",
    })
    //泥土
    event.shaped(Item.of("minecraft:dirt", 4), [
        'XY',
        'YX'
        ], {
        X: "cookies:cookie_chip_block",
        Y: "minecraft:bone_meal"
    })
    event.shaped(Item.of("minecraft:cobblestone", 4), [
        'XY',
        'YX'
        ], {
        X: "cookies:cookie_chip",
        Y: "minecraft:oak_planks"
    })
    event.shaped(Item.of("cookies:wooden_shears", 1), [
        'X ',
        ' X'
        ], {
        X: "minecraft:oak_planks"
    })
    event.shaped(Item.of("cookies:cookie_sand_paper", 1), [
        'X ',
        ' X'
        ], {
        X: "cookies:cookie_chip_block"
    })
})
