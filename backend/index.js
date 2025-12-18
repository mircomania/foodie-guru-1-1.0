require('dotenv').config();
const express = require('express');
const cors = require('cors');

const submitRoutes = require('./routes/submit');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/api', submitRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
