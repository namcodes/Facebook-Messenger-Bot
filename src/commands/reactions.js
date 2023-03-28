const fs = require("fs");
const http = require("https");
const axios = require("axios");

const angry = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/angry")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*😡 Angry *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const cuddle = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/cuddle")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🤗 Cuddle *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const kiss = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/kiss").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "*😘 Kiss*",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const punch = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/punch")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*bitten*",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const bite = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/bite").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "*bitten*",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const bored = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/bored")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🥱 Bored *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const chocolate = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/chocolate")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🍫 Chocolate *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const cookie = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/cookie")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🍪 Cookie *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const dance = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/dance")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🔊 Dance *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const drunk = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/drunk")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🔊 Drunk *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const happy = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/happy")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*😊 Happy *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const kill = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/kill").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "*🔪😀 Killed *",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const laugh = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/laugh")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*😂 Laugh *",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const lick = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/lick").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "*😋 Lick *",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const lonely = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/lonely")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🥺 Lonely*",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const pat = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/pat").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "*🥳 Pat *",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const poke = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/poke").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "*Poke*",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const pregnant = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/pregnant")
    .then((response) => {
      var file = fs.createWriteStream("./cache/photo.png");
      var targetUrl = response.data.url;

      http.get(targetUrl, function (gifResponse) {
        gifResponse.pipe(file);
        file.on("finish", function () {
          var message = {
            body: "*🤰 Pregnant*",
            attachment: fs.createReadStream("./cache/photo.png"),
          };
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err) => {
              if (err) return console.error(err);
              else {
                api.sendMessage(message, event.threadID, event.messageID);
              }
            },
            true
          );
        });
      });
    });
};

const run = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/run").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "* 🏃 Run*",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const slap = (api, event) => {
  axios.get("https://api.satou-chan.xyz/api/endpoint/slap").then((response) => {
    var file = fs.createWriteStream("./cache/photo.png");
    var targetUrl = response.data.url;

    http.get(targetUrl, function (gifResponse) {
      gifResponse.pipe(file);
      file.on("finish", function () {
        var message = {
          body: "*Slapped*",
          attachment: fs.createReadStream("./cache/photo.png"),
        };
        api.setMessageReaction(
          "✅",
          event.messageID,
          (err) => {
            if (err) return console.error(err);
            else {
              api.sendMessage(message, event.threadID, event.messageID);
            }
          },
          true
        );
      });
    });
  });
};

const sleep = (api, event) => {
  axios
    .get("https://api.satou-chan.xyz/api/endpoint/sleep")
    .then((response) => {
      let UserID = (Object.keys(event.mentions)[0] === "" || Object.keys(event.mentions)[0] === null) ? "" : event.messageReply.senderID;
        if (UserID === undefined || UserID === null) {
        api.sendMessage(
          "Please mention someone.",
          event.threadID,
          event.messageID
        );
      } else {
        let file = fs.createWriteStream("./cache/photo.png");
        var targetUrl = response.data.url;

        http.get(targetUrl, function (gifResponse) {
          gifResponse.pipe(file);
          file.on("finish", function () {

            console.log(UserID);

            api.getUserInfo(UserID, (err, data) => {
              if (err) return console.error(err);
              let message = {
                body: `${data[UserID]["name"]} Sleep Well 💕😴.`,
                mentions: [
                  {
                    tag: `${data[mention]["name"]}`,
                    id: mention,
                  },
                ],
                attachment: fs.createReadStream("./cache/photo.png"),
              };
              api.setMessageReaction(
                "✅",
                event.messageID,
                (err) => {
                  if (err) return console.error(err);
                  else {
                    api.sendMessage(message, event.threadID, event.messageID);
                  }
                },
                true
              );
            });
          });
        });
      }
    });
};

//Configure me :)

module.exports = {
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
};
