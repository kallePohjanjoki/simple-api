const express = require('express');
const app = express();

// Määritä portti. 3000 on yleinen oletus Node.js-sovelluksille.
const PORT = 3000;

// Määritä reitti (route)
app.get('/', (req, res) => {
  res.json({
    message: 'Tervehdys pilvestä Tehtävä 3.2!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Palvelin kuuntelee porttia ${PORT}`);
});
