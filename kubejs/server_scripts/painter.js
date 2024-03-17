// priority: 0
PlayerEvents.loggedIn(event => {
    event.player.paint({
        example_rectangle: {
        type: 'atlas_texture',
        scale: 1,
        texture: 'minecraft:item/cookie',
        x: 4,
        y: 4,
        alignX: 'left',
        alignY: 'top',
        draw: 'ingame'
      },
      cookie_counter: {
        type: 'text',
        text: '0',
        scale: 1,
        x: 16,
        y: 14,
        alignX: 'left',
        alignY: 'top',
        draw: 'ingame'
      }
    })
  })
  
  PlayerEvents.chat(event => {
    // Updates example_rectangle x value and last_message text value to last message + contents from event
    event.player.paint({cookie_counter: {text: `Last message: ${event.message}`}})
    
  })

  PlayerEvents.tick(event=>{
    event.player.paint({cookie_counter: {text: `${event.player.persistentData.cookie_submit}`}})
  })