const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const names = ['Alice', 'Aziz', 'Said', 'Abdou', 'Anass', 'Afaff', 'George', 'Hannah'];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/generate-name', (req, res) => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    res.json({ name: randomName });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
