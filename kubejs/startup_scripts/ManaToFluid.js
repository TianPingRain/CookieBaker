//魔力转液体
CapabilityEvents.blockEntity((event) => {
  event.attach(
    "create:fluid_tank",
    BotaniaCapabilityBuilder.MANA.blockEntity()
      .receiveMana((be, amount) => {
        let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
        fluid.fill(Fluid.of("kubejs:mana", 0.1 * amount), "EXECUTE");
      })
      .getCurrentMana((be) => {
        let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
        return fluid.getFluidInTank(0).getAmount();
      })
      .isFull((be) => {
        let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
        return fluid.getTankCapacity(0) <= fluid.getFluidInTank(0).getAmount();
      })
  );
});
