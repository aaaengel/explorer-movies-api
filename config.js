const config = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_TTL: process.env.JWT_TTL || '7d',
<<<<<<< HEAD
=======
  MONGO_DB_ADDRESS: 'mongodb://localhost:27017/bitfilmsdb',
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
};
module.exports = config;
