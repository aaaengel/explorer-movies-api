const config = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_TTL: process.env.JWT_TTL || '7d',
  MONGO_DB_ADDRESS: 'mongodb://localhost:27017/bitfilmsdb',
};
module.exports = config;
