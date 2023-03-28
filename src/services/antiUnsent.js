const fs = require('fs');
const http = require('https');

const antiUnsent = (api, event, msgs) => {
  let d = msgs[event.messageID];
  if (typeof (d) == "object") {
    api.getUserInfo(event.senderID, (err, data) => {
      if (err) return console.error(err);
      else {
        if (d[0] == "img") {
          var file = fs.createWriteStream("./cache/photo.jpg");
          http.get(d[1], function (gifResponse) {
            gifResponse.pipe(file);
            file.on('finish', function () {
              console.log('finished downloading photo..')
              let message = {
                body: data[event.senderID]['name'] + " unsent this Photo 🧐 : \n",
                mentions: [{
                  tag: `${data[event.senderID]['name']}`,
                  id: event.senderID,
                }],
                attachment: fs.createReadStream('./cache/photo.jpg')
              }
              api.sendMessage(message, event.threadID);
            });
          });
        } else if (d[0] == "gif") {
          var file = fs.createWriteStream("./cache/animated_image.gif");
          http.get(d[1], function (gifResponse) {
            gifResponse.pipe(file);
            file.on('finish', function () {
              console.log('finished downloading gif..')
              let message = {
                body: data[event.senderID]['name'] + " unsent this GIF 🧐: \n",
                mentions: [{
                  tag: `${data[event.senderID]['name']}`,
                  id: event.senderID,
                }],
                attachment: fs.createReadStream('./cache/animated_image.gif')
              }
              api.sendMessage(message, event.threadID);
            });
          });
        } else if (d[0] == "sticker") {
          api.sendMessage({
            body: data[event.senderID]['name'] + " unsent this Sticker 🧐 : \n",
            mentions: [{
              tag: `${data[event.senderID]['name']}`,
              id: event.senderID,
            }]}, event.threadID);

          setTimeout(() => {
            let sticker = {
              sticker: d[1]
            }
            api.sendMessage(sticker, event.threadID);
          }, 300);
        } else if (d[0] == "vid") {
          var file = fs.createWriteStream("./cache/video.mp4");
          http.get(d[1], function (gifResponse) {
            gifResponse.pipe(file);
            file.on('finish', function () {
              console.log('finished downloading video..')
              let message = {
                body: data[event.senderID]['name'] + " unsent this Video 🧐: \n",
                mentions: [{
                  tag: `${data[event.senderID]['name']}`,
                  id: event.senderID,
                }],
                attachment: fs.createReadStream('./cache/video.mp4')
              }
              api.sendMessage(message, event.threadID);
            });
          });
        } else if (d[0] == "vm") {
          var file = fs.createWriteStream("./cache/vm.mp3");
          http.get(d[1], function (gifResponse) {
            gifResponse.pipe(file);
            file.on('finish', function () {
              console.log('finished downloading audio..')
              let message = {
                body: data[event.senderID]['name'] + " unsent this Audio 🤭: \n",
                mentions: [{
                  tag: `${data[event.senderID]['name']}`,
                  id: event.senderID,
                }],
                attachment: fs.createReadStream('./cache/vm.mp3')}
              api.sendMessage(message, event.threadID);
            });
          });
        } else if (d[0] == "share") {
          let message = {
            body: `🤭 ${data[event.senderID]['name']} unsent this Message : \n\n${d[1]}`,
            mentions: [{
              tag: `${data[event.senderID]['name']}`,
              id: event.senderID,
            }],
          };
          api.sendMessage(message, event.threadID);
        }
      }
    });
  } else {
    api.getUserInfo(event.senderID, (err, data) => {
      if (err) return console.error(err);
      else {
        let message = {
          body: `🤭 ${data[event.senderID]['name']} unsent this Message : \n\n${msgs[event.messageID]}`,
          mentions: [{
            tag: `${data[event.senderID]['name']}`,
            id: event.senderID,
          }],
        };
        api.sendMessage(message, event.threadID);
      }
    });
  }
}

module.exports = (antiUnsent);