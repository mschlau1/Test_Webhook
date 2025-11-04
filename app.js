const express = require('express');
const app = express();

// Tell Express to trust the X-Forwarded-* headers from proxies
app.set('trust proxy', true);

app.get('/', (req, res) => {
  // Express will automatically parse X-Forwarded-For when 'trust proxy' is true
  const ip = req.ip;
  const allIps = req.ips; // if multiple proxies are in the chain
  res.send({
    originating_ip: ip,
    forwarded_chain: allIps
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});