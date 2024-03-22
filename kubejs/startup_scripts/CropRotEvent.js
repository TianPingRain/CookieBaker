const $CropBlock = Java.loadClass("net.minecraft.world.level.block.CropBlock")
const $CocoaBlock = Java.loadClass("net.minecraft.world.level.block.CocoaBlock")
const $BerryBlock = Java.loadClass("net.minecraft.world.level.block.SweetBerryBushBlock")
// 特殊的作物待补充

/** @param {Internal.BlockEvent$CropGrowEvent$Post} event */
global.CropGrowEvent = (event) => {
    const { level, pos } = event
    const block = level.getBlock(pos)

    if (
        (block.hasTag("minecraft:crops") && block.blockState.getValue($CropBlock.AGE) == $CropBlock.MAX_AGE) ||
        (block.id == "minecraft:cocoa" && block.blockState.getValue($CocoaBlock.AGE) == $CocoaBlock.MAX_AGE) ||
        (block.id == "minecraft:sweet_berry_bush" && block.blockState.getValue($BerryBlock.AGE) == $BerryBlock.MAX_AGE)
    ) {
        //10秒后
        level.server.scheduleInTicks(5 * 20, () => {
            //替换为空气
            block.set("air")
        })
    }
}

ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$CropGrowEvent$Post", global.CropGrowEvent)

// /** @param {Internal.BonemealEvent} event */
// global.BonemealEvent = (event) => {
//     const { block } = event
//     if (block.getValue($CropBlock.AGE) == $CropBlock.MAX_AGE) {
//         event.entity.tell("1")
//     }
// }
// ForgeEvents.onEvent("net.minecraftforge.event.entity.player.BonemealEvent", global.BonemealEvent)
