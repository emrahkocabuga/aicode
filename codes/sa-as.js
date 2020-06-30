client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('ve Aleyküm Selam');
  }
});
