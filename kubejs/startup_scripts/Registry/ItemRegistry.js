StartupEvents.registry("item", (event) => {
    event.create("cookies:uncooked_cookie").texture("cookies:item/uncooked_cookie")
    event.create("create:create_manual").displayName("机械动力指南")
    event.create("cookies:cookie_chip").displayName("曲奇碎屑")
    event.create("cookies:cookie_chip_block").displayName("曲奇碎屑块")
    event.create("cookies:cookie_stick").displayName("曲奇棍")
    event.create("cookies:cookie_wand").glow(true)
    event
        .create("cookies:cookie_update1")
        .displayName("一级曲奇升级")
        .texture("minecraft:item/cookie") //暂定
        .color(0, 0xff0000)
})
