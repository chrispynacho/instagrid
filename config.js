var environmentSettings = {
  app: {
    port: 3000
  },
  db: {
    host: 'mongodb://127.0.0.1/',
    name: 'dashound',
    options: {
      encoding: 'json',
      createIfMissing: true
    }
  },
  instagram: {
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || ''
  }
};

function config() {
  console.log('environmentSettings', environmentSettings);
  console.log('process.env.CLIENT_ID', process.env.CLIENT_ID);
  return environmentSettings;
}

module.exports = config();
