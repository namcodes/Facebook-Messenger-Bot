const fs = require("fs");
const axios = require("axios");
const login = require("fca-unofficial");
const http = require("https");

const prefix = "$";
const prefix_name = prefix + "nam";
const admins = ["100037701284020"];
const msgs = {};

//Services

const antiUnsent = require("./src/services/antiUnsent");
const uptime = require("./src/services/uptime");
const { string, command } = require("./src/services/getString");

//Commands
const autoChat = require("./src/commands/autoChat");
const about = require("./src/commands/about");
const lyrics = require("./src/commands/lyrics");

const {
  angry,
  cuddle,
  kiss,
  punch,
  bite,
  bored,
  chocolate,
  cookie,
  dance,
  drunk,
  happy,
  kill,
  laugh,
  lick,
  lonely,
  pat,
  poke,
  pregnant,
  run,
  slap,
  sleep,
} = require("./src/commands/reactions");

login(
  {
    appState: JSON.parse(fs.readFileSync("fbstate.json", "utf8")),
  },
  (err, api) => {
    if (err) return console.error(err);

    api.setOptions({
      selfListen: true,
      listenEvents: true,
    });

    api.listen(async (err, event) => {
      if (err) return console.error(err);

      switch (event.type) {
        case "message": {
        
          //Get unsent message text/attachments
          if (event.attachments.length != 0) {
            if (event.attachments[0].type == "photo") {
              msgs[event.messageID] = ["img", event.attachments[0].url];
            } else if (event.attachments[0].type == "animated_image") {
              msgs[event.messageID] = ["gif", event.attachments[0].url];
            } else if (event.attachments[0].type == "sticker") {
              msgs[event.messageID] = [
                "sticker",
                event.attachments[0].stickerID,
              ];
            } else if (event.attachments[0].type == "video") {
              msgs[event.messageID] = ["vid", event.attachments[0].url];
            } else if (event.attachments[0].type == "audio") {
              msgs[event.messageID] = ["vm", event.attachments[0].url];
            } else if (event.attachments[0].type == "share") {
              msgs[event.messageID] = ["share", event.body];
            }
          } else {
            msgs[event.messageID] = event.body;
          }

          //get Message
          if (event.body != null && typeof event.body === "string") {
            let input = event.body;
            console.log(prefix_name[1].toUpperCase())
            if (
              input.startsWith(prefix_name) || input.startsWith(prefix_name[1].toUpperCase())
            ) {
              autoChat(api, event, prefix_name);
            } else {
              switch (input.startsWith(prefix)) {
                case command(input, prefix, "sleep"): {
                  sleep(api, event);
                  break;
                }
                case command(input, prefix, "lyrics"): {
                  lyrics(api, event, string(input));
                  break;
                }

                case command(input, prefix, "uptime"): {
                  uptime(api, event);
                  break;
                }

                case command(input, prefix, "about"): {
                  about(api, event);
                  break;
                }

                default: {
                  api.getUserInfo(event.senderID, (err, data) => {
                    if (err) return console.error(err);
                    else {
                      let message = {
                        body: `Hello ${
                          data[event.senderID]["name"]
                        }, \nInvalid command sarap mo isako 😐 .`,
                        mentions: [
                          {
                            tag: data[event.senderID]["name"],
                            id: event.senderID,
                          },
                        ],
                      };
                      api.sendMessage(message, event.threadID, event.messageID);
                    }
                  });
                  break;
                }
              }
            }
          }
          break;
        }

        case "message_reply": {
          if (event.body != null && typeof event.body === "string") {
            let input = event.body;

            if(input.startsWith(prefix + "sleep")){
              sleep(api, event);
            }
          }
          break;
        }
        case "message_unsend":
          if (!admins.includes(event.senderID)) {
            antiUnsent(api, event, msgs);
          }

          break;
        case "event":
        case "change_thread_image":
          //code execute
          break;
      }
    });
  }
);

const express = require('express');
const app = express();

// Keep me.
app.use(express.static('public'));
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
