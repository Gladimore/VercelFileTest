import express from 'express';
import modelRoutes from './api/model.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Use the API routes
app.use('/api/model', modelRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});