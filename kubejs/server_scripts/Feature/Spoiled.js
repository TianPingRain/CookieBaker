const $ComposterBlock = Java.loadClass("net.minecraft.world.level.block.ComposterBlock")

ServerEvents.recipes((event) => {
    const keys = Object.keys($ComposterBlock.COMPOSTABLES)

    keys.forEach((key) => {
        const Compostable_Item = key.split("=>")[0].trim()

        event.custom({
            type: "spoiled:spoil_recipe",
            ingredient: {
                item: Compostable_Item,
            },
            result: {
                item: "minecraft:rotten_flesh",
            },
        })
    })
})
