const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({process.env.GEMINI_API_KEY});

const getMessage = async (message) => {

    const interaction = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input: message
    });

    return interaction.output_text
}


module.exports = getMessage
