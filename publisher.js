var mqtt = require("mqtt"),
    config = require("./config.json"),
    client = mqtt.createClient(config.port, config.host, config.options);

client.publish(config.topic + "/hello", "hello");

client.end();
