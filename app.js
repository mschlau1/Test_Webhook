const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Get client IP address
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`Your IP address is: ${ip}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
