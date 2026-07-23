const express = require("express")
const chatController = require("../controllers/chat.controller")

router = express.Router()

router.post("/message", chatController.chat)

module.exports = router