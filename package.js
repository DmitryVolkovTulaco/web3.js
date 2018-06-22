/* jshint ignore:start */
Package.describe({
<<<<<<< HEAD
  name: 'ethereum:web3',
  version: '0.20.6',
  summary: 'Ethereum JavaScript API, middleware to talk to a ethreum node over RPC',
  git: 'https://github.com/ethereum/ethereum.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
=======
    name: 'ethereum:web3',
    version: '1.0.0-beta.34',
    summary: 'Ethereum JavaScript API, middleware to talk to a ethreum node over RPC',
    git: 'https://github.com/ethereum/ethereum.js',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
>>>>>>> 1.0
});

// Npm.depends({
//     "xmlhttprequest": "1.7.0"
// });


Package.onUse(function(api) {
    api.versionsFrom('1.0.3.2');

    api.addFiles('dist/web3.js', ['client']); // 'server'
});

/* jshint ignore:end */
