BlockEvents.rightClicked("cookies:cookie_block1", (event) => {
    //暂定 睡了
    const { player, block, item } = event
    if (item.id == "cookies:cookie_update1") {
        block.set("cookies:cookie_block1_update1")
        player.tell(Text.of("曲奇已升级！").green()) //暂定硬编码
        player.tell(Text.of("曲奇产出速率：10秒 → 8秒").green())
        player.tell(Text.of("曲奇产出效率：10个 → 20个").green())
        player.runCommandSilent("particle minecraft:happy_villager ~ ~ ~ ~ ~ ~ 1 100")
        player.swing()
        item.count--
    }
})
