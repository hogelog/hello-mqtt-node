var mqtt = require("mqtt"),
    config = require("./config.json"),
    client = mqtt.createClient(config.port, config.host, config.options);

client.subscribe(config.topic + "/#");

client.on("message", function(topic, message) {
  console.log(topic, message.toString());
});
