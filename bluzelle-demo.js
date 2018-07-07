
const bluzelle = require('bluzelle');

// Connect to the database
bluzelle.connect('ws://testnet.bluzelle.com:51010', 'changeme');

// Create a Key
bluzelle.create('myKey', 'Spiderman').then(() => {

	// Read it back
	bluzelle.read('myKey').then(value => {

		console.log(value); // 'Spiderman'

		// Update the key
		bluzelle.update('myKey', 'Peter Parker').then(() => {

			// Read it back
			bluzelle.read('myKey').then(value => {

				console.log(value); // 'Peter Parker'

			}).catch(e => console.log(e.message));

		}).catch(e => console.log(e.message));

	}).catch(e => console.log(e.message));

}).catch(e => console.log(e.message));
