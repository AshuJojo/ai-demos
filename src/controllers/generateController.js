const { generateResponse } = require("../services/generateService");

const getResponse = async (req, res) => {
  const { prompt } = req.body;

  const result = await generateResponse(prompt);

  res.send(result);
};

module.exports = { getResponse };
