const { GoogleGenerativeAI } = require("@google/generative-ai");

const getModel = () => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    return model;
}

module.exports = getModel;