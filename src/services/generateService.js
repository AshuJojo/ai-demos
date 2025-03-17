const getModel = require("../utils/geminiUtils");

const generateSingleResponse = async (prompt) => {
  try {
    const model = getModel();

    if (!prompt) {
      return { error: "Prompt is required" };
    }

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return error;
  }
};

module.exports = { generateSingleResponse };
