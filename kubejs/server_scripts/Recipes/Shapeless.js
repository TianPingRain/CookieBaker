ServerEvents.recipes((event) => {
    event.shapeless(
        Item.of("minecraft:cocoa_beans", 3), // arg 1: output
        ["cookies:cookie_block4"]
    )
    event.shaped(Item.of("cookies:cookie_block1", 4), [
        'XX',
        'XX'
      ], {
        X: "cookies:cookie_chip"
    })
    //曲奇块分解
    event.shaped(Item.of("cookies:cookie_chip", 9), [
        'X'
      ], {
        X: "cookies:cookie_chip_block"
    })
})
