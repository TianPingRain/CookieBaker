/**
 * 给可用于堆肥的物品添加腐烂特性
 */

const $ComposterBlock = Java.loadClass("net.minecraft.world.level.block.ComposterBlock")

const keys = Object.keys($ComposterBlock.COMPOSTABLES)

ServerEvents.recipes((event) => {
    let itemsMap = {}

    const SpacialItem = [
        Ingredient.of("#minecraft:leaves").itemIds,
        Ingredient.of("#minecraft:saplings").itemIds,
        Ingredient.of("#minecraft:flowers").itemIds,
        Ingredient.of("#botania:petals").itemIds
    ]

    SpacialItem.forEach((item) => {
        const items = item.toArray()

        items.forEach((itemName) => {
            itemsMap[itemName.split(":")[1]] = true
            event.custom({
                type: "spoiled:spoil_recipe",
                ingredient: {
                    item: itemName,
                },
                spoiltime: 7200,
                result: {
                    item: "cookies:putrefaction",
                },
            })
        })
    })

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
        "botania:gray_mushroom",
        "botania:white_double_flower",
        "botania:lime_mystical_flower",
        "botania:magenta_mushroom",
        "botania:green_mushroom",
        "botania:blue_mystical_flower",
        "botania:lime_double_flower",
        "botania:black_double_flower",
        "botania:light_gray_mystical_flower",
        "botania:gray_double_flower",
        "botania:brown_double_flower",
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
        "botania:orange_mushroom",
        "botania:yellow_mystical_flower",
        "botania:red_mystical_flower",
        "botania:yellow_mushroom",
        "botania:cyan_double_flower",
        "botania:light_blue_double_flower",
        "botania:magenta_mystical_flower",
        "botania:light_gray_double_flower",
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
                item: "cookies:putrefaction",
            },
        })
    })

    keys.forEach((key) => {
        if (!itemsMap[key]) {
            event.custom({
                type: "spoiled:spoil_recipe",
                ingredient: {
                    item: key,
                },
                result: {
                    item: "cookies:putrefaction",
                },
            })
        }
    })
})
