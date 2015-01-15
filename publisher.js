var mqtt = require("mqtt"),
    config = require("./config.json"),
    client = mqtt.connect(config);

client.publish(config.username + "/hello", "hello");

client.end();
