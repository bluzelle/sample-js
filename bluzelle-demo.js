/* 
Bluzelle sample node.js application
*/

const bluzelle = require('bluzelle');
bluzelle.connect('ws://localhost:51011', 'foo');
bluzelle.create('mykey2', { name: 'Peter Parker' }).then(() => 
    {  
    bluzelle.read('mykey2').then(value => 
        {
        console.log("Value gotten back from db after reading, post-create: " + JSON.stringify(value));
        bluzelle.update('mykey2', { name: 'Spiderman' }).then(() => 
            {
            bluzelle.read('mykey2').then(value => 
                {
                console.log("Value gotten back from db after reading, post-update: " + JSON.stringify(value));
                }, 
                error => 
                    {
                    throw error;
                    });
            }, 
            error => 
                { 
                throw error;
                });
        }, 
        error => 
            {
            throw error;
            });
    }, 
    error => 
        {   
        throw error;
        });
