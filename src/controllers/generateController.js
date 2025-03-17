const {
  generateSingleResponse,
  generateStructuredResponse,
} = require("../services/generateService");

const getSingleResponse = async (req, res) => {
  const { prompt } = req.body;

  const result = await generateSingleResponse(prompt);

  res.send(result);
};

const getStructuredResponse = async (req, res) => {
  const { prompt } = req.body;

  const result = await generateStructuredResponse(prompt);
  
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
};

module.exports = { getSingleResponse, getStructuredResponse };
