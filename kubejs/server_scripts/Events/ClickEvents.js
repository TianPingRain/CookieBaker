BlockEvents.rightClicked("minecraft:chest", (event) => {
    if (event.player.getMainHandItem() == null) {
        event.server.runCommand(`say ${event.block.getInventory().getAllItems()}`)
        event.server.runCommand(`say ${event.block.getInventory().find()}`)
        // event.player.paint({last_message: {text: `Last message: ${event.block.getInventory().getAllItems()}`}})
    }
})

ItemEvents.rightClicked("cookies:cookie_wand", (event) => {
    const { target } = event
    const CookieBlocks = [
        "cookies:cookie_block1",
        "cookies:cookie_block2",
        "cookies:cookie_block3",
        "cookies:cookie_block4",
        "cookies:cookie_block5",
        "cookies:cookie_block6",
        "cookies:cookie_block7",
    ]

    event.player.inventory.allItems.forEach((item) => {
        if (item.id == "cookies:cookie_chip") {
            const randomIndex = Math.floor(Math.random() * CookieBlocks.length)
            target.block[target.facing].set(CookieBlocks[randomIndex])
            item.count -= 4
        }
    })
})
