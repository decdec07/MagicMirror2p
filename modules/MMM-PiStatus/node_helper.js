const { exec } = require("child_process");
const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  socketNotificationReceived: function (notification, payload) {
    if (notification === "GET_STATS") {
      exec(`bash ${payload}`, (error, stdout, stderr) => {
        if (error) {
          this.sendSocketNotification("STATS_RESULT", "Error: " + error.message);
          return;
        }
        if (stderr) {
          this.sendSocketNotification("STATS_RESULT", "Stderr: " + stderr);
          return;
        }
        this.sendSocketNotification("STATS_RESULT", stdout);
      });
    }
  }
});
