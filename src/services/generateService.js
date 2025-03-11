const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateResponse = async (prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    if (!prompt) {
      return { error: "Prompt is required" };
    }

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    console.log("result", result);
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return error;
  }
};

module.exports = { generateResponse };
