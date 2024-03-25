/**
 * 右键事件
 */

const $UseOnContext = Java.loadClass("net.minecraft.world.item.context.UseOnContext")
const $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult")

BlockEvents.rightClicked((event) => {
    const { block, player, facing, server, item, hand, level } = event

    // prettier-ignore
    const CookieBlocks = ["cookies:cookie_block1", "cookies:cookie_block2", "cookies:cookie_block3", "cookies:cookie_block4", "cookies:cookie_block5", "cookies:cookie_block6", "cookies:cookie_block7"]

    // prettier-ignore
    const blockpos = [[0, 0, 0],[0, 1, 0],[0, 2, 0],[-2, 3, -2],[-2, 3, -1],[-2, 3, 0],[-2, 3, 1],[-2, 3, 2],[-1, 3, -2],[-1, 3, -1],[-1, 3, 0],[-1, 3, 1],[-1, 3, 2],[0, 3, -2],[0, 3, -1],[0, 3, 0],[0, 3, 1],[0, 3, 2],[1, 3, -2],[1, 3, -1],[1, 3, 0],[1, 3, 1],[1, 3, 2],[2, 3, -2],[2, 3, -1],[2, 3, 0],[2, 3, 1],[2, 3, 2],[-2, 4, -2],[-2, 4, -1],[-2, 4, 0],[-2, 4, 1],[-2, 4, 2],[-1, 4, -2],[-1, 4, -1],[-1, 4, 0],[-1, 4, 1],[-1, 4, 2],[0, 4, -2],[0, 4, -1],[0, 4, 0],[0, 4, 1],[0, 4, 2],[1, 4, -2],[1, 4, -1],[1, 4, 0],[1, 4, 1],[1, 4, 2],[2, 4, -2],[2, 4, -1],[2, 4, 0],[2, 4, 1],[2, 4, 2],[-1, 5, -1],[-1, 5, 0],[-1, 5, 1],[0, 5, -1],[0, 5, 0],[0, 5, 1],[1, 5, -1],[1, 5, 0],[1, 5, 1],[-1, 6, 0],[0, 6, -1],[0, 6, 1],[0, 6, 0],[1, 6, 0]]

    //右键曲奇方块获取曲奇碎屑
    if (hand == "main_hand" && player.mainHandItem.empty && CookieBlocks.includes(block.id)) {
        player.give("cookies:cookie_chip")
        player.swing()
    }

    //曲奇法杖
    if (
        item.id == "cookies:cookie_wand" &&
        player.inventory.find("cookies:cookie_chip") &&
        player.inventory.count("cookies:cookie_chip") >= 4
    ) {
        let randomIndex = Math.floor(Math.random() * CookieBlocks.length)

        let vec3 = new Vec3d(player.rayTrace().hitX, player.rayTrace().hitY, player.rayTrace().hitZ)
        let blockHitResult = new $BlockHitResult(vec3, facing, block.pos, false)
        let ctx = new $UseOnContext(player, hand, blockHitResult)
        let direction = ctx.getClickedFace()

        let { x, y, z } = block[direction]
        let aabb = AABB.of(x, y, z, x + 1, y + 1, z + 1)

        if (
            block[direction].id == "minecraft:air" &&
            level.getEntitiesWithin(aabb).empty &&
            !blockpos.every((pos) => CookieBlocks.includes(block.offset(pos[0], pos[1], pos[2]).id))
        ) {
            block[direction].set(CookieBlocks[randomIndex])
            server.runCommandSilent(`clear ${player.username} cookies:cookie_chip 4`)
            player.playNotifySound("minecraft:block.cake.add_candle", "blocks", 100, 1)
            player.swing()
        }
    }

    //曲奇树 → 橡树
    if (
        item.id == "cookies:cookie_wand" &&
        blockpos.every((pos) => CookieBlocks.includes(block.offset(pos[0], pos[1], pos[2]).id))
    ) {
        blockpos.forEach((pos) => {
            let oak_tree = event.block.offset(pos[0], pos[1], pos[2])
            // prettier-ignore
            if ([[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],].some((p) => p[0] === pos[0] && p[1] === pos[1] && p[2] === pos[2])
            ) {
                oak_tree.set("oak_log") //在这5个位置放置橡木原木
            } else {
                oak_tree.set("oak_leaves") //在其他位置放置树叶
            }
        })
        player.playNotifySound("minecraft:block.grass.place", "blocks", 100, 1) //播放放置树苗的音效
        server.runCommandSilent(`advancement grant ${player.username} only cookies:chapter0/oak_sapling`) //使玩家完成进度
    }
})
