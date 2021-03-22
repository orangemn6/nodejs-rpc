const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "HTML, CSS, and JS.",
            state: "Having Fun",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "main", // large image key from developer portal > rich presence > art assets
                large_text: "large image text"
            },
            buttons: [{
                    label: "Get Your Own Site",
                    url: "https://discord.gg/gc5y9ySuRM"
                },
                {
                    label: "My Site",
                    url: "https://orangemn6.xyz"
                }
            ]
        }
    });
});

client.login({
    clientId: '813245265984618496', // put the client id from the dev portal here
    clientSecret: 'j_9VyGf9X7xsW5K-XsgGUdFVf2nlelb6' // put the client secret from the dev portal here
});