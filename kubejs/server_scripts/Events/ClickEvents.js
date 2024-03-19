BlockEvents.rightClicked("minecraft:chest", (event) => {
    if (event.player.getMainHandItem() == null) {
        event.server.runCommand(`say ${event.block.getInventory().getAllItems()}`)
        event.server.runCommand(`say ${event.block.getInventory().find()}`)
        // event.player.paint({last_message: {text: `Last message: ${event.block.getInventory().getAllItems()}`}})
    }
})
