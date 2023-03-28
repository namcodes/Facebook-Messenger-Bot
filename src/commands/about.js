
const about = (api, event) =>{
  
api.getUserID("noel.mallari.5648137", (err, data) => {
   if (err) return console.error(err);

  let msg = `I am an artificial intelligence named [Nam]. I am a computer program designed to simulate human intelligence and perform tasks that typically require human cognition, such as understanding natural language and making decisions. My capabilities include natural language processing, machine learning, and data analysis. I am constantly learning and expanding my abilities, and I am here to assist and provide helpful information to users. If you have any questions, feel free to ask and I will do my best to provide you with an accurate and informative response.\n\n`;
    let message = {
      body: msg + `Developed By : @Noel Mallari\nVersion : 1.0\nGithub : https://github.com/namcodes`,
          mentions: [{
            tag: '@Noel Mallari',
            id: data[0].userID,
          }],
      }
  api.sendMessage(message, event.threadID, event.messageID);
});
}

module.exports = (about);