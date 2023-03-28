const google = require('googlethis');

const translate = async (api, event, text) =>{
    await google.search("translate " + text).then(res => {
        if (!res.translation) {
          api.sendMessage("Error: Cannot identify the language for the text you entered!", event.threadID, event.messageID);
        } else {
          let sourceLanguage = res.translation.source_language;
          if (sourceLanguage) {
            let r = sourceLanguage.replace(/- detected/gi, '');
            api.setMessageReaction("✅", event.messageID, (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage("📚 Translation Result 📖\n" + "\nLanguage : \n" + r + " = " + res.translation.target_language + "\n\n===============\n\n" + r + ": " + '"' + res.translation.source_text + '"' + "\n" + res.translation.target_language + ": " + '"' + res.translation.target_text + '"', event.threadID, event.messageID);
              }
            }, true);
          } else {
            api.setMessageReaction("😢", event.messageID, (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage("Error: Cannot identify the source language for the text you entered!", event.threadID, event.messageID);
              }
            }, true);
          }
        }
      })
}

module.exports = (translate);