// DEBUG=app:* node src/server/mongo/scripts/seedApiKeys.js

const chalk = require('chalk');
const crypto = require('crypto');
const debug = require('debug')('app:scripts:api-keys');
const MongoLib = require('../lib/mongo');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:product',
  'create:product',
  'update:product',
  'delete:product',
  'read:user-product',
  'create:user-product',
  'delete:user-product',
];

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:product',
  'read:user-product',
  'create:user-product',
  'delete:user-product',
];

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes
  }
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

async function seedApiKeys() {
  try {
    const mongoDB = new MongoLib();

    const promises = apiKeys.map(async apiKey => {
      await mongoDB.create('api-keys', apiKey);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} api keys have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedApiKeys();