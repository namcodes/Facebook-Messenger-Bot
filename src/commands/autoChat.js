
const autoChat = async (api, event, name) => {
  let input = event.body;

  let text = input.split(" ");
   if (text.length === 1 && text[0] === name) {
    api.getUserInfo(event.senderID, (err, data) => {
      if (err) return console.error(err);
      else {
        api.setMessageReaction(
          "🥲",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              let message = {
                body: `Hello ${
                  data[event.senderID]["name"]
                }, If you have any questions use the command below.\n\n${name} [question].`,
                mentions: [
                  {
                    tag: `${data[event.senderID]["name"]}`,
                    id: event.senderID,
                  },
                ],
              };

              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      }
    });
  } else if (text.length >= 2 && text[0] === name) {
    const string = text.slice(1).join(" ");
    if (
      /(sino ang gumawa sayo|sino gumawa sayo)/gi.test(string.toLowerCase())
    ) {
      api.sendMessage(
        "Ang pangalan ko ay Nam Mallari at ang lumikha sa akin ay si Noel Mallari.",
        event.threadID,
        event.messageID
      );
    } else if (/(who is your developer)/gi.test(string.toLowerCase())) {
      api.getUserID("noel.mallari.5648137", (err, data) => {
        if (err) return console.error(err);

        let message = {
          body: `My developer is Noel Mallari, a skilled and talented professional in the field of technology and software development.`,
          mentions: [
            {
              tag: "Noel Mallari",
              id: data[0].userID,
            },
          ],
        };
        api.sendMessage(message, event.threadID, event.messageID);
      });
    } else if (
      /(what is your name|ano ang pangalan mo|ano pangalan mo)/gi.test(
        string.toLowerCase()
      )
    ) {
      api.sendMessage(
        "My name is Nam Mallari",
        event.threadID,
        event.messageID
      );
    } else {
      api.sendMessage("Invalid Chat", event.threadID, event.messageID);
    }
  } else {
    api.getUserInfo(event.senderID, (err, data) => {
      if (err) return console.error(err);
      else {
        api.setMessageReaction(
          "🥲",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              let message = {
                body: `Hello ${
                  data[event.senderID]["name"]
                }, If you have any questions use the command below.\n\n${name} [question].`,
                mentions: [
                  {
                    tag: `${data[event.senderID]["name"]}`,
                    id: event.senderID,
                  },
                ],
              };

              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      }
    });
  }
};

module.exports = autoChat;
