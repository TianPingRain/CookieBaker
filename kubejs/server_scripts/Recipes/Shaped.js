ServerEvents.recipes((event) => {
    //曲奇碎屑块
    event.shaped("cookies:cookie_chip_block", ["111", "111", "111"], {
        1: "cookies:cookie_chip",
    })
    //曲奇棍
    event.shaped("cookies:cookie_stick", ["  1", " 1 ", "1  "], {
        1: "cookies:cookie_chip_block",
    })
    //曲奇法杖
    event.shaped("cookies:cookie_wand", ["  2", " 1 ", "1  "], {
        1: "cookies:cookie_stick",
        2: "cookies:cookie_chip_block",
    })
})
