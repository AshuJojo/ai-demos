const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");

const MODEL_NAME = "gemini-2.0-flash";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getModel = () => {
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  return model;
};

const getRecipesModel = () => {
  const recipeSchema = {
    description: "List of recipes",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        recipeName: {
          type: SchemaType.STRING,
          description: "Name of the recipe",
          nullable: false,
        },
      },
      required: ["recipeName"],
    },
  };

  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: recipeSchema,
    },
  });

  return model;
};

module.exports = {getModel, getRecipesModel};
