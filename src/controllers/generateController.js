const generateResponse = (req, res) => {
  const { prompt } = req.body;

  console.log("prompt", prompt);

  res.send(prompt);
};

module.exports = { generateResponse };
