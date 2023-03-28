const google = require('googlethis');

const lyrics = async (api, event, text) =>{
    await google.search(`${text} song lyrics`).then(res => {
        if (res.knowledge_panel.type === undefined) {
          api.sendMessage("❌ Error : Cannot identify the song title you entered!", event.threadID, event.messageID);
          return;
        } else if (res.knowledge_panel.lyrics == null) {
          api.sendMessage("❌ Error : Cannot identify the song title you entered!", event.threadID, event.messageID);
        } else {
          api.setMessageReaction("✅", event.messageID, (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(`Title : ${res.knowledge_panel.title}\n\nSong Lyrics : \n${res.knowledge_panel.lyrics}`, event.threadID, event.messageID);
            }

          }, true);
        }
      });
}

module.exports = (lyrics);