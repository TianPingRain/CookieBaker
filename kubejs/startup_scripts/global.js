Platform.getInfo("cookies").name = "Cookies++"

/** @param {Internal.BlockEntityJS} be */
//欢迎来到史山
global.cookie = (be) => {
    const { level, blockPos, x, y, z } = be
    const block = level.getBlock(blockPos)

    //下面是相对于曲奇中心的偏移坐标
    let Cookie1Pos = [
        [3, 0, 0],
        [3, 0, 1],
        [2, 0, 1],
        [4, 0, -1],
        [5, 0, -2],
        [5, 0, -3],
        [5, 0, -4],
        [4, 0, -4],
        [3, 0, -4],
        [2, 0, -4],
        [1, 0, -4],
        [0, 0, -4],
        [2, 0, -3],
        [1, 0, -5],
        [0, 0, -5],
        [-1, 0, -5],
        [-2, 0, -5],
        [-3, 0, -4],
        [-4, 0, -4],
        [-4, 0, -3],
        [-5, 0, -3],
        [-1, 0, -1],
        [-2, 0, -1],
        [-4, 0, -1],
        [-6, 0, -2],
        [-6, 0, 0],
        [-6, 0, 1],
        [-4, 0, 1],
        [-4, 0, 2],
        [-5, 0, 2],
        [-3, 0, 2],
        [-4, 0, 3],
        [-1, 0, 2],
        [-2, 0, 4],
        [-1, 0, 4],
        [0, 0, 4],
        [1, 0, 4],
        [3, 0, 4],
        [5, 0, 3],
        [6, 0, 2],
        [5, 0, 1],
        [7, 0, 1],
        [7, 0, 0],
        [7, 0, -1],
        [7, 0, -2],
    ]

    let Cookie2Pos = [
        [1, 0, 0],
        [2, 0, 0],
        [2, 0, -1],
        [2, 0, -2],
        [3, 0, -3],
        [4, 0, -3],
        [4, 0, -2],
        [1, 0, -3],
        [0, 0, -3],
        [-1, 0, -3],
        [-2, 0, -3],
        [-3, 0, -3],
        [-1, 0, -2],
        [-2, 0, -2],
        [-4, 0, -2],
        [-5, 0, -2],
        [-3, 0, -1],
        [-3, 0, 0],
        [-3, 0, 1],
        [-4, 0, 0],
        [-5, 0, 0],
        [-5, 0, 1],
        [1, 0, 1],
        [0, 0, 1],
        [-1, 0, 1],
        [-1, 0, 0],
        [-2, 0, 2],
        [-2, 0, 3],
        [-1, 0, 3],
        [0, 0, 3],
        [1, 0, 3],
        [2, 0, 3],
        [3, 0, 3],
        [4, 0, 3],
        [2, 0, 2],
        [3, 0, 2],
        [5, 0, 2],
        [4, 0, 1],
        [4, 0, 0],
        [5, 0, 0],
        [5, 0, -1],
        [6, 0, -1],
        [6, 0, -2],
        [6, 0, 1],
    ]

    let Cookie3Pos = [
        [0, 0, 5],
        [1, 0, 5],
        [2, 0, 5],
        [3, 0, 5],
        [4, 0, 4],
        [5, 0, 4],
        [6, 0, 3],
        [7, 0, 2],
        [-1, 0, 5],
        [-2, 0, 5],
        [-3, 0, 4],
        [-4, 0, 4],
        [-5, 0, 3],
        [-6, 0, 2],
    ]

    let Cookie4Pos = [
        [0, 0, -2],
        [-2, 0, 0],
        [0, 0, 2],
        [3, 0, -2],
        [6, 0, 0],
        [-2, 0, -4],
        [-6, 0, -1],
        [2, 0, -5],
    ]

    let Cookie5Pos = [
        [0, 0, -1],
        [4, 0, 2],
        [6, 0, -3],
        [-2, 0, 1],
        [-3, 0, -2],
        [-3, 0, 3],
        [-5, 0, -1],
    ]

    let Cookie6Pos = [
        [1, 0, -1],
        [1, 0, -2],
        [3, 0, -1],
        [1, 0, 2],
        [-1, 0, -4],
        [2, 0, 4],
        [3, 0, -5],
    ]

    let Cookie7Pos = [
        [-6, 0, 3],
        [-5, 0, 4],
        [-4, 0, 5],
        [-3, 0, 5],
        [-2, 0, 6],
        [-1, 0, 6],
        [0, 0, 6],
        [1, 0, 6],
        [2, 0, 6],
        [3, 0, 6],
        [4, 0, 5],
        [5, 0, 5],
        [6, 0, 4],
        [7, 0, 3],
    ]

    if (
        Cookie1Pos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id === "cookies:cookie_block1") &&
        Cookie2Pos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id === "cookies:cookie_block2") &&
        Cookie3Pos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id === "cookies:cookie_block3") &&
        Cookie4Pos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id === "cookies:cookie_block4") &&
        Cookie5Pos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id === "cookies:cookie_block5") &&
        Cookie6Pos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id === "cookies:cookie_block6") &&
        Cookie7Pos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id === "cookies:cookie_block7")
    ) {
        if (block.id == "cookies:cookie_block1") {
            //一次10个 感觉上这个量应该调小点
            for (let i = 0; i < 10; i++) {
                let Item = block.createEntity("item")
                Item.item = "cookie" //输出的物品id
                Item.x = Math.random() * 7 - 3 + x
                Item.y = 1 + y
                Item.z = Math.random() * 7 - 3 + z
                Item.spawn()
            }
        }
        //升级后的
        if (block.id == "cookies:cookie_block1_update1") {
            //1次20个 感觉上这个量应该调小点
            for (let i = 0; i < 20; i++) {
                let Item = block.createEntity("item")
                Item.item = "cookie"
                Item.x = Math.random() * 7 - 3 + x
                Item.y = 1 + y
                Item.z = Math.random() * 7 - 3 + z
                Item.spawn()
            }
        }
    }
}
