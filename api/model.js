import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'model.json'); // Using process.cwd()

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(fileContent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read the file' });
  }
});

export default router;