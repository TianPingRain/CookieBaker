// priority: 0
PlayerEvents.loggedIn(event => {
    event.player.paint({
      last_message: {
        type: 'text',
        text: 'No last message',
        scale: 1,
        x: -5,
        y: -4,
        alignX: 'right',
        alignY: 'up',
        draw: 'albottomways'
      }
    })
  })

BlockEvents.rightClicked('minecraft:chest', event =>{
    if(event.player.getMainHandItem()==null){
        event.server.runCommand(`say ${event.block.getInventory().getAllItems()}`)
        event.server.runCommand(`say ${event.block.getInventory().find()}`)
        // event.player.paint({last_message: {text: `Last message: ${event.block.getInventory().getAllItems()}`}})
    }
})
