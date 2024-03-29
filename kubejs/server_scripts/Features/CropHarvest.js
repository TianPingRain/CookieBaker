/**
 * 右键收获作物
 */

let Block = Java.loadClass("net.minecraft.world.level.block.Block")

BlockEvents.rightClicked((event) => {
    const { block, player, server, level } = event
    if (block.hasTag("minecraft:crops")) {
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        let mcPlayer = player
        if (mcBlock.isMaxAge(blockState)) {
            let loot = Block.getDrops(blockState, mcLevel, block.pos, null, mcPlayer, mcPlayer.getMainHandItem())
            let seedYeeted = false
            for (let i in loot) {
                if (loot[i].id == mcBlock.getCloneItemStack(mcLevel, block.pos, blockState).id) {
                    loot[i].count--
                    seedYeeted = true
                    break
                }
            }
            loot.forEach((item) => {
                Block.popResource(mcLevel, block.pos, item)
            })
            if (seedYeeted) {
                block.set(block.id, { age: "0" })
                server.runCommandSilent(
                    `playsound minecraft:block.crop.break block @a ${block.x} ${block.y} ${block.z}`
                )
            } else {
                mcLevel.destroyBlock(block.pos, true, null, 32)
            }
            player.swing()
            event.cancel()
        }
    }
    if(block.hasTag("destroy:beetroots")){
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        let mcPlayer = player

            let loot = Block.getDrops(blockState, mcLevel, block.pos, null, mcPlayer, mcPlayer.getMainHandItem())
            let seedYeeted = false
            Block.popResource(mcLevel, block.pos, loot)
                mcLevel.destroyBlock(block.pos, true, null, 32)
                block.set("minecraft:beetroots", { age: "0" })
            player.swing()
            event.cancel()
        
    }
})
