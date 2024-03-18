// priority: 0
PlayerEvents.loggedIn((event) => {
    if (!event.player.stages.has("started")) {
        event.player.stages.add("started")
        event.player.give("minecraft:stone_sword")
        event.player.give(Item.of("minecraft:stone_pickaxe", "{Damage: 10}"))
        event.player.give("30x minecraft:apple")

        event.player.persistentData.cookie_submit = 0
    }
})
