require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig/serverConfig');

const apiCountriesRouter = require('./routes/api/routes.countries');

const apiAuthRoute = require('./routes/api/routes.personalisation');
const servicesForMee = require('./routes/api/routes.servicesForMee');
const myServices = require('./routes/api/routes.myServces');

const app = express();
const PORT = process.env.PORT ?? 4000;

serverConfig(app);

app.use('/api/countries', apiCountriesRouter);
app.use('/api/myServices', myServices);
app.use('/api/auth', apiAuthRoute);
app.use('/api/servicesForMee', servicesForMee);  

app.listen(PORT, () => {
  console.log(`Go on port ${PORT}`);
});
