const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bansegu = require('./rutas/finclu');
const usuarios = require('./rutas/usuarios');
const connectDB = require('./config/db');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();
app.set('trust proxy', true); // ✅ Ahora está en el lugar correcto

app.use(express.json());
app.use(cors()); // Por si falta

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api', bansegu);
app.use('/api', usuarios);

app.get('/', (req, res) => {
  res.send('🚀 Backend activo desde Railway');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running in development mode');
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`);
  process.exit(1); // También corregí 'server.close()' que estaba mal referenciado
});