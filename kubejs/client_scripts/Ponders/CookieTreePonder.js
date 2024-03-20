Ponder.registry((ponder) => {
    ponder.create("minecraft:oak_sapling").scene("cookie_tree", "Frist Tree", "cookies:cookie_tree", (scene, util) => {
        scene.showBasePlate()
        scene.scaleSceneView(0.8)
        scene.setSceneOffsetY(-2)
        for (let y = 1; y <= 3; y++) {
            scene.world.showSection([2, y, 2], Facing.DOWN)
            scene.idle(10)
        }

        for (let x = 0; x <= 4; x++) {
            for (let z = 0; z <= 4; z++) {
                scene.world.showSection([x, 4, z], Facing.DOWN)
            }
            scene.idle(3)
        }
        for (let x = 0; x <= 4; x++) {
            for (let z = 0; z <= 4; z++) {
                scene.world.showSection([x, 5, z], Facing.DOWN)
            }
            scene.idle(3)
        }
        for (let x = 0; x <= 4; x++) {
            for (let z = 0; z <= 4; z++) {
                scene.world.showSection([x, 6, z], Facing.DOWN)
            }
            scene.idle(3)
        }
        for (let x = 0; x <= 4; x++) {
            for (let z = 0; z <= 4; z++) {
                scene.world.showSection([x, 7, z], Facing.DOWN)
            }
            scene.idle(3)
        }
        scene.showControls(20, [2, 1.5, 2], "left").rightClick().withItem("cookies:cookie_wand")
        scene.idle(30)
        scene.world.setBlocks([2, 1, 2, 2, 3, 2], true, "oak_log")
        scene.world.setBlocks([4, 4, 0, 0, 5, 4], true, "oak_leaves")
        scene.world.setBlocks([3, 6, 1, 1, 6, 3], true, "oak_leaves")
        let LeavesPos = [
            [3, 7, 2],
            [2, 7, 2],
            [1, 7, 2],
            [2, 7, 1],
            [2, 7, 3],
        ]
        LeavesPos.forEach((block) => {
            scene.world.setBlock(block, "oak_leaves", true)
        })
    })
})
