/**
 * 配方添加 - 砂纸打磨
 */

ServerEvents.recipes((event) => {
    const { sandpaper_polishing } = event.recipes.create

    sandpaper_polishing("minecraft:coal", "destroy:coal_infused_beetroot_ashes")
    sandpaper_polishing("create:crushed_raw_copper", "destroy:copper_infused_beetroot_ashes")
    sandpaper_polishing("minecraft:diamond", "destroy:diamond_infused_beetroot_ashes")
    sandpaper_polishing("minecraft:emerald", "destroy:emerald_infused_beetroot_ashes")
    sandpaper_polishing("destroy:fluorite", "destroy:fluorite_infused_beetroot_ashes")
    sandpaper_polishing("create:crushed_raw_gold", "destroy:gold_infused_beetroot_ashes")
    sandpaper_polishing("create:crushed_raw_iron", "destroy:iron_infused_beetroot_ashes")
    sandpaper_polishing("5x minecraft:lapis_lazuli", "destroy:lapis_infused_beetroot_ashes")
    sandpaper_polishing("create:crushed_raw_nickel", "destroy:nickel_infused_beetroot_ashes")
    sandpaper_polishing("3x minecraft:redstone", "destroy:redstone_infused_beetroot_ashes")
    sandpaper_polishing("create:crushed_raw_zinc", "destroy:zinc_infused_beetroot_ashes")
})
