/**
 * 配方添加 - 曲奇提交站
 */

ServerEvents.recipes((event) => {
    event.recipes.custommachinery
        .custom_machine("cookies:cookie_submiter", 100)
        .requireItem(Item.of("minecraft:cookie"))
        .requireFunctionToStart((ctx) => {
            if (!ctx.machine.owner) {
                return ctx.error("Machine has no owner!")
            } else {
                return ctx.success()
            }
        })
        .requireFunctionOnEnd((ctx) => {
            if (!ctx.machine.owner) {
                console.log("Machine has no owner!")
            } else {
                ctx.machine.owner.persistentData.cookie_submit = ctx.machine.owner.persistentData.cookie_submit + 1
            }
            return ctx.success()
        })
})
