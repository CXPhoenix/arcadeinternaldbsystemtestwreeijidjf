function deleteAllData () {
    blockSettings.clear()
    refreshScreen()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    record = game.askForString("Your name?", 12)
    blockSettings.writeNumber(record, count)
    count += 1
    createRecords()
})
function showRecords () {
    for (let value of blockSettings.list()) {
        recorded = textsprite.create("" + blockSettings.readNumber(value) + ":  " + value)
        recorded.setPosition(60, nowY)
        recorded.left = 50
        nowY += 15
    }
}
function refreshScreen () {
    for (let value of sprites.allOfKind(recorded.kind())) {
        value.destroy()
        showRecords()
    }
    nowY = 5
    count = 1
    outOfScreen = false
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (outOfScreen) {
        if (sprites.allOfKind(recorded.kind())[0].y < 5) {
            for (let value of sprites.allOfKind(recorded.kind())) {
                value.y += 15
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    deleteAllData()
})
function createRecords () {
    recorded = textsprite.create("" + blockSettings.readNumber(blockSettings.list()[blockSettings.list().length - 1]) + ":  " + blockSettings.list()[blockSettings.list().length - 1])
    recorded.setPosition(60, nowY)
    recorded.left = 50
    nowY += 15
    if (nowY > 105) {
        outOfScreen = true
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (outOfScreen) {
        if (sprites.allOfKind(recorded.kind())[sprites.allOfKind(recorded.kind()).length - 1].y >= 110) {
            for (let value of sprites.allOfKind(recorded.kind())) {
                value.y += -15
            }
        }
    }
})
let recorded: TextSprite = null
let record = ""
let nowY = 0
let count = 0
let outOfScreen = false
outOfScreen = false
count = 1
nowY = 5
if (blockSettings.list().length != 0) {
    count = blockSettings.readNumber(blockSettings.list()[blockSettings.list().length - 1]) + 1
    if (blockSettings.list().length > 7) {
        outOfScreen = true
    }
}
let uiBanner = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.Player)
uiBanner.setPosition(80, 115)
let uiDescript = textsprite.create("press A to record..", 0, 15)
uiDescript.setPosition(80, 113)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
uiDescript.setKind(SpriteKind.Player)
uiBanner.z = 998
uiDescript.z = 999
showRecords()