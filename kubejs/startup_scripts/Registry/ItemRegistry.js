StartupEvents.registry("item", (event) => {
    event.create("cookies:uncooked_cookie").texture("cookies:item/uncooked_cookie")
    event.create("create:create_manual").texture("create:item/goggles").color(0xff0000).displayName("机械动力指南")
    event.create("cookies:cookie_chip").displayName("曲奇碎屑")
    event
        .create("cookies:cookie_update1")
        .displayName("一级曲奇升级")
        .texture("minecraft:item/cookie") //暂定
        .color(0, 0xff0000)
})