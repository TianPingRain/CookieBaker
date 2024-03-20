/**
 * 杂务
 */

//自定义 模组显示名称
Platform.getInfo("cookies").name = "Cookies++"

//取消下界传送门开启事件
ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent", (event) => {
    event.cancel()
})
