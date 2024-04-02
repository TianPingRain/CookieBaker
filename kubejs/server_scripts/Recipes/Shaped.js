/**
 * 有序合成
 */

ServerEvents.recipes((event) => {
    event.shaped("cookies:cookie_chip_block", ["111", "111", "111"], {
        1: "cookies:cookie_chip",
    })

    event.shaped("cookies:cookie_stick", ["  1", " 1 ", "1  "], {
        1: "cookies:cookie_chip_block",
    })

    event.shaped("cookies:cookie_wand", ["  1", " 2 ", "2  "], {
        1: "cookies:cookie_chip_block",
        2: "cookies:cookie_stick",
    })

    event.shaped("4x minecraft:grass_block", ["12", "21"], {
        1: "cookies:cookie_chip_block",
        2: "minecraft:bone_meal",
    })

    event.shaped("4x minecraft:cobblestone", ["12", "21"], {
        1: "cookies:cookie_chip",
        2: "minecraft:oak_planks",
    })

    event.shaped("cookies:wooden_shears", ["1 ", " 1"], {
        1: "minecraft:oak_planks",
    })

    event.shaped("cookies:cookie_sand_paper", ["1 ", " 1"], {
        1: "cookies:cookie_chip_block",
    })

    event.shaped("9x cookies:cookie_chip", ["1"], {
        1: "cookies:cookie_chip_block",
    })

    event.shaped(Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), ["111", "121", "111"], {
        1: "#minecraft:leaves",
        2: "woodenbucket:wooden_bucket",
    })
})
