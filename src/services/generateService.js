const {getModel, getConvoIceBreakerModel} = require("../utils/geminiUtils");

const generateSingleResponse = async (prompt) => {
  try {
    const model = getModel();

    if (!prompt) {
      return { error: "Prompt is required" };
    }

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return error;
  }
};

const generateStructuredResponse = async (prompt) => {
  try {
    const convoIceBreakerModel = getConvoIceBreakerModel();

    const result = await convoIceBreakerModel.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return error;
  }
};

module.exports = { generateSingleResponse, generateStructuredResponse };
