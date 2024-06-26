/**
 * 物品注册
 */

StartupEvents.registry("item", (event) => {
    event.create("cookies:uncooked_cookie").texture("cookies:item/uncooked_cookie")
    event.create("create:create_manual").displayName("机械动力指南")
    event.create("cookies:cookie_chip").displayName("曲奇碎屑")
    event.create("cookies:cookie_chip_block").displayName("曲奇碎屑块")
    event.create("cookies:cookie_stick").displayName("曲奇棍")
    event.create("cookies:putrefaction").displayName("腐烂物")
    event.create("cookies:cookie_wand").glow(true).displayName("曲奇法杖").unstackable()
    event.create("cookies:cookie_sand_paper", "create:sandpaper").displayName("曲奇砂纸").maxDamage(10)
    event.create("cookies:wooden_shears", "shears").displayName("木剪刀").maxDamage(50)
})
