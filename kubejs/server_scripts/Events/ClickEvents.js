const $UseOnContext = Java.loadClass("net.minecraft.world.item.context.UseOnContext")
const $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult")

BlockEvents.rightClicked((event) => {
    const { block, player, facing, server, item } = event

    if (
        item.id == "cookies:cookie_wand" &&
        player.inventory.find("cookies:cookie_chip") &&
        player.inventory.count("cookies:cookie_chip") >= 4
    ) {
        let CookieBlocks = [
            "cookies:cookie_block1",
            "cookies:cookie_block2",
            "cookies:cookie_block3",
            "cookies:cookie_block4",
            "cookies:cookie_block5",
            "cookies:cookie_block6",
            "cookies:cookie_block7",
        ]
        let randomIndex = Math.floor(Math.random() * CookieBlocks.length)

        let vec3 = new Vec3d(player.rayTrace().hitX, player.rayTrace().hitY, player.rayTrace().hitZ)
        let blockHitResult = new $BlockHitResult(vec3, facing, block.pos, false)
        let ctx = new $UseOnContext(player, event.hand, blockHitResult)
        let direction = ctx.getClickedFace()

        if (block[direction].id == "minecraft:air") {
            block[direction].set(CookieBlocks[randomIndex])
            server.runCommandSilent(`clear ${player.username} cookies:cookie_chip 4`)
            server.runCommandSilent(
                `playsound minecraft:block.cake.add_candle block @a ${block.x} ${block.y} ${block.z}`
            )
            player.swing()
        }
    }

    //曲奇树 → 橡树
    let input = [
        "cookies:cookie_block1",
        "cookies:cookie_block2",
        "cookies:cookie_block3",
        "cookies:cookie_block4",
        "cookies:cookie_block5",
        "cookies:cookie_block6",
        "cookies:cookie_block7",
    ]
    let blockpos = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 2, 0],
        [-2, 3, -2],
        [-2, 3, -1],
        [-2, 3, 0],
        [-2, 3, 1],
        [-2, 3, 2],
        [-1, 3, -2],
        [-1, 3, -1],
        [-1, 3, 0],
        [-1, 3, 1],
        [-1, 3, 2],
        [0, 3, -2],
        [0, 3, -1],
        [0, 3, 0],
        [0, 3, 1],
        [0, 3, 2],
        [1, 3, -2],
        [1, 3, -1],
        [1, 3, 0],
        [1, 3, 1],
        [1, 3, 2],
        [2, 3, -2],
        [2, 3, -1],
        [2, 3, 0],
        [2, 3, 1],
        [2, 3, 2],
        [-2, 4, -2],
        [-2, 4, -1],
        [-2, 4, 0],
        [-2, 4, 1],
        [-2, 4, 2],
        [-1, 4, -2],
        [-1, 4, -1],
        [-1, 4, 0],
        [-1, 4, 1],
        [-1, 4, 2],
        [0, 4, -2],
        [0, 4, -1],
        [0, 4, 0],
        [0, 4, 1],
        [0, 4, 2],
        [1, 4, -2],
        [1, 4, -1],
        [1, 4, 0],
        [1, 4, 1],
        [1, 4, 2],
        [2, 4, -2],
        [2, 4, -1],
        [2, 4, 0],
        [2, 4, 1],
        [2, 4, 2],
        [-1, 5, -1],
        [-1, 5, 0],
        [-1, 5, 1],
        [0, 5, -1],
        [0, 5, 0],
        [0, 5, 1],
        [1, 5, -1],
        [1, 5, 0],
        [1, 5, 1],
        [-1, 6, 0],
        [0, 6, -1],
        [0, 6, 1],
        [0, 6, 0],
        [1, 6, 0],
    ]
    if (
        item.id == "cookies:cookie_wand" &&
        blockpos.every((pos) => input.includes(block.offset(pos[0], pos[1], pos[2]).id))
    ) {
        blockpos.forEach((pos) => {
            let oak_tree = event.block.offset(pos[0], pos[1], pos[2])
            if (
                [
                    [0, 0, 0],
                    [0, 1, 0],
                    [0, 2, 0],
                    [0, 3, 0],
                    [0, 4, 0],
                    [0, 5, 0],
                ].some((p) => p[0] === pos[0] && p[1] === pos[1] && p[2] === pos[2])
            ) {
                oak_tree.set("oak_log") //在这5个位置放置橡木原木
            } else {
                oak_tree.set("oak_leaves") //在其他位置放置树叶
            }
        })
        server.runCommandSilent(`playsound minecraft:block.grass.place block @a ${block.x} ${block.y} ${block.z}`) //播放放置树苗的音效
    }
})
