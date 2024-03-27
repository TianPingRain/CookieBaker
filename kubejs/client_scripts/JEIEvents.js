JEIAddedEvents.registerRecipeCatalysts((event) => {
    let helper = event.data.getJeiHelpers()
    let recipeType = helper.getRecipeType("create:sandpaper_polishing")
    if (recipeType.isPresent()) {
        event.data.addRecipeCatalyst("cookies:cookie_sand_paper", recipeType.get())
    }
})
