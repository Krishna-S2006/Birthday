const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory (Birthday project folder)
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for any unmatched routes (for SPA support if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
