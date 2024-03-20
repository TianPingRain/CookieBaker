BlockEvents.rightClicked("minecraft:chest", (event) => {
    if (event.player.getMainHandItem() == null) {
        event.server.runCommand(`say ${event.block.getInventory().getAllItems()}`)
        event.server.runCommand(`say ${event.block.getInventory().find()}`)
        // event.player.paint({last_message: {text: `Last message: ${event.block.getInventory().getAllItems()}`}})
    }
})

BlockEvents.rightClicked((event) => {
    const { item, block, player, server } = event
    if (item.id == "cookies:cookie_wand") return
    player.inventory.allItems.forEach((item) => {
        if (item.id == "cookies:cookie_chip") {
            const CookieBlocks = [
                "cookies:cookie_block1",
                "cookies:cookie_block2",
                "cookies:cookie_block3",
                "cookies:cookie_block4",
                "cookies:cookie_block5",
                "cookies:cookie_block6",
                "cookies:cookie_block7",
            ]
            const randomIndex = Math.floor(Math.random() * CookieBlocks.length)

            // 判断当前方向并返回相反方向
            let oppositeFacing
            switch (player.facing) {
                case "north":
                    oppositeFacing = "south"
                    break
                case "south":
                    oppositeFacing = "north"
                    break
                case "east":
                    oppositeFacing = "west"
                    break
                case "west":
                    oppositeFacing = "east"
                    break
                case "up":
                    oppositeFacing = "down"
                    break
                case "down":
                    oppositeFacing = "up"
                    break
                default:
                    oppositeFacing = player.facing
            }

            block[oppositeFacing].set(CookieBlocks[randomIndex])
            server.runCommandSilent(`clear ${player.username} cookies:cookie_chip 4`)
            player.swing()
        }
    })
})

// ItemEvents.rightClicked("cookies:cookie_wand", (event) => {
//     const { target, player } = event
//     const CookieBlocks = [
//         "cookies:cookie_block1",
//         "cookies:cookie_block2",
//         "cookies:cookie_block3",
//         "cookies:cookie_block4",
//         "cookies:cookie_block5",
//         "cookies:cookie_block6",
//         "cookies:cookie_block7",
//     ]

//     player.inventory.allItems.forEach((item) => {
//         if (item.id == "cookies:cookie_chip") {
//             const randomIndex = Math.floor(Math.random() * CookieBlocks.length)
//             target.block[target.facing].set(CookieBlocks[randomIndex])
//             item.count -= 4
//             player.swing()
//         }
//     })
// })
