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
    event.shaped(Item.of("minecraft:oak_sapling", 1), [
    'XXX',
    ' X ',
    ' X '
    ], {
    X: "cookies:cookie_chip"
    })
    event.shaped(Item.of("minecraft:dirt", 4), [
    'XY',
    'YX'
    ], {
    X: "cookies:cookie_chip",
    Y: "minecraft:oak_sapling"
    })
    event.shaped(Item.of("minecraft:cobblestone", 4), [
    'XY',
    'YX'
    ], {
    X: "cookies:cookie_chip",
    Y: "minecraft:oak_planks"
})

})
