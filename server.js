// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const lotissemntRoutes = require('./routes/lotissemntRoutes');
const participantRoutes = require('./routes/participantRoutes');
const responsableRoutes = require('./routes/responsableRoutes');
const appelOffreRoutes = require('./routes/appelOffreRoutes');
const offreDeSoumissionRoutes = require('./routes/offreDeSoumissionRoutes');
const sousOffreRoutes = require('./routes/sousOffreRoutes');
const lotRoutes = require('./routes/lotRoutes');
const soumissionRoutes = require('./routes/soumissionRoutes');
const resultatSoumissionRoutes = require('./routes/resultatSoumissionRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/lotissemnts', lotissemntRoutes);
app.use('/api/participant', participantRoutes);
app.use('/api/responsable', responsableRoutes);
app.use('/api/appel-offre', appelOffreRoutes);
app.use('/api/offre-de-soumission', offreDeSoumissionRoutes);
app.use('/api/sous-offre', sousOffreRoutes);
app.use('/api/lot', lotRoutes);
app.use('/api/soumission', soumissionRoutes);
app.use('/api/resultat-soumission', resultatSoumissionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

