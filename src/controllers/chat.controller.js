const getMessage = require("../services/gemini.service")
const chat = async (req, res) => {

    const message = req.body.message
    const response = await getMessage(message)

    console.log(response)

    res.status(200).json({
        message: "Successfully received the AI response!",
        response: response
    })

}

module.exports = { chat }