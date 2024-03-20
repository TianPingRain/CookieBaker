PlayerEvents.loggedIn((event) => {
    const { player } = event

    //玩家第一次登入
    if (!player.stages.has("started")) {
        player.stages.add("started")
        player.give("crafting_on_a_stick:crafting_table")
        player.give("30x minecraft:apple")

        player.persistentData.cookie_submit = 0
    }

    //左上角的曲奇图标
    player.paint({
        example_rectangle: {
            type: "atlas_texture",
            scale: 1,
            texture: "minecraft:item/cookie",
            x: 4,
            y: 4,
            alignX: "left",
            alignY: "top",
            draw: "ingame",
        },
        cookie_counter: {
            type: "text",
            text: "0",
            scale: 1,
            x: 16,
            y: 14,
            alignX: "left",
            alignY: "top",
            draw: "ingame",
        },
    })
})

PlayerEvents.tick((event) => {
    const { player } = event
    //曲奇提交数
    player.paint({ cookie_counter: { text: `${player.persistentData.cookie_submit}` } })
})
