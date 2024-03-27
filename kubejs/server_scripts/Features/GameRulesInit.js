/**
 * 初始化游戏规则
 */
ServerEvents.loaded((event) => {
    const { server } = event
    if (server.persistentData.GameRulesInit) return
    server.persistentData.GameRulesInit = true

    server.gameRules.set("disableElytraMovementCheck", true)
    server.gameRules.set("drowningDamage", false)
    server.gameRules.set("fallDamage", false)
    server.gameRules.set("disableRaids", true)
    server.gameRules.set("doInsomnia", false)
    server.gameRules.set("reducedDebugInfo", false)
    server.gameRules.set("keepInventory", true)
    server.gameRules.set("doPatrolSpawning", false)
    server.gameRules.set("commandBlockOutput", false)
    server.gameRules.set("doTraderSpawning", false)
    server.gameRules.set("waterSourceConversion", false)
    server.gameRules.set("spawnRadius", 1)
})
