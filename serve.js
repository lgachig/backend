const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');  // Importar cors
const bansegu = require('./rutas/finclu');
const usuarios = require('./rutas/usuarios');
const connectDB = require('./config/db');
const morgan = require('morgan');
app.set('trust proxy', true); // 👈 AGREGAR ESTA LÍNEA

dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api', bansegu);
app.use('/api', usuarios);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('🚀 Backend activo desde Railway');
});

app.listen(PORT, () => {
  console.log('Server running in development mode');
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});