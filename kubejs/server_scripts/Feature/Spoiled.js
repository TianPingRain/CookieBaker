const $ComposterBlock = Java.loadClass("net.minecraft.world.level.block.ComposterBlock")

ServerEvents.recipes((event) => {
    let itemsMap = {}
    const ModItem = [
        "destroy:yeast",
        "destroy:lapis_infused_beetroot",
        "destroy:copper_infused_beetroot",
        "destroy:agar_block",
        "destroy:agar",
        "destroy:hefty_beetroot",
        "destroy:gold_infused_beetroot",
        "destroy:nickel_infused_beetroot",
        "destroy:zinc_infused_beetroot",
        "destroy:iron_infused_beetroot",
        "destroy:diamond_infused_beetroot",
        "destroy:potate_o",
        "destroy:mashed_potato_block",
        "destroy:redstone_infused_beetroot",
        "destroy:mashed_potato",
        "destroy:emerald_infused_beetroot",
        "destroy:coal_infused_beetroot",
        "destroy:fluorite_infused_beetroot",
        "destroy:bifuricated_carrot",
        "destroy:yeast_covered_agar_block",
        "botania:cyan_mushroom",
        "botania:red_double_flower",
        "botania:lime_petal",
        "botania:gray_mushroom",
        "botania:yellow_petal",
        "botania:gray_petal",
        "botania:light_blue_petal_block",
        "botania:black_petal",
        "botania:lime_petal_block",
        "botania:white_double_flower",
        "botania:lime_mystical_flower",
        "botania:light_gray_petal",
        "botania:magenta_mushroom",
        "botania:green_mushroom",
        "botania:blue_mystical_flower",
        "botania:lime_double_flower",
        "botania:magenta_petal",
        "botania:white_petal",
        "botania:black_double_flower",
        "botania:red_petal_block",
        "botania:yellow_petal_block",
        "botania:light_blue_petal",
        "botania:light_gray_mystical_flower",
        "botania:gray_double_flower",
        "botania:brown_double_flower",
        "botania:green_petal",
        "botania:white_mushroom",
        "botania:light_blue_mystical_flower",
        "botania:lime_mushroom",
        "botania:magenta_double_flower",
        "botania:pink_mushroom",
        "botania:light_blue_mushroom",
        "botania:blue_mushroom",
        "botania:green_mystical_flower",
        "botania:green_double_flower",
        "botania:black_mushroom",
        "botania:pink_double_flower",
        "botania:light_gray_petal_block",
        "botania:orange_mushroom",
        "botania:yellow_mystical_flower",
        "botania:pink_petal_block",
        "botania:red_mystical_flower",
        "botania:purple_petal_block",
        "botania:brown_petal_block",
        "botania:cyan_petal",
        "botania:orange_petal",
        "botania:yellow_mushroom",
        "botania:purple_petal",
        "botania:cyan_double_flower",
        "botania:green_petal_block",
        "botania:white_petal_block",
        "botania:light_blue_double_flower",
        "botania:blue_petal",
        "botania:orange_petal_block",
        "botania:pink_petal",
        "botania:magenta_petal_block",
        "botania:magenta_mystical_flower",
        "botania:light_gray_double_flower",
        "botania:brown_petal",
        "botania:black_petal_block",
        "botania:cyan_petal_block",
        "botania:yellow_double_flower",
        "botania:cell_block",
        "botania:orange_mystical_flower",
        "botania:cyan_mystical_flower",
        "botania:light_gray_mushroom",
        "botania:gray_mystical_flower",
        "botania:orange_double_flower",
        "botania:blue_double_flower",
        "botania:black_mystical_flower",
        "botania:purple_double_flower",
        "botania:gray_petal_block",
        "botania:blue_petal_block",
        "botania:red_petal",
        "botania:white_mystical_flower",
        "botania:brown_mystical_flower",
        "botania:purple_mystical_flower",
        "botania:pink_mystical_flower",
        "botania:purple_mushroom",
    ]

    ModItem.forEach((item) => {
        const itemName = item.split(":")[1]
        itemsMap[itemName] = true
        event.custom({
            type: "spoiled:spoil_recipe",
            ingredient: {
                item: item,
            },
            result: {
                item: "minecraft:rotten_flesh",
            },
        })
    })

    const keys = Object.keys($ComposterBlock.COMPOSTABLES)

    keys.forEach((key) => {
        const Compostable_Items = key.split("=>")[0].trim()
        if (!itemsMap[Compostable_Items]) {
            event.custom({
                type: "spoiled:spoil_recipe",
                ingredient: {
                    item: Compostable_Items,
                },
                result: {
                    item: "minecraft:rotten_flesh",
                },
            })
        }
    })
})
