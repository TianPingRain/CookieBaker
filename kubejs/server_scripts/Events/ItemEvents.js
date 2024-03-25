/**
 * 物品事件
 */

ItemEvents.foodEaten("minecraft:cookie", (event) => {
    event.player.persistentData.cookie_submit = event.player.persistentData.cookie_submit + 1
})
