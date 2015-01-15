var mqtt = require("mqtt"),
    config = require("./config.json"),
    client = mqtt.createClient(config.port, config.host, config.options),
    tessel = require('tessel'),
    climate = require('climate-si7020').use(tessel.port['A']);

climate.on('ready', function ready() {
  console.log('climate ready');
  setInterval(function() {
    climate.readTemperature(function(err, temperature) {
      if (err) return;

      var msg = temperature.toString();
      console.log(msg);
      client.publish(config.topic + "/tessel", msg);
    });
  }, 20000);
});
