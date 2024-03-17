// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent",event=>{
    event.cancel()
})