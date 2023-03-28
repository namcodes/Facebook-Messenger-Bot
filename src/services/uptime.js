const startTime = Date.now();

const uptime = (api, event) => {
  const uptime = (Date.now() - startTime) / 1000;
  const minutes = Math.floor(uptime / 60);
  const seconds = Math.floor(uptime % 60);
  const time_running = `${minutes}:${seconds.toString().padStart(2, '0')} minutes`
  
  console.log(`The uptime is ${minutes}:${seconds.toString().padStart(2, '0')} minutes`);
  
  api.sendMessage(`The system has been running for ${minutes} mins and ${seconds} seconds.`, event.threadID, event.messageID);
}

module.exports = (uptime);