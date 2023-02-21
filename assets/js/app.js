import {
    captureBtn,
    startBtn,
    closeBtn,
    player,
    switchBtn,
    canvas,
    restartBtn,
    mode,
} from "./constants.js"

import { openCamera, closeCamera } from "./camera.js"


switchBtn.addEventListener("click", () => {
    mode = mode === "environment" ? "user" : "environment"
    player.classList.add("d-none")
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }

    openCamera()

})

startBtn.addEventListener("click", () => {
    openCamera()

})
captureBtn.addEventListener("click", () => {
    console.log("capture button clicked")

    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0, 0, canvas.height, canvas.width)
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    restart.classList.remove("d-none")

})
restartBtn.addEventListener("click", () => {
    closeCamera()
    openCamera()
})
closeBtn.addEventListener("click", () => {
    closeCamera()

})
