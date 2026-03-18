const express = require("express");
const { add, subtract, multiply, divide } = require("./calculator");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "TeamCity Demo App", status: "running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/calculate", (req, res) => {
  const { a, b, operation } = req.body;

  const ops = { add, subtract, multiply, divide };
  const fn = ops[operation];

  if (!fn) {
    return res.status(400).json({ error: `Unknown operation: ${operation}` });
  }

  try {
    const result = fn(a, b);
    res.json({ result });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
