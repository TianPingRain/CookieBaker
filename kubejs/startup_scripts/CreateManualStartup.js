/**
 * 机械动力指南
 */

if (Platform.isClientEnvironment()) {
    let CLIENTRAWINPUTEVENT = Java.loadClass("dev.architectury.event.events.client.ClientRawInputEvent")
    ArchEvents.registry((event) => {
        event.register("ClientRawInputEvent.MouseScrolled", CLIENTRAWINPUTEVENT, "MOUSE_SCROLLED")
    })
}
