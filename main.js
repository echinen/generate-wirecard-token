const { wirecard } = require('./config');

const ENV = process.env.ENVIRONMENT || 'DEV';

console.log(`GERANDO CHAVE DE ACESSO WIRECARD DO AMBIENTE DE [${ENV}]`);

const tokenMoip = wirecard[ENV].token;
const keyMoip = wirecard[ENV].key;

const authToken = new Buffer(`${tokenMoip}:${keyMoip}`).toString('base64');

console.log(`CHAVE: ${authToken}`);