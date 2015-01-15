var mqtt = require("mqtt"),
    config = require("./config.json"),
    client = mqtt.connect(config);

client.subscribe(config.username + "/#");

client.on("message", function(topic, message) {
  console.log(topic, message.toString());
});
