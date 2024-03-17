// Listen to item registry event
StartupEvents.registry('item', e => {    
    // If you want to specify a different texture location you can do that too, like this:
    e.create('cookies:uncooked_cookie').texture('cookies:item/uncooked_cookie') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
    //e.create('BlueBerrycookie').texture('cookies:item/BlueBerrycookie')

  })