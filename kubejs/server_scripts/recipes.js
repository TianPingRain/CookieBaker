ServerEvents.recipes((event) => {
    event.shapeless(
        Item.of("minecraft:cocoa_beans", 3), // arg 1: output
        ["cookies:cookie_block4"]
    )
})
