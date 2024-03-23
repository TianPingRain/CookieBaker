ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:random_block_ticking",
        contextual: [
            {
                type: "location",
                offsetY: 1,
                predicate: {
                    block: {
                        tag: "minecraft:crops", //耕地类作物
                        state: {
                            age: "7",
                        },
                    },
                },
            },
        ],
        post: [
            {
                type: "delay",
                s: 10, //随机刻随机到之后 延迟10秒
            },
            {
                type: "place",
                block: "air", //放置空气
                offsetY: 1,
            },
        ],
        block_in: "farmland",
    })
})
