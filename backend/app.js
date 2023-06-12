require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig/serverConfig');


const apiRouterPersonalisation = require('./routes/api/routes.personalisation');
const apiCountriesRouter = require('./routes/api/routes.countries');


 const apiAuthRoute = require('./routes/api/routes.personalisation');




const app = express();
const PORT = process.env.PORT ?? 4000;

serverConfig(app);


app.use('/api', apiRouterPersonalisation);
app.use('/api/countries', apiCountriesRouter);


app.use('/api/auth', apiAuthRoute);





app.listen(PORT, () => {
  console.log(`Go on port ${PORT}`);
});
