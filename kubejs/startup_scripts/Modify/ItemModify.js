/**
 * 物品属性修改
 */

ItemEvents.modification((event) => {
    event.modify("minecraft:cookie", (item) => {
        item.foodProperties = (food) => {
            food.alwaysEdible()
        }
    })
})
