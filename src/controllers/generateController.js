const { generateSingleResponse } = require("../services/generateService");

const getSingleResponse = async (req, res) => {
  const { prompt } = req.body;

  const result = await generateSingleResponse(prompt);

  res.send(result);
};

module.exports = { getSingleResponse };
