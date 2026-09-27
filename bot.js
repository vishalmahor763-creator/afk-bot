const bedrock = require('bedrock-protocol');

function startBot(){
  const client = bedrock.createClient({
    host: 'Tusharwhx.aternos.me',
    port: 19132,
    username: 'AFK_Bot',
    offline: true,
    version: '1.21.60'
  });

  client.on('spawn', () => {
    console.log('✅ BOT BEDROCK PE JOIN HO GAYA');
  });

  client.on('disconnect', (packet) => {
    console.log('Disconnect:', packet.reason);
    setTimeout(startBot, 5000);
  });

  client.on('error', (e) => console.log(e));
}

startBot();
