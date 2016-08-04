'use strict'
const base = require('./wdio.conf.base')

exports.config = Object.assign(base.config, {
  capabilities: [
    {
      browserName: 'chrome',
      platform: 'WIN10',
      version: 'latest',
      tunnel: true
    },
    {
      browserName: 'firefox',
      platform: 'WIN10',
      version: 'latest',
      tunnel: true
    }
  ],
  services: ['testingbot'],
  user: process.env.TESTINGBOT_KEY,
  key: process.env.TESTINGBOT_SECRET,
  tbTunnel: true
})
