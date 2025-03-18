const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");

const MODEL_NAME = "gemini-2.0-flash";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getModel = () => {
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  return model;
};

const getConvoIceBreakerModel = () => {
  const convoIceBreakerSchema = {
    description: "List of ice breaker phrases",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        antiAwkwardness: {
          type: SchemaType.STRING,
          description: `Conversation ice breaker humours phrase that end the awkward silence between two. For example: “Uh-oh, we've hit the awkward silence zone. Let me save you both with a random fact: Did you know lobsters communicate by peeing at each other? You're welcome.”`,
          nullable: false,
        },
        roastmaster: {
          type: SchemaType.STRING,
          description: `Roast other user with a humours ice breaker phrase. For example: “I see we've got two introverts trying to out-introvert each other. Should I just start talking to myself?”`,
          nullable: false,
        },
      },
      required: ["antiAwkwardness","roastmaster"],
    },
  };

  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: convoIceBreakerSchema,
    },
  });

  return model;
};

module.exports = {getModel, getConvoIceBreakerModel};
